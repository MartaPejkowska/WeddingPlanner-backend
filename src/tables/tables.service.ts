import { Injectable } from '@nestjs/common';
import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.dto';
import { Table } from './entities/table.entity';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { HttpException } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common';


@Injectable()
export class TablesService {
  @InjectRepository(Table) private repository: Repository<Table>;

  // @InjectRepository(User) private repositoryUser: Repository<User>;

  async create(body: CreateTableDto) {
    let table=new Table()

    table.kind=body.kind,
    table.amountOfTables=body.amountOfTables,
    table.seats=body.seats,
    table.users=body.users

  if (table.users.length>table.seats) {
    throw new HttpException( `Maksymalna liczba osób przy stole to ${table.seats}`, HttpStatus.BAD_REQUEST )
  } else return this.repository.save(table);
  
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
      table.seats=body.seats,
      table.users=body.users
      
      
      if (table.users.length>table.seats) {
        throw new HttpException( `Maksymalna liczba osób przy stole to ${table.seats}`, HttpStatus.BAD_REQUEST)
      } else return this.repository.save(table);
      
  })
}

  async remove(id: number) {
    let table = await this.repository.findOne(id);
    this.repository.remove(table);
  }
}
