import { Type } from "class-transformer";
import { IsDate, MinDate } from "class-validator";
import { Calendar } from "src/calendars/entities/calendar.entity";
import { Column, PrimaryGeneratedColumn, ManyToOne, Entity } from "typeorm";

@Entity()
export class Task {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    title: string

    @Column({type:'timestamptz',nullable:true})
    @MinDate( new Date())
    @IsDate()
    @Type(()=> Date)
    date: Date

    @ManyToOne(()=> Calendar, calendar=> calendar.tasks, {onDelete:'CASCADE'})
    calendar:Calendar 
    

}
