import { Budget } from "src/budgets/entities/budget.entity";
import { Calendar } from "src/calendars/entities/calendar.entity";
import { Picture } from "src/pictures/entities/picture.entity";
import { Table } from "src/tables/entities/table.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

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

    @OneToOne(() => Calendar, calendar => calendar.wedding, {cascade:true, eager:true}) // specify inverse side as a second parameter
    @JoinColumn()
    calendar: Calendar

    @OneToOne(() => Budget, budget => budget.wedding, {cascade:true, eager:true}) // specify inverse side as a second parameter
    @JoinColumn()
    budget: Budget
    
    // @OneToMany(()=> Picture, picture=> picture.img, {cascade:true, eager:true})
    // pictures: Picture[]
}
