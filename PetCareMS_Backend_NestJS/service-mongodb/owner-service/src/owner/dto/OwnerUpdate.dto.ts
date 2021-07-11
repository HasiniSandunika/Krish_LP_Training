import { IsIn, IsNotEmpty,  IsPhoneNumber } from "class-validator"

export class OwnerUpdateDTO{
    id: string
    @IsNotEmpty()
    name: string
    @IsNotEmpty()
    residence: string
    @IsNotEmpty()
    @IsPhoneNumber('SL', { message: 'Invalid phone no.' })
    contact: string
    @IsNotEmpty()
    @IsIn(['Male', 'Female'])
    gender: string
}