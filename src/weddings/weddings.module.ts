import { Module } from '@nestjs/common';
import { WeddingsService } from './weddings.service';
import { WeddingsController } from './weddings.controller';

@Module({
  controllers: [WeddingsController],
  providers: [WeddingsService]
})
export class WeddingsModule {}
