import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Post, Put, Query, UsePipes, ValidationPipe} from '@nestjs/common';
import { ValidateAgePipe } from 'src/validate-age.pipe';
import { Pet } from './Pet.model';
import { PetCreateDTO } from './PetCreate.dto';
import { PetsService } from './pets.service';
import { PetSearchDTO } from './PetSearch.dto';
import { PetUpdateDTO } from './PetUpdate.dto';

@Controller('pets')
export class PetsController {

    constructor(private petsService: PetsService){
    }

    @Get()
    getAllPets(@Query() param: PetSearchDTO){
        if(Object.keys(param).length){
            return this.petsService.petSearch(param);
        }
        else{
            return this.petsService.getAllPets(); 
        }           
    }

    @Post()
    @UsePipes(ValidationPipe)
    @UsePipes(new ValidateAgePipe())
    createPet( @Body() petCreateDTO: PetCreateDTO){
        return this.petsService.createPet(petCreateDTO);
    }

    @Get('/:id')
    getPetByID(@Param('id') id: string): Pet{
        return this.petsService.getPetByID(id);
    }

    @Put('/edit/:id')
    @UsePipes(ValidationPipe)
    @UsePipes(new ValidateAgePipe())
    updatePetByID(@Param('id') id: string, @Body() petUpdateDTO: PetUpdateDTO){
        petUpdateDTO.id=id;
        return this.petsService.updatePetByID(petUpdateDTO);
    }

    @Delete('/:id')
    @HttpCode(204)
    deletePetByID(@Param('id') id: string){
        if(!this.petsService.deletePetByID(id)){
            throw new NotFoundException("Cannot delete the pet");
        }
    }
    
}
