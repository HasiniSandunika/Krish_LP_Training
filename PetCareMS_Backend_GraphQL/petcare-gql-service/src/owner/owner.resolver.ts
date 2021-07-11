import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { OwnerService } from './owner.service';
import { Owner } from './entities/owner.entity';
import { CreateOwnerInput } from './dto/create-owner.input';
import { UpdateOwnerInput } from './dto/update-owner.input';

@Resolver(() => Owner)
export class OwnerResolver {
  constructor(private ownerService: OwnerService) {}

  @Mutation(() => Owner, {name: "createOwner"})
  create(@Args('createOwnerInput') createOwnerInput: CreateOwnerInput){
    return this.ownerService.create(createOwnerInput);
  }

  @Query(() => [Owner], { name: 'getAllOwners' })
  findAll() {
    return this.ownerService.findAll();
  }

  @Query(() => Owner, { name: 'getOwnerById' })
  findOne(@Args('id') id: string) {
    return this.ownerService.findOne(id);
  }

  @Mutation(() => Owner, { name: 'updateOwnerById' })
  updateOwner(@Args('updateOwnerInput') updateOwnerInput: UpdateOwnerInput) {
    return this.ownerService.update(updateOwnerInput.id, updateOwnerInput);
  }

  @Mutation(() => Owner, { name: 'removeOwnerById' })
  removeOwner(@Args('id') id: string) {
    return this.ownerService.remove(id);
  }

}
