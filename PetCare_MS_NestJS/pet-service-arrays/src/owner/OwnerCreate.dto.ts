import { IsIn, IsNotEmpty, IsNumberString, IsPhoneNumber } from "class-validator"

export class OwnerCreateDTO{
    id: string
    @IsNotEmpty()
    name: string
    @IsNotEmpty()
    residence: string
    @IsNotEmpty()
    @IsPhoneNumber()
    contact: string
    @IsNotEmpty()
    @IsIn(['Male', 'Female'])
    gender: string
}