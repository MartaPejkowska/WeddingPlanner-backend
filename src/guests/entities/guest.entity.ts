import { User } from "src/users/entities/user.entity";
import { Wedding } from "src/weddings/entities/wedding.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

export enum GuestRole {
    GUEST = "guest",
    BEST_MAN = "bestman",
    BRIDES_MAID = "bridesmaid"
  }

@Entity()
export class Guest {

    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => User,{nullable:true,eager:true})
    @JoinColumn()
    user: User;

    @ManyToOne(() => Wedding, wedding=> wedding.guests)
    wedding: Wedding;

    @Column({ 
        type: 'varchar', 
        nullable: false, 
    }) 
      name: string;

    @Column({ 
        type: 'text', 
        array: true,
        nullable: true, 
        unique: false 
    }) 
      presents: string[];

      @Column({ 
        type: 'varchar', 
        nullable: true, 
        unique: true 
    }) 
      email: string;

      @Column({ 
        type: 'boolean', 
        nullable: true, 
        unique: false 
    }) 
      plusOne: boolean;

      @Column({ 
        type: 'boolean', 
        nullable: false, 
        unique: false 
    }) 
      accepted: boolean;

      @Column({ 
        type: 'date', 
        nullable: true, 
        unique: false 
    }) 
      arrival: Date;

      @Column({
        type: "enum",
        enum: GuestRole,
        default: GuestRole.GUEST
     })
     role: GuestRole;
}
