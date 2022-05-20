import { Picture } from "src/pictures/entities/picture.entity";
import { Table } from "src/tables/entities/table.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

export enum weddingTypes{
    KONKORDATOWY= 'konkordatowy',
    CYWILNY= 'cywilny'
}
    
@Entity()
export class Wedding {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    date: Date;

    @Column({
        type:"enum",
        enum: weddingTypes
    })
    kind: weddingTypes

    @OneToMany(()=> Table, table=> table.wedding, {cascade:true, eager:true})
    tables: Table[]

    //  @OneToMany(()=> Picture, picture=> picture.img, {cascade:true, eager:true})
    // pictures: Picture[]
}
