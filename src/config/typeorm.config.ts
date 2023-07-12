import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';

// const port: number = parseInt(<string>process.env.PORT) || 3306;

// export const typeormConnectionConfig: TypeOrmModuleOptions = {
//   type: 'mysql',
//   host: process.env.MYSQL_HOST,
//   port: port,
//   username: 'root',
//   password: 'root',
//   database: 'products_db',
//   entities: ['dist/**/*.entity{.ts,.js}'],
//   synchronize: true,
//   // timezone: 'utc',
// };

export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (): Promise<TypeOrmModuleOptions> => {
    return {
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      database: process.env.DB_NAME,
      password: process.env.DB_PASSWORD,
      entities: [__dirname + '/../**/*.entity.{js,ts}'],
      logging: true,
    };
  },
};

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  username: process.env.DB_USERNAME,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
  logging: true,
};
