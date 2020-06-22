import { IsEmail, IsString, MaxLength, IsOptional, IsAlpha, IsNumber } from 'class-validator';

export class CustomerDto {

    @IsString()
    @IsAlpha()
    @MaxLength(50)
    firstname: string;

    @IsString()
    @MaxLength(50)
    lastname: string;

    @IsEmail()
    @MaxLength(200)
    @IsOptional()
    email?: string;
}