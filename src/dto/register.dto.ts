// register.dto.ts
import { IsEmail, IsOptional, IsPhoneNumber } from 'class-validator';
import AtLeastOne from './validator.custom';

export class RegisterDto {
  @IsOptional()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsPhoneNumber() // 'ZZ' 表示国际电话格式
  mobile: string;

  @AtLeastOne('email', 'mobile')
  isAtLeastOneProvided: boolean;
}