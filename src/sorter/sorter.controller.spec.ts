import { Test, TestingModule } from '@nestjs/testing';
import { SorterController } from './sorter.controller';

describe('SorterController', () => {
  let controller: SorterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SorterController],
    }).compile();

    controller = module.get<SorterController>(SorterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
