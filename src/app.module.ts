import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
const envModule = ConfigModule.forRoot({
  envFilePath: `${process.cwd()}/env/.env.${process.env.NODE_ENV}`,
  isGlobal: true
});
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmAsyncConfig } from 'src/config/typeorm.config';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    envModule,
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
    ProductsModule,
    UsersModule,
  ],
})
export class AppModule { }
