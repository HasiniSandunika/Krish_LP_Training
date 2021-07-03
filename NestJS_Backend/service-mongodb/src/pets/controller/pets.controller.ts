import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Post, Put, Query, UsePipes, ValidationPipe} from '@nestjs/common';
import { ValidateAgePipe } from 'src/validate-age.pipe';
import { PetCreateDTO } from '../dto/PetCreate.dto';
import { PetsService } from '../service/pets.service';
import { PetSearchDTO } from '../dto/PetSearch.dto';
import { PetUpdateDTO } from '../dto/PetUpdate.dto';
import { Pet } from '../schemas/Pet.schema';

@Controller('pets')
export class PetsController {

    constructor(private petsService: PetsService){
    }

    @Get()
    async getAllPets(@Query() param: PetSearchDTO): Promise<Pet[]>{ 
        if (Object.keys(param).length) {
            return await this.petsService.petSearch(param);
        } else {
            return await this.petsService.getAllPets();
        }        
    }

    @Post()
    @UsePipes(ValidationPipe)
    @UsePipes(new ValidateAgePipe())
    async createPet( @Body() petCreateDTO: PetCreateDTO): Promise<Pet>{
        return await this.petsService.createPet(petCreateDTO);
    }

    @Get('/:id')
    async getPetById(@Param('id') id: string): Promise<Pet>{
        let pet= await this.petsService.getPetById(id);
        if (!pet) {
            throw new NotFoundException('Cannot find the pet');
        }
        return pet;
    }

    @Put('/edit/:id')
    @UsePipes(ValidationPipe)
    @UsePipes(new ValidateAgePipe())
    async updatePetById(@Param('id') id: string, @Body() petUpdateDTO: PetUpdateDTO): Promise<Pet> {
        petUpdateDTO.id = id
        let pet= await this.petsService.updatePetById(petUpdateDTO);
        if (!pet) {
            throw new NotFoundException('Cannot update the pet')
        }
        return pet;
    }

    @Delete('/:id')
    @HttpCode(204)
    async deletePetById(@Param('id') id: string) {
        let result = await this.petsService.deletePetById(id);
        if (!result) {
            throw new NotFoundException('Cannot delete the pet')
        }
    }

}
