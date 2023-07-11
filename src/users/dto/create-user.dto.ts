import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString({ message: 'name must be a text' })
  @MaxLength(255)
  @MinLength(3)
  @ApiProperty()
  name: string;

  @IsNotEmpty()
  @IsString({ message: 'Email must be a text' })
  @MaxLength(255)
  @MinLength(3)
  @ApiProperty()
  email: string;
}
