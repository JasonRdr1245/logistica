import { Test, TestingModule } from '@nestjs/testing';
import { MovArticuloController } from './mov-articulo.controller';
import { MovArticuloService } from './mov-articulo.service';

describe('MovArticuloController', () => {
  let controller: MovArticuloController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MovArticuloController],
      providers: [MovArticuloService],
    }).compile();

    controller = module.get<MovArticuloController>(MovArticuloController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
