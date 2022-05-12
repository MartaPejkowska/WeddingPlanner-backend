import { Task } from "src/tasks/entities/task.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Calendar {

    @PrimaryGeneratedColumn()
    id:number
    
    @OneToMany(()=> Task, task=> task.calendar, {cascade:true, eager:true})
    tasks: Task[]
}
