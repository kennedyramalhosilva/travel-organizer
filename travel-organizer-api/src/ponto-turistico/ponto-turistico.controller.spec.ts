import { Test, TestingModule } from '@nestjs/testing';
import { PontoTuristicoController } from './ponto-turistico.controller';

describe('PontoTuristicoController', () => {
  let controller: PontoTuristicoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PontoTuristicoController],
    }).compile();

    controller = module.get<PontoTuristicoController>(PontoTuristicoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
