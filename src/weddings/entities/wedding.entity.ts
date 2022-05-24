import { Budget } from "src/budgets/entities/budget.entity";
import { Calendar } from "src/calendars/entities/calendar.entity";
import { Picture } from "src/pictures/entities/picture.entity";
import { Table } from "src/tables/entities/table.entity";
import { Bride } from "src/brides/entities/bride.entity";
import { Groom } from "src/grooms/entities/groom.entity";
import { Guest } from "src/guests/entities/guest.entity";
import { Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, Column } from "typeorm";

export enum weddingTypes{
    KONKORDATOWY= 'konkordatowy',
    CYWILNY= 'cywilny'
}

@Entity()
export class Wedding {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    date: Date;

    @Column({
        type:"enum",
        enum: weddingTypes
    })
    kind: weddingTypes

    @OneToOne(() => Bride, (bride) => bride.wedding,{eager:true}) 
    @JoinColumn()
    bride: Bride

    @OneToOne(() => Groom, (groom) => groom.wedding,{eager:true}) 
    @JoinColumn()
    groom: Groom

    @OneToMany(() => Guest, (guest) => guest.wedding,{eager:true}) 
    guests: Guest[]

    @OneToMany(()=> Table, table=> table.wedding, {cascade:true, eager:true})
    tables: Table[]

    @OneToOne(() => Calendar, calendar => calendar.wedding, {cascade:true, eager:true}) // specify inverse side as a second parameter
    @JoinColumn()
    calendar: Calendar

    @OneToMany(() => Budget, budget => budget.wedding, {cascade:true, eager:true}) // specify inverse side as a second parameter
    budget: Budget
    
    @OneToMany(()=> Picture, picture=> picture.wedding, { lazy:true})
    pictures: Picture[]
}