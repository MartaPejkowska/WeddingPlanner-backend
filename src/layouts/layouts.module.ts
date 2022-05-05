import { Module } from '@nestjs/common';
import { LayoutsService } from './layouts.service';
import { LayoutsController } from './layouts.controller';

@Module({
  controllers: [LayoutsController],
  providers: [LayoutsService]
})
export class LayoutsModule {}
