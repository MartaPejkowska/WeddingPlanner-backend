import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  @InjectRepository(User)
  private readonly repository: Repository<User>;

  create(body: CreateUserDto) {

    let user = new User()
    user.email = body.email
    user.password = body.password

    this.repository.save(user);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.createQueryBuilder("user")
    .where("user.id = " + id)
    .getOne()
    
  }

  update(id: number, body: UpdateUserDto) {

   return this.repository.findOne({
     id:id
   }).then(user => {
      user.email = body.email
      user.password = body.password
      this.repository.save(user);
      return user
    })

  

  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
