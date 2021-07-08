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
Object.defineProperty(exports, "__esModule", { value: true });
exports.OwnerService = void 0;
const common_1 = require("@nestjs/common");
const Owner_repository_1 = require("../repository/Owner.repository");
let OwnerService = class OwnerService {
    constructor(ownerRepository) {
        this.ownerRepository = ownerRepository;
    }
    async getAllOwners() {
        return await this.ownerRepository.findAll();
    }
    async createOwner(ownerCreateDTO) {
        return await this.ownerRepository.create(ownerCreateDTO);
    }
    async ownerSearch(ownerSearchDTO) {
        return await this.ownerRepository.ownerSearch(ownerSearchDTO);
    }
    async getOwnerById(id) {
        return await this.ownerRepository.findOne(id);
    }
    async updateOwnerById(ownerUpdateDTO) {
        return await this.ownerRepository.update(ownerUpdateDTO);
    }
    async deleteOwnerById(id) {
        return await this.ownerRepository.delete(id);
    }
};
OwnerService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [Owner_repository_1.OwnerRepository])
], OwnerService);
exports.OwnerService = OwnerService;
//# sourceMappingURL=owner.service.js.map