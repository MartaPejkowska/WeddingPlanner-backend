import { Module } from '@nestjs/common';
import { GuestsService } from './guests.service';
import { GuestsController } from './guests.controller';

@Module({
  controllers: [GuestsController],
  providers: [GuestsService]
})
export class GuestsModule {}
