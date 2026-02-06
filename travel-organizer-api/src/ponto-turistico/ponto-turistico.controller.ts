import { Body, Controller, Get, Param, Post, Put, Delete, Req } from '@nestjs/common'
import { ParseIntPipe, Patch } from '@nestjs/common'
import { PontoTuristicoService } from './ponto-turistico.service'
import { CreatePontoTuristicoDto } from './dto/create-ponto-turistico.dto'
import { UpdatePontoTuristicoDto } from './dto/update-ponto-turistico.dto'
import { UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'

@UseGuards(AuthGuard('jwt'))
@Controller('pontos-turisticos')
export class PontoTuristicoController {
  constructor(private readonly service: PontoTuristicoService) {}

  @Post()
  create(@Body() dto: CreatePontoTuristicoDto) {
    return this.service.create(dto)
  }

  @Get('/viagem/:viagemId')
  async findByViagem(@Req() req, @Param('viagemId', ParseIntPipe) viagemId: number) {
    return this.service.findAllByViagem(req.user.id, viagemId)
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdatePontoTuristicoDto,
  ) {
    return this.service.update(id, dto)
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id)
  }
}