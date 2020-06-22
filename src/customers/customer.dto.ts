import { IsEmail, IsString, MaxLength, IsOptional, IsAlpha, MinLength, IsNotEmpty } from 'class-validator';

export class CustomerDto {

    @IsString()
    @IsAlpha()
    @MaxLength(50)
    @IsNotEmpty()
    firstname: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(50)
    lastname: string;

    @IsEmail()
    @IsNotEmpty()
    @MaxLength(200)
    @IsOptional()
    email?: string;
}