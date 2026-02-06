import { Body, Controller, Get, Param, Post, Put, Delete, ParseIntPipe, Req  } from '@nestjs/common'
import { ViagemService } from './viagem.service'
import { CreateViagemDto } from './dto/create-viagem.dto'
import { UpdateViagemDto } from './dto/update-viagem.dto'
import { UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'

@UseGuards(AuthGuard('jwt'))
@Controller('viagens')
export class ViagemController {
  constructor(private readonly viagemService: ViagemService) { }

  @Post()
  create(@Req() req, @Body() dto: CreateViagemDto) {
    return this.viagemService.create(req.user.userId, dto)
  }

  @Get()
  findAll(@Req() req) {
    return this.viagemService.findAll(req.user.userId)
  }

  @Get(':id')
  findOne(@Req() req,@Param('id', ParseIntPipe) id: number) {
    return this.viagemService.findOne(req.user.userId, id)
  }

  @Put(':id')
  update(
    @Req() req,
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateViagemDto,
  ) {
    return this.viagemService.update(req.user.userId,id, dto)
  }

  @Delete(':id')
  remove(@Req() req,@Param('id', ParseIntPipe) id: number) {
    return this.viagemService.remove(req.user.userId, id)
  }
}
