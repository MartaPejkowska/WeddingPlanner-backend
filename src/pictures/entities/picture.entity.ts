import { Wedding } from "src/weddings/entities/wedding.entity";
import { Column, Entity, ManyToOne,PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Picture {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({type: 'timestamp', default: () => "CURRENT_TIMESTAMP"})
    createdAt: Date;

   
@Column({
  type: 'bytea',
})
img: Uint8Array;


// @ManyToOne(()=> Wedding, wedding=> wedding.pictures, {onDelete:'CASCADE'})
// wedding:Wedding ;


}


