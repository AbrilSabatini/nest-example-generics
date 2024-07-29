import { IsOptional, MinLength } from 'class-validator';

export class CreateUserDto {
  username: string;

  @MinLength(6)
  password: string;
}

export class UpdateUserDto {
  @IsOptional()
  username?: string;

  @IsOptional()
  password?: string;
}
