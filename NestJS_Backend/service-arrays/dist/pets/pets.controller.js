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
exports.PetsController = void 0;
const common_1 = require("@nestjs/common");
const validate_age_pipe_1 = require("../validate-age.pipe");
const PetCreate_dto_1 = require("./PetCreate.dto");
const pets_service_1 = require("./pets.service");
const PetUpdate_dto_1 = require("./PetUpdate.dto");
let PetsController = class PetsController {
    constructor(petsService) {
        this.petsService = petsService;
    }
    getAllPets(param) {
        if (Object.keys(param).length) {
            return this.petsService.petSearch(param);
        }
        else {
            return this.petsService.getAllPets();
        }
    }
    createPet(petCreateDTO) {
        return this.petsService.createPet(petCreateDTO);
    }
    getPetByID(id) {
        return this.petsService.getPetByID(id);
    }
    updatePetByID(id, petUpdateDTO) {
        petUpdateDTO.id = id;
        return this.petsService.updatePetByID(petUpdateDTO);
    }
    deletePetByID(id) {
        if (!this.petsService.deletePetByID(id)) {
            throw new common_1.NotFoundException("Cannot delete this Pet");
        }
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PetsController.prototype, "getAllPets", null);
__decorate([
    common_1.Post(),
    common_1.UsePipes(common_1.ValidationPipe),
    common_1.UsePipes(new validate_age_pipe_1.ValidateAgePipe()),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PetCreate_dto_1.PetCreateDTO]),
    __metadata("design:returntype", void 0)
], PetsController.prototype, "createPet", null);
__decorate([
    common_1.Get('/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], PetsController.prototype, "getPetByID", null);
__decorate([
    common_1.Put('/edit/:id'),
    common_1.UsePipes(common_1.ValidationPipe),
    common_1.UsePipes(new validate_age_pipe_1.ValidateAgePipe()),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, PetUpdate_dto_1.PetUpdateDTO]),
    __metadata("design:returntype", void 0)
], PetsController.prototype, "updatePetByID", null);
__decorate([
    common_1.Delete('/:id'),
    common_1.HttpCode(204),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PetsController.prototype, "deletePetByID", null);
PetsController = __decorate([
    common_1.Controller('pets'),
    __metadata("design:paramtypes", [pets_service_1.PetsService])
], PetsController);
exports.PetsController = PetsController;
//# sourceMappingURL=pets.controller.js.map