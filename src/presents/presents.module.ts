import { Module } from '@nestjs/common';
import { PresentsService } from './presents.service';
import { PresentsController } from './presents.controller';

@Module({
  controllers: [PresentsController],
  providers: [PresentsService]
})
export class PresentsModule {}
