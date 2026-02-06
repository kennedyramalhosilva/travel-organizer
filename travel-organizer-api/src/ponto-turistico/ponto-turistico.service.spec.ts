import { Test, TestingModule } from '@nestjs/testing';
import { PontoTuristicoService } from './ponto-turistico.service';

describe('PontoTuristicoService', () => {
  let service: PontoTuristicoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PontoTuristicoService],
    }).compile();

    service = module.get<PontoTuristicoService>(PontoTuristicoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
