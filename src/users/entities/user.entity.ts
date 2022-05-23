import { Entity,PrimaryGeneratedColumn,Column,BeforeInsert,CreateDateColumn,UpdateDateColumn} from "typeorm";

 export enum UserRole {
  ADMIN = "admin",
  USER = "user"
}

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ 
    type: 'varchar', 
    nullable: false, 
    unique: true 
}) 
  email: string;

  @Column({ 
    type: 'varchar', 
    nullable: false, 
    unique: false 
}) 
  firstName: string;

  @Column({ 
    type: 'varchar', 
    nullable: false, 
    unique: false 
}) 
  lastName: string;

  @Column({ 
    type: 'boolean', 
    nullable: false, 
    unique: false 
}) 
  isActive: boolean;

  @Column() 
  password: string;

  @Column({ 
    type: 'date', 
    nullable: true, 
    unique: false 
}) 
  lastLoginAt: Date

  @CreateDateColumn()
  createdDate: Date

  @UpdateDateColumn()
  updatedDate: Date

  @Column({
    type: "enum",
    enum: UserRole,
    default: UserRole.USER
 })
 role: UserRole;

}
