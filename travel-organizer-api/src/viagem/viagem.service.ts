import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { CreateViagemDto } from './dto/create-viagem.dto'
import { UpdateViagemDto } from './dto/update-viagem.dto'

@Injectable()
export class ViagemService {
    constructor(private prisma: PrismaService) { }

    create(userId: number, dto: CreateViagemDto) {
        const custoCombustivel = this.calcularCustoCombustivel(
            dto.km,
            dto.autonomia,
            dto.valorGasolina,
        )

        const valorTotal = this.calcularTotal({
            valorPassagem: dto.valorPassagem,
            pedagio: dto.pedagio,
            aluguelCarro: dto.aluguelCarro,
            custoCombustivel,
        })

        return this.prisma.viagem.create({
            data: {
                ...dto,
                custoCombustivel,
                valorTotal,
                userId,
            },
        })
    }

    findAll(userId: number) {
        return this.prisma.viagem.findMany({
            where: { userId },
        })
    }

    async findOne(userId: number, id: number) {
        const viagem = await this.prisma.viagem.findUnique({
            where: { id, userId },
            include: {
                pontosTuristicos: true,
            },
        })

        if (!viagem) {
            throw new NotFoundException('Viagem não encontrada')
        }

        return viagem
    }



    async update(userId: number, id: number, dto: UpdateViagemDto) {
        const viagemAtual = await this.findOne(userId, id)

        if (!viagemAtual) {
            throw new NotFoundException('Viagem não encontrada')
        }

        const custoCombustivel = this.calcularCustoCombustivel(
            dto.km ?? (viagemAtual.km ?? undefined),
            dto.autonomia ?? (viagemAtual.autonomia ?? undefined),
            dto.valorGasolina ?? (viagemAtual.valorGasolina ?? undefined),
        )

        const valorTotal = this.calcularTotal({
            valorPassagem: dto.valorPassagem ?? (viagemAtual.valorPassagem ?? undefined),
            pedagio: dto.pedagio ?? (viagemAtual.pedagio ?? undefined),
            aluguelCarro: dto.aluguelCarro ?? (viagemAtual.aluguelCarro ?? undefined),
            custoCombustivel,
        })

        return this.prisma.viagem.update({
            where: { id, userId },
            data: {
                ...dto,
                custoCombustivel,
                valorTotal,
            },
        })
    }

    remove(userId: number, id: number) {
        return this.prisma.viagem.delete({
            where: { id, userId },
        })
    }

    private calcularCustoCombustivel(
        km?: number,
        autonomia?: number,
        valorGasolina?: number,
    ): number {
        if (!km || !autonomia || !valorGasolina) {
            return 0
        }

        const litros = km / autonomia
        return litros * valorGasolina
    }

    private calcularTotal(data: {
        valorPassagem?: number
        pedagio?: number
        aluguelCarro?: number
        custoCombustivel?: number
    }): number {
        return (
            (data.valorPassagem ?? 0) +
            (data.pedagio ?? 0) +
            (data.aluguelCarro ?? 0) +
            (data.custoCombustivel ?? 0)
        )
    }
}
