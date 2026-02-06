import { PartialType } from '@nestjs/mapped-types'
import { CreatePontoTuristicoDto } from './create-ponto-turistico.dto'

export class UpdatePontoTuristicoDto extends PartialType(
  CreatePontoTuristicoDto,
) {}
