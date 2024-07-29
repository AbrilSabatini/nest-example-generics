import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/common/base/base.service';
import { CreateUserDto, UpdateUserDto } from 'src/domain/dtos';
import { User } from 'src/domain/entities';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService extends BaseService<
  User,
  CreateUserDto,
  UpdateUserDto
> {
  constructor(@InjectRepository(User) protected repository: Repository<User>) {
    super(repository);
  }
}
