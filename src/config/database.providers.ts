import 'dotenv/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const databaseProviders: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.HOST,
  port: 3306,
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD || '',
  autoLoadEntities: true, // Carga las entidades automáticamente
  synchronize: true,
  logging: true, // Activa los logs de TypeORM
};
