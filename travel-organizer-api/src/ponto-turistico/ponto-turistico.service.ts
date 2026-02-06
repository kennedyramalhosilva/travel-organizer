import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'
import { CreatePontoTuristicoDto } from './dto/create-ponto-turistico.dto';
import { UpdatePontoTuristicoDto } from './dto/update-ponto-turistico.dto';

@Injectable()
export class PontoTuristicoService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreatePontoTuristicoDto) {
    return this.prisma.pontoTuristico.create({
      data: dto,
    })
  }

  findAllByViagem(userId: number, viagemId: number) {
    return this.prisma.pontoTuristico.findMany({
      where: { viagemId, viagem: { userId } },
    })
  }

  update(id: number, dto: UpdatePontoTuristicoDto) {
    return this.prisma.pontoTuristico.update({
      where: { id },
      data: dto,
    })
  }

  remove(id: number) {
    return this.prisma.pontoTuristico.delete({
      where: { id },
    })
  }
}