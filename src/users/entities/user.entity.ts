import { Entity,PrimaryGeneratedColumn,Column,CreateDateColumn,UpdateDateColumn, ManyToOne } from "typeorm";
import { Table } from "src/tables/entities/table.entity";

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @CreateDateColumn()
  createdDate: Date

  @UpdateDateColumn()
  updatedDate: Date

  @ManyToOne(()=> Table, table=> table.users, {onDelete:'CASCADE'})
    table:Table
    

}
