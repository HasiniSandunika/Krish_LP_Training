"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const owner_entity_1 = require("../owner/entities/owner.entity");
const create_pet_input_1 = require("./dto/create-pet.input");
const update_pet_input_1 = require("./dto/update-pet.input");
const pet_entity_1 = require("./entries/pet.entity");
const pet_service_1 = require("./pet.service");
let PetResolver = class PetResolver {
    constructor(petService) {
        this.petService = petService;
    }
    findAll() {
        return this.petService.findAll();
    }
    create(createPetDTO) {
        return this.petService.create(createPetDTO);
    }
    findOne(id) {
        return this.petService.findOne(id);
    }
    updateOwner(updatePetDTO) {
        return this.petService.update(updatePetDTO.id, updatePetDTO);
    }
    removeOwner(id) {
        return this.petService.remove(id);
    }
    owner(pet) {
        return this.petService.getOwner(pet.ownerId);
    }
};
__decorate([
    graphql_1.Query(() => [pet_entity_1.Pet], { name: 'getAllPets' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PetResolver.prototype, "findAll", null);
__decorate([
    graphql_1.Mutation(() => pet_entity_1.Pet, { name: "createPet" }),
    __param(0, graphql_1.Args('createPetDTO')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_pet_input_1.CreatePetDTO]),
    __metadata("design:returntype", void 0)
], PetResolver.prototype, "create", null);
__decorate([
    graphql_1.Query(() => pet_entity_1.Pet, { name: 'getPetById' }),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PetResolver.prototype, "findOne", null);
__decorate([
    graphql_1.Mutation(() => pet_entity_1.Pet, { name: 'updatePetById' }),
    __param(0, graphql_1.Args('updatePetDTO')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_pet_input_1.UpdatePetDTO]),
    __metadata("design:returntype", void 0)
], PetResolver.prototype, "updateOwner", null);
__decorate([
    graphql_1.Mutation(() => pet_entity_1.Pet, { name: 'removePetById' }),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PetResolver.prototype, "removeOwner", null);
__decorate([
    graphql_1.ResolveField(() => owner_entity_1.Owner),
    __param(0, graphql_1.Parent()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pet_entity_1.Pet]),
    __metadata("design:returntype", void 0)
], PetResolver.prototype, "owner", null);
PetResolver = __decorate([
    graphql_1.Resolver(() => pet_entity_1.Pet),
    __metadata("design:paramtypes", [pet_service_1.PetService])
], PetResolver);
exports.PetResolver = PetResolver;
//# sourceMappingURL=pet.resolver.js.map