import { Module } from '@nestjs/common';
import { WeddingsService } from './weddings.service';
import { WeddingsController } from './weddings.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bride } from 'src/brides/entities/bride.entity';
import { Wedding } from './entities/wedding.entity';
import { Groom } from 'src/grooms/entities/groom.entity';
import { Guest } from 'src/guests/entities/guest.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Bride,Wedding,Groom, Guest])],
  controllers: [WeddingsController],
  providers: [WeddingsService]
})
export class WeddingsModule {}
