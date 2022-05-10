import { Injectable } from '@nestjs/common';
import { CreateBudgetDto } from './dto/create-budget.dto';
import { UpdateBudgetDto } from './dto/update-budget.dto';

import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Budget } from "./entities/budget.entity";


@Injectable()
export class BudgetsService {
@InjectRepository(Budget) private repository: Repository<Budget>;



  create(body: CreateBudgetDto) {
      let budget=new Budget()
      budget.budget=body.budget,
      budget.costs=body.costs,
      budget.name=body.name
      
      
      return this.repository.save(budget);
    };

  findAll() {
    return this.repository.find();
  };

  findOne(id: number) {
    return this.repository.createQueryBuilder("budget")
    .where("budget.id = " + id)
    .getOne()
    
  }

  update(id: number, body: UpdateBudgetDto) {

    return this.repository.findOne({
      id:id
    }).then(budget => {
      budget.budget=body.budget,
      budget.costs=body.costs,
      budget.name=body.name
      return this.repository.save(budget);
     })
   }

  async remove(id: number) {
    let budget = await this.repository.findOne(id);
    this.repository.remove(budget);
  }
  
  
   
  }

