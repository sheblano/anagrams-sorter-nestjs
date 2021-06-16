import { Test, TestingModule } from '@nestjs/testing';
import { SorterService } from './sorter.service';

describe('SorterService', () => {
  let service: SorterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SorterService],
    }).compile();

    service = module.get<SorterService>(SorterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
