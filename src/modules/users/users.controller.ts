import { Controller } from '@nestjs/common';
import { BaseController } from 'src/common/base/base.controller';
import { User } from 'src/domain/entities';
import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto } from 'src/domain/dtos';

@Controller('users')
export class UsersController extends BaseController<
  User,
  CreateUserDto,
  UpdateUserDto
> {
  constructor(private readonly usersService: UsersService) {
    super(usersService);
  }
}
