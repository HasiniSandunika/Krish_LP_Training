import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { Owner } from '../schemas/Owner.schema';
import { OwnerService } from '../service/owner.service';
import { OwnerCreateDTO } from '../dto/OwnerCreate.dto';
import { OwnerSearchDTO } from '../dto/OwnerSearch.dto';
import { OwnerUpdateDTO } from '../dto/OwnerUpdate.dto';

@Controller('owner')
export class OwnerController {
    
    constructor(private ownerService: OwnerService){
    }

    @Get()
    async getAllOwners(@Query() param: OwnerSearchDTO): Promise<Owner[]>{
        if(Object.keys(param).length){
            return await this.ownerService.ownerSearch(param);
        }
        else{
            return await this.ownerService.getAllOwners(); 
        }           
    }

    @Post()
    @UsePipes(ValidationPipe)
    async createOwner( @Body() ownerCreateDTO: OwnerCreateDTO): Promise<Owner>{
        return await this.ownerService.createOwner(ownerCreateDTO);
    }

    @Get('/:id')
    async getOwnerById(@Param('id') id: string): Promise<Owner>{
        let owner= await this.ownerService.getOwnerById(id);
        if (!owner) {
            throw new NotFoundException('Cannot find the owner');
        }
        return owner;
    }

    @Put('/edit/:id')
    @UsePipes(ValidationPipe)
    async updateOwnerByID(@Param('id') id: string, @Body() ownerUpdateDTO: OwnerUpdateDTO): Promise<Owner>{
        ownerUpdateDTO.id=id;
        let owner= await this.ownerService.updateOwnerById(ownerUpdateDTO);
        if (!owner) {
            throw new NotFoundException('Cannot update the owner')
        }
        return owner;
    }

    @Delete('/:id')
    @HttpCode(204)
    async deleteOwnerByID(@Param('id') id: string){
        let result=await this.ownerService.deleteOwnerById(id);
        if(!result){
            throw new NotFoundException("Cannot delete the owner");
        }
    }
}
