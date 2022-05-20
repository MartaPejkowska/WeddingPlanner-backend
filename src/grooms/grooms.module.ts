import { Module } from '@nestjs/common';
import { GroomsService } from './grooms.service';
import { GroomsController } from './grooms.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Groom } from './entities/groom.entity';
import { Wedding } from 'src/weddings/entities/wedding.entity';
import { User } from 'src/users/entities/user.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Groom,Wedding,User])],
  controllers: [GroomsController],
  providers: [GroomsService]
})
export class GroomsModule {}
