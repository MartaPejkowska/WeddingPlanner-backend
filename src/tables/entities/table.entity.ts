import { User } from "src/users/entities/user.entity";
import {  Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";

export enum TablesKind {
    ROUND = 'round',
    RECTANGLE = 'rectangle'
}


@Entity()
export class Table {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({
        type: "enum",
        enum: TablesKind,
        // default: TablesKind.rectangle
    })
    kind: TablesKind

    @Column()
    amountOfTables:number;

    @Column()
    seats:number

    @OneToMany(()=> User, user=> user.table, {cascade:true, eager:true})
    users: User[]


}
