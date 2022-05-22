import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Wedding } from 'src/weddings/entities/wedding.entity';
import { Repository } from 'typeorm';
import { CreateGuestDto } from './dto/create-guest.dto';
import { UpdateGuestDto } from './dto/update-guest.dto';
import { Guest, GuestRole } from './entities/guest.entity';

@Injectable()
export class GuestsService {
  @InjectRepository(Guest)
  private readonly guestRepository: Repository<Guest>;

  @InjectRepository(Wedding)
  private readonly weddingRepository: Repository<Wedding>;


  async create(dto: CreateGuestDto) {
    let weddingId= dto.weddingId;
    let wedding = await this.weddingRepository.findOne(weddingId);

    if(!wedding) {
      throw new HttpException('Wedding not found', HttpStatus.NOT_FOUND);
    }
  
    let guest = new Guest();
    guest.accepted = false;
    guest.arrival = null;
    guest.email = dto.email;
    guest.name = dto.name;
    guest.plusOne = null;
    guest.presents = [];
    guest.role = GuestRole.GUEST;
    guest.wedding = wedding;

    return this.guestRepository.save(guest);
  }

  async findOne(id: number) {
    let guestId= id;
    let guest = await this.guestRepository.findOne(guestId);

    if(!guest) {
      throw new HttpException('Guest not found', HttpStatus.NOT_FOUND);
    }

    return guest;
  }

  async update(id: number, dto: UpdateGuestDto) {
    let guest =  await this.guestRepository.findOne(id);
    if(!guest) {
      throw new HttpException('Guest not found', HttpStatus.NOT_FOUND);
    }
    
    guest.accepted = dto.accepted;
    guest.arrival = dto.arrival;
    guest.email = dto.email;
    guest.name = dto.name;
    guest.plusOne = dto.plusOne;
    guest.presents = dto.presents;
    guest.role = dto.role;

    return this.guestRepository.save(guest);
  }

  async delete(id: number) {
    let guest =  await this.guestRepository.findOne(id);
    if(!guest) {
      throw new HttpException('Guest not found', HttpStatus.NOT_FOUND);
    }
    
    
    return this.guestRepository.delete(guest);
  }

}
