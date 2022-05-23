import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateBudgetDto } from './dto/create-budget.dto';
import { UpdateBudgetDto } from './dto/update-budget.dto';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Budget } from "./entities/budget.entity";
import { Wedding } from 'src/weddings/entities/wedding.entity';


@Injectable()
export class BudgetsService {
@InjectRepository(Budget) private repository: Repository<Budget>;
@InjectRepository(Wedding)  weddingRepository: Repository<Wedding>;

  async create(body: CreateBudgetDto) {
      let budget=new Budget()
      let wedding= await this.weddingRepository.findOne({ id: body.weddingId })

      if(!wedding) {
        throw new HttpException('Wedding not found', HttpStatus.NOT_FOUND);
      }
     
      budget.budget=body.budget,
      budget.costs=body.costs,
      budget.name=body.name     
      budget.wedding=wedding
     
      return this.repository.save(
        this.repository.create({
          ...budget, wedding
        }),
      )
     
    };

  findAll() {
    return this.repository.find();
  };

  findOne(id: number) {

    let budget= this.repository.findOne(id)

    if(!budget) {
      throw new HttpException('Budget not found', HttpStatus.NOT_FOUND);
    }

    return budget;
    
  }

  async update(id: number, body: UpdateBudgetDto) {

    let budget=  await this.repository.findOne(id)

    if(!budget) {
      throw new HttpException('Budget not found', HttpStatus.NOT_FOUND);
    }
    
      budget.budget=body.budget,
      budget.costs=body.costs,
      budget.name=body.name
      
      return this.repository.save(budget);
     
   }

  async remove(id: number) {
    let budget = await this.repository.findOne(id);

    if(!budget) {
      throw new HttpException('Budget not found', HttpStatus.NOT_FOUND);
    }

    this.repository.remove(budget);
  }
  
   
  }

