import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { Owner } from './Owner.model';
import { OwnerService } from './owner.service';
import { OwnerCreateDTO } from './OwnerCreate.dto';
import { OwnerSearchDTO } from './OwnerSearch.dto';
import { OwnerUpdateDTO } from './OwnerUpdate.dto';

@Controller('owner')
export class OwnerController {
    
    constructor(private ownerService: OwnerService){
    }

    @Get()
    getAllOwners(@Query() param: OwnerSearchDTO){
        if(Object.keys(param).length){
            return this.ownerService.ownerSearch(param);
        }
        else{
            return this.ownerService.getAllOwners(); 
        }           
    }

    @Post()
    @UsePipes(ValidationPipe)
    createOwner( @Body() ownerCreateDTO: OwnerCreateDTO){
        return this.ownerService.createOwner(ownerCreateDTO);
    }

    @Get('/:id')
    getOwnerByID(@Param('id') id: string): Owner{
        return this.ownerService.getOwnerByID(id);
    }

    @Put('/edit/:id')
    @UsePipes(ValidationPipe)
    updateOwnerByID(@Param('id') id: string, @Body() ownerUpdateDTO: OwnerUpdateDTO){
        ownerUpdateDTO.id=id;
        return this.ownerService.updateOwnerByID(ownerUpdateDTO);
    }

    @Delete('/:id')
    @HttpCode(204)
    deleteOwnerByID(@Param('id') id: string){
        if(!this.ownerService.deleteOwnerByID(id)){
            throw new NotFoundException("Cannot delete the owner");
        }
    }
}
