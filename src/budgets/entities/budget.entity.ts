import { Wedding } from "src/weddings/entities/wedding.entity";
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne} from "typeorm";

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

  @ManyToOne(() => Wedding, wedding => wedding.budget) // specify inverse side as a second parameter
    wedding: Wedding


}