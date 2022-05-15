import { Injectable } from '@nestjs/common';
import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.dto';
import { Table } from './entities/table.entity';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class TablesService {
  @InjectRepository(Table) private repository: Repository<Table>;

  @InjectRepository(User) private repositoryUser: Repository<User>;

  async create(body: CreateTableDto) {
    let table=new Table()

    table.kind=body.kind,
    table.amountOfTables=body.amountOfTables,
    table.seats=body.seats
    // table.users= await this.repositoryUser.findOne({id: body.UserId})
    // return this.repository.save(
    //   this.repository.create({
    //     ...table,
    //     users: await this.repositoryUser.findOne({ id: body.UserId }),
    //   }),
    // )

    table.users=  await this.repository
    .createQueryBuilder()
    .relation(Table, "users")
    .of(table) 
    .loadMany()

  return this.repository.save(table);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    
    return this.repository.createQueryBuilder("table")
    .where("table.id = " + id)
    .getOne()
    
  }

  update(id: number, body: UpdateTableDto) {
    return this.repository.findOne({
      id:id
    }).then(table => {
      table.kind=body.kind,
      table.amountOfTables=body.amountOfTables,
      table.seats=body.seats
      
      return this.repository.save(table);
  })
}

  async remove(id: number) {
    let table = await this.repository.findOne(id);
    this.repository.remove(table);
  }
}
