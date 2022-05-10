import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Budget {
  @PrimaryGeneratedColumn()
  id:number;

  @Column()
  budget: number;

  @Column()
  costs: number;

  @Column()
  name: string;

}