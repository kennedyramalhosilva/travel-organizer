import { IsBoolean, IsNumber, IsOptional, IsString, Min } from 'class-validator'

export class CreatePontoTuristicoDto {
  @IsString()
  nome: string

  @IsOptional()
  @IsString()
  descricao?: string

  @IsOptional()
  @IsString()
  endereco?: string

  @IsOptional()
  @IsNumber()
  @Min(0)
  custoEstimado?: number

  @IsNumber()
  viagemId: number
}