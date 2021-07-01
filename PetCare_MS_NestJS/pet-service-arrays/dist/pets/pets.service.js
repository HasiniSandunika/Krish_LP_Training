"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetsService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
let PetsService = class PetsService {
    constructor() {
        this.pets = [];
    }
    getAllPets() {
        return this.pets;
    }
    createPet(petCreateDTO) {
        const { name, type, gender, age } = petCreateDTO;
        const pet = {
            id: uuid_1.v1(),
            name: name,
            type: type,
            gender: gender,
            age: age
        };
        this.pets.push(pet);
        return pet;
    }
    petSearch(petSerarchDTO) {
        const { name } = petSerarchDTO;
        let pets = this.getAllPets();
        if (name) {
            pets = pets.filter(pet => pet.name.includes(name));
        }
        return pets;
    }
    getPetByID(id) {
        const pets = this.getAllPets();
        let pet = pets.find(pet => pet.id == id);
        if (!pet) {
            throw new common_1.NotFoundException("Cannot find this pet");
        }
        return pet;
    }
    updatePetByID(petUpdateDTO) {
        const { id, name, type, gender, age } = petUpdateDTO;
        let pet = this.getPetByID(id);
        pet.name = name;
        pet.gender = gender;
        pet.age = age;
        pet.type = type;
        return pet;
    }
    deletePetByID(id) {
        let pets = this.getAllPets();
        this.pets = pets.filter(pet => pet.id != id);
        return (pets.length != this.pets.length);
    }
};
PetsService = __decorate([
    common_1.Injectable()
], PetsService);
exports.PetsService = PetsService;
//# sourceMappingURL=pets.service.js.map