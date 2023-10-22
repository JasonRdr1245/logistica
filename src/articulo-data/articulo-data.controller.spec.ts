import { Test, TestingModule } from '@nestjs/testing';
import { ArticuloDataController } from './articulo-data.controller';
import { ArticuloDataService } from './articulo-data.service';

describe('ArticuloDataController', () => {
  let controller: ArticuloDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArticuloDataController],
      providers: [ArticuloDataService],
    }).compile();

    controller = module.get<ArticuloDataController>(ArticuloDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
