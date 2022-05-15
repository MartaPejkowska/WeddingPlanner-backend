import { Module } from '@nestjs/common';
import { TablesService } from './tables.service';
import { TablesController } from './tables.controller';
import { Table } from './entities/table.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Table]), TypeOrmModule.forFeature([User]) ],
  controllers: [TablesController],
  providers: [TablesService]
})
export class TablesModule {}
