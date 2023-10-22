import { Test, TestingModule } from '@nestjs/testing';
import { ArticuloDataService } from './articulo-data.service';

describe('ArticuloDataService', () => {
  let service: ArticuloDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArticuloDataService],
    }).compile();

    service = module.get<ArticuloDataService>(ArticuloDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
