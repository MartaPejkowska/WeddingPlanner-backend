
import { Bride } from "src/brides/entities/bride.entity";
import { Groom } from "src/grooms/entities/groom.entity";
import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Wedding {

    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => Bride, (bride) => bride.wedding,{eager:true}) 
    @JoinColumn()
    bride: Bride

    @OneToOne(() => Groom, (groom) => groom.wedding,{eager:true}) 
    @JoinColumn()
    groom: Groom

}
