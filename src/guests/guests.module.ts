import { Module } from '@nestjs/common';
import { GuestsService } from './guests.service';
import { GuestsController } from './guests.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Wedding } from 'src/weddings/entities/wedding.entity';
import { Guest } from './entities/guest.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User,Wedding,Guest])],
  controllers: [GuestsController],
  providers: [GuestsService]
})
export class GuestsModule {}
