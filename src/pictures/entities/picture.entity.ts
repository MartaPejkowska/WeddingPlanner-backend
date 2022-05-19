import { Wedding } from "src/weddings/entities/wedding.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import {DatabaseFile} from "./databaseFile.entity";

@Entity()
export class Picture {
    @PrimaryGeneratedColumn()
    id:number;

    // @Column({type: 'timestamp', default: () => "CURRENT_TIMESTAMP"})
    // createdAt: Date;

    @JoinColumn({ name: 'imgId' })
    @OneToOne(
      () => DatabaseFile,
      {
        nullable: true
      }
    )
    public img?: DatabaseFile;
   
    @Column({ nullable: true })
    public imgId?: number;
   
    // ...
  

   @ManyToOne(()=> Wedding, wedding => wedding.pictures)
   wedding:Wedding
    

}
