import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User, UserRole } from './entities/user.entity';
import { Repository } from 'typeorm';
import { HttpStatus } from '@nestjs/common';
import { HttpException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';
import { AuthHelper } from './auth/auth.helper';


@Injectable()
export class UsersService implements OnModuleInit {
  @InjectRepository(User)
  private readonly userRepository: Repository<User>;

  @Inject(ConfigService)
  private config: ConfigService;

  @Inject(AuthHelper)
  private authHelper: AuthHelper;

  onModuleInit() {
    this.initDatabaseWithAdmin();
  }


 async initDatabaseWithAdmin(){
  
  console.log(this.config.get<string>('MAIL_PASSWORD'));
  
  
  let user = await this.userRepository.findOne(  {where: {role: "admin"}})



   if(!user) {
    let adminUser:User = new User()
    adminUser.email = this.config.get<string>('ADMIN_EMAIL')
    adminUser.password = this.authHelper.encodePassword( this.config.get<string>('ADMIN_PASSWORD'))
    adminUser.role = UserRole.ADMIN
    adminUser.isActive = true,
    adminUser.firstName = "admin",
    adminUser.lastName = "admin"
    this.userRepository.save(adminUser);
   }
  }
   

  async update(id: number, body: UpdateUserDto,req:Request) {
    let user= await this.userRepository.findOne({
     id:id })
 
     if(!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    if(req.user instanceof User && id === req.user.id) {
      user.email = body.email
      user.password = body.password
      user.firstName = body.firstName
      user.lastName = body.lastName
      this.userRepository.save(user); 
      return user;
    } else {
      throw new HttpException('Access Forbidden', HttpStatus.FORBIDDEN);
    }
  }

  async updateActive(req: Request) {

    if(req.user instanceof User) {
      let user= await this.userRepository.findOne({
        id:req.user.id })
        if(!user) {
          throw new HttpException('User not found', HttpStatus.NOT_FOUND);
        }
        user.isActive = true
      this.userRepository.save(user); 
      return user;
    } else {
      throw new HttpException('Access Forbidden', HttpStatus.FORBIDDEN);
    }
  }

 async remove(id: number) {
    let user= await this.userRepository.findOne({
      id:id })

      if(!user) {
        throw new HttpException('User not found', HttpStatus.NOT_FOUND);
      }
  }

}
