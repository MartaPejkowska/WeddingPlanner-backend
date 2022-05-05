import { Module } from '@nestjs/common';
import { GroomsService } from './grooms.service';
import { GroomsController } from './grooms.controller';

@Module({
  controllers: [GroomsController],
  providers: [GroomsService]
})
export class GroomsModule {}
