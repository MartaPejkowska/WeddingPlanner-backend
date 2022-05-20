import { Module } from '@nestjs/common';
import { WeddingsService } from './weddings.service';
import { WeddingsController } from './weddings.controller';
import { Wedding } from './entities/wedding.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Wedding])],
  controllers: [WeddingsController],
  providers: [WeddingsService]
})
export class WeddingsModule {}
