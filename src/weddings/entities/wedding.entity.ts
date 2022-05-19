import { Picture } from "src/pictures/entities/picture.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Wedding {
    @PrimaryGeneratedColumn()
    id:number;

     @OneToMany(()=> Picture, picture=> picture.wedding, {cascade:true, eager:true})
    pictures: Picture[]
}
