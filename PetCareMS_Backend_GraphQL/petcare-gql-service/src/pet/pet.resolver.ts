import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Owner } from 'src/owner/entities/owner.entity';
import { CreatePetDTO } from './dto/create-pet.input';
import { UpdatePetDTO } from './dto/update-pet.input';
import { Pet } from './entries/pet.entity';
import { PetService } from './pet.service';

@Resolver(()=>Pet)
export class PetResolver {

    constructor(private petService: PetService){
    }

    @Query(()=>[Pet], {name:'getAllPets'})
    findAll(){
        return this.petService.findAll();
    }

    @Mutation(()=> Pet, {name: "createPet"})
    create(@Args('createPetDTO') createPetDTO: CreatePetDTO){
        return this.petService.create(createPetDTO);
    }

    @Query(() => Pet, { name: 'getPetById' })
    findOne(@Args('id') id: string) {
        return this.petService.findOne(id);
    }

    @Mutation(() => Pet, { name: 'updatePetById' })
    updateOwner(@Args('updatePetDTO') updatePetDTO: UpdatePetDTO) {
        return this.petService.update(updatePetDTO.id, updatePetDTO);
    }

    @Mutation(() => Pet, { name: 'removePetById' })
    removeOwner(@Args('id') id: string) {
        return this.petService.remove(id);
    }

    @ResolveField(()=> Owner)
    owner(@Parent() pet: Pet){
        return this.petService.getOwner(pet.ownerId);
    }

}
