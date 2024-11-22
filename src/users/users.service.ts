import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';  
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const senha = await bcrypt.hash(createUserDto.senha, 10);
    const user = this.usersRepository.create(createUserDto);  
    return this.usersRepository.save(user);
  }
  findAll() {
    return this.usersRepository.find();
  }
  findOneBy(id:number){
    return this.usersRepository.findOneBy({id})
  }
  findOneByEmail(email: string) {
    return this.usersRepository.findOneBy({ email });
  }
  //uptade cliente BD
  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.usersRepository.findOneBy({ id });
    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }
    this.usersRepository.merge(user, updateUserDto);
    return this.usersRepository.save(user);
  }
  //remove cliente BD 
  async remove(id: number) {
    const user = await this.usersRepository.findOneBy({ id });
    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }
    return this.usersRepository.remove(user);
  }
}