import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Request } from 'express';
import { User } from 'src/users/entities/user.entity';
import { Wedding } from 'src/weddings/entities/wedding.entity';
import { Repository } from 'typeorm';
import { CreateBrideDto } from './dto/create-bride.dto';
import { UpdateBrideDto } from './dto/update-bride.dto';
import { Bride } from './entities/bride.entity';

@Injectable()
export class BridesService {
  @InjectRepository(User)
  private readonly userRepository: Repository<User>;
  @InjectRepository(Bride)
  private readonly brideRepository: Repository<Bride>;
  @InjectRepository(Wedding)
  private readonly weddingRepository: Repository<Wedding>;

  async create(createBrideDto: CreateBrideDto) {
    let userId= createBrideDto.userId;
    let user =  await this.userRepository.findOne(userId);
    if(!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    let wedding =  await this.weddingRepository.findOne(createBrideDto.weddingId);
    if(!wedding) {
      throw new HttpException('Wedding not found', HttpStatus.NOT_FOUND);
    }
    let bride = new Bride();
    bride.phone = createBrideDto.phone;
    bride.user = user
    bride.wedding = wedding;
    return this.brideRepository.save(bride);
  }


  async findOne(id: number) {
    let bride =  await this.brideRepository.findOne(id);
    if(!bride) {
      throw new HttpException('Bride not found', HttpStatus.NOT_FOUND);
    }
    delete bride.user.password;
    return bride;
  }

  async update(id: number, updateBrideDto: UpdateBrideDto,req: Request) {
    let bride =  await this.brideRepository.findOne(id);
    if(!bride) {
      throw new HttpException('Bride not found', HttpStatus.NOT_FOUND);
    }

    if(req.user instanceof User) {
      let user= await this.userRepository.findOne({
        id:req.user.id })
        if(!user) {
           throw new HttpException('Access Forbidden', HttpStatus.FORBIDDEN);
        }
        if(bride.user.id != user.id) {
          throw new HttpException('Access Forbidden', HttpStatus.FORBIDDEN);
        }   
    } else {
      throw new HttpException('Access Forbidden', HttpStatus.FORBIDDEN);
    }
    
    bride.clothes = updateBrideDto.clothes;
    bride.phone = updateBrideDto.phone
    return this.brideRepository.save(bride);
  }

  async remove(id: number) {
    let bride =  await this.brideRepository.findOne(id);
    if(!bride) {
      throw new HttpException('Bride not found', HttpStatus.NOT_FOUND);
    }
    return this.brideRepository.delete(bride);
  }
}
