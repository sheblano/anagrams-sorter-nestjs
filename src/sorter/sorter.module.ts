import { Module } from '@nestjs/common';
import { SorterService } from './service/sorter.service';
import { SorterController } from './sorter.controller';

@Module({
  controllers: [SorterController],
  imports: [],
  providers: [SorterService]
})
export class SorterModule {}
