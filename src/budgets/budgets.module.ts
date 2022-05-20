import { Module } from '@nestjs/common';
import { BudgetsService } from './budgets.service';
import { BudgetsController } from './budgets.controller';
import { Budget } from './entities/budget.entity';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Wedding } from 'src/weddings/entities/wedding.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Budget]), TypeOrmModule.forFeature([Wedding])],
  controllers: [BudgetsController],
  providers: [BudgetsService]
})
export class BudgetsModule {}
