import { Injectable } from '@nestjs/common';
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
  
//  async sum(){
//   let {sum }= await this.repository.createQueryBuilder("budget")
//     // .select("budget.costs")
//     .select("SUM(budget.costs)", "sum")
//     // .groupBy("budget.costs")
//     .getRawOne()

//     return sum
  
// }
   
  }

