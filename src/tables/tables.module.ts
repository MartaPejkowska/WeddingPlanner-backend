import { Module } from '@nestjs/common';
import { TablesService } from './tables.service';
import { TablesController } from './tables.controller';
import { Table } from './entities/table.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Wedding } from 'src/weddings/entities/wedding.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Table]), TypeOrmModule.forFeature([Wedding])],
  controllers: [TablesController],
  providers: [TablesService]
})
export class TablesModule {}
