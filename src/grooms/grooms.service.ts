import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Request } from 'express';
import { User } from 'src/users/entities/user.entity';
import { Wedding } from 'src/weddings/entities/wedding.entity';
import { Repository } from 'typeorm';
import { CreateGroomDto } from './dto/create-groom.dto';
import { UpdateGroomDto } from './dto/update-groom.dto';
import { Groom } from './entities/groom.entity';

@Injectable()
export class GroomsService {
  @InjectRepository(User)
  private readonly userRepository: Repository<User>;
  @InjectRepository(Groom)
  private readonly groomRepository: Repository<Groom>;
  @InjectRepository(Wedding)
  private readonly weddingRepository: Repository<Wedding>;

  async create(createGroomDto: CreateGroomDto) {
    let userId= createGroomDto.userId;
    let user =  await this.userRepository.findOne(userId);
    if(!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    let wedding =  await this.weddingRepository.findOne(createGroomDto.weddingId);
    if(!wedding) {
      throw new HttpException('Wedding not found', HttpStatus.NOT_FOUND);
    }
    let groom = new Groom();
    groom.phone = createGroomDto.phone;
    groom.user = user
    groom.wedding = wedding;
    return this.groomRepository.save(groom);
  }


  async findOne(id: number) {
    let groom =  await this.groomRepository.findOne(id);
    if(!groom) {
      throw new HttpException('Groom not found', HttpStatus.NOT_FOUND);
    }
    delete groom.user.password;
    return groom;
  }

  async update(id: number, updateGroomDto: UpdateGroomDto,req: Request) {
    let groom =  await this.groomRepository.findOne(id);
    if(!groom) {
      throw new HttpException('Groom not found', HttpStatus.NOT_FOUND);
    }

    if(req.user instanceof User) {
      let user= await this.userRepository.findOne({
        id:req.user.id })
        if(!user) {
           throw new HttpException('Access Forbidden', HttpStatus.FORBIDDEN);
        }
        if(groom.user.id != user.id) {
          throw new HttpException('Access Forbidden', HttpStatus.FORBIDDEN);
        }   
    } else {
      throw new HttpException('Access Forbidden', HttpStatus.FORBIDDEN);
    }
    
    groom.clothes = updateGroomDto.clothes;
    groom.phone = updateGroomDto.phone
    return this.groomRepository.save(groom);
  }

  async remove(id: number) {
    let groom =  await this.groomRepository.findOne(id);
    if(!groom) {
      throw new HttpException('Groom not found', HttpStatus.NOT_FOUND);
    }
    return this.groomRepository.delete(groom);
  }
}
