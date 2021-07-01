import { IsIn, IsNotEmpty, IsNumberString } from "class-validator";

export class PetCreateDTO{
    id: string
    @IsNotEmpty()
    name: string
    @IsNotEmpty()
    type: string
    @IsNotEmpty()
    @IsIn(['Male', 'Female'])
    gender: string
    @IsNotEmpty()
    @IsNumberString()
    age: string

}