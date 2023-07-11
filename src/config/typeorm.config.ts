import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const port: number = parseInt(<string>process.env.PORT) || 3306;

export const typeormConnectionConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.MYSQL_HOST,
  port: port,
  username: 'root',
  password: 'root',
  database: 'products_db',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
  // timezone: 'utc',
};
