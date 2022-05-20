import { Module } from '@nestjs/common';
import { BridesService } from './brides.service';
import { BridesController } from './brides.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bride } from './entities/bride.entity';
import { User } from 'src/users/entities/user.entity';
import { Wedding } from 'src/weddings/entities/wedding.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Bride,Wedding,User])],
  controllers: [BridesController],
  providers: [BridesService]
})
export class BridesModule {}
