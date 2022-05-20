import { Picture } from "src/pictures/entities/picture.entity";
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

     @OneToMany(()=> Picture, picture=> picture.img, {cascade:true, eager:true})
    pictures: Picture[]
}
