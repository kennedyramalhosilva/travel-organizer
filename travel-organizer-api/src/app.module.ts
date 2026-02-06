import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ViagemModule } from './viagem/viagem.module';
import { PontoTuristicoModule } from './ponto-turistico/ponto-turistico.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ViagemModule, PontoTuristicoModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
