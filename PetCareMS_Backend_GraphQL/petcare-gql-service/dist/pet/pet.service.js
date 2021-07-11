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
exports.PetService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const owner_entity_1 = require("../owner/entities/owner.entity");
const owner_service_1 = require("../owner/owner.service");
const typeorm_2 = require("typeorm");
const pet_entity_1 = require("./entries/pet.entity");
let PetService = class PetService {
    constructor(petRepository, ownerService) {
        this.petRepository = petRepository;
        this.ownerService = ownerService;
    }
    async findAll() {
        return await this.petRepository.find();
    }
    async create(createpetDTO) {
        let pet = this.petRepository.create(createpetDTO);
        return await this.petRepository.save(pet);
    }
    async findOne(id) {
        let pet = await this.petRepository.findOne(id);
        if (pet) {
            return pet;
        }
        throw new common_1.NotFoundException(`Pet record cannot find by id ${id}`);
    }
    async update(id, updatePetDTO) {
        let pet = await this.petRepository.create(updatePetDTO);
        pet.id = id;
        return await this.petRepository.save(pet);
    }
    async remove(id) {
        let pet = await this.findOne(id);
        if (pet) {
            let ret = await this.petRepository.delete(id);
            if (ret.affected === 1) {
                return pet;
            }
        }
        throw new common_1.NotFoundException(`Pet record cannot find by id ${id}`);
    }
    async getOwner(id) {
        return await this.ownerService.findOne(id);
    }
};
PetService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(pet_entity_1.Pet)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        owner_service_1.OwnerService])
], PetService);
exports.PetService = PetService;
//# sourceMappingURL=pet.service.js.map