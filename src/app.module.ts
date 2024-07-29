import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import 'dotenv/config';
import { databaseProviders } from './config/database.providers';

@Module({
  imports: [TypeOrmModule.forRoot(databaseProviders), UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
