import { Task } from "src/tasks/entities/task.entity";
import { Wedding } from "src/weddings/entities/wedding.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Calendar {

    @PrimaryGeneratedColumn()
    id:number
    
    @OneToMany(()=> Task, task=> task.calendar, {cascade:true, eager:true})
    tasks: Task[]
 
    @OneToOne(() => Wedding, wedding => wedding.calendar) // specify inverse side as a second parameter
    wedding: Wedding
}
