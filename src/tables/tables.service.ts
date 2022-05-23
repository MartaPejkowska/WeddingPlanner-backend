import { Injectable } from '@nestjs/common';
import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.dto';
import { Table } from './entities/table.entity';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { HttpException } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common';
import { Wedding } from 'src/weddings/entities/wedding.entity';


@Injectable()
export class TablesService {
  @InjectRepository(Table) private repository: Repository<Table>;
  @InjectRepository(Wedding)  weddingRepository: Repository<Wedding>;

  async create(body: CreateTableDto) {
    let table=new Table()

    table.kind=body.kind,
    table.amountOfTables=body.amountOfTables,
    table.seats=body.seats,
    table.users=body.users
    
    let wedding= await this.weddingRepository.findOne({ id: body.weddingId })
     table.wedding=wedding

     if(!wedding) {
      throw new HttpException('Wedding not found', HttpStatus.NOT_FOUND);
    }
       
  if (table.users.length>table.seats) {
    throw new HttpException( `Maksymalna liczba osób przy stole to ${table.seats}`, HttpStatus.BAD_REQUEST )
  } else return this.repository.save(
  this.repository.create({
    ...table, wedding
  }),
);
  
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {

    let table= this.repository.findOne(id)

    if(!table ) {
      throw new HttpException('Table not found', HttpStatus.NOT_FOUND);
    }

    return table;    
    
  }

  async update(id: number, body: UpdateTableDto) {
   let table= await this.repository.findOne(id)

    if(!table) {
      throw new HttpException('Table not found', HttpStatus.NOT_FOUND);
    }
      table.kind=body.kind,
      table.amountOfTables=body.amountOfTables,
      table.seats=body.seats,
      table.users=body.users
      
      
      if (table.users.length>table.seats) {
        throw new HttpException( `Maksymalna liczba osób przy stole to ${table.seats}`, HttpStatus.BAD_REQUEST)
      } else return this.repository.save(table);
      
  
}

  async remove(id: number) {
    let table = await this.repository.findOne(id);

    if(!table) {
      throw new HttpException('Table not found', HttpStatus.NOT_FOUND);
    }
    
    this.repository.remove(table);
  }
}
