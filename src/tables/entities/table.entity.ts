import { Wedding } from "src/weddings/entities/wedding.entity";
import {  Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

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
    })
    kind: TablesKind;

    @Column()
    amountOfTables:number;

    @Column()
    seats:number;

    @Column({ array: true })
    users: string;

    @ManyToOne(()=> Wedding, wedding=> wedding.tables, {onDelete:'CASCADE'})
    wedding:Wedding 


}
