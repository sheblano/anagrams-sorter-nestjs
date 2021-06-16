import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SorterModule } from './sorter/sorter.module';

@Module({
  imports: [SorterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
