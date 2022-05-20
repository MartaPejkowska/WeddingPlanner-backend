import { User } from "src/users/entities/user.entity";
import { Wedding } from "src/weddings/entities/wedding.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

  
  @Entity()
  export class Bride {
  
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ 
      type: 'numeric', 
      nullable: true, 
      unique: false 
  }) 
    phone: number;
  
    @Column({ 
      type: 'text', 
      array: true,
      nullable: true, 
      unique: false 
  }) 
    clothes: string[];
  
    @OneToOne(() => User,{eager:true})
    @JoinColumn()
    user: User;
   
  
    @OneToOne(() => Wedding, (wedding) => wedding.bride,{nullable:false,eager:false})
    wedding: Wedding

  }
  