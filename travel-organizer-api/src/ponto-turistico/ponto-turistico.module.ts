import { Module } from '@nestjs/common';
import { PontoTuristicoController } from './ponto-turistico.controller';
import { PontoTuristicoService } from './ponto-turistico.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [PontoTuristicoController],
  providers: [PontoTuristicoService],
  imports: [PrismaModule]
})
export class PontoTuristicoModule {}
