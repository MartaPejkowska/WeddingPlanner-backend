import { Module } from '@nestjs/common';
import { BridesService } from './brides.service';
import { BridesController } from './brides.controller';

@Module({
  controllers: [BridesController],
  providers: [BridesService]
})
export class BridesModule {}
