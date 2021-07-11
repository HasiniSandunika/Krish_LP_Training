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
exports.OwnerService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const owner_entity_1 = require("./entities/owner.entity");
let OwnerService = class OwnerService {
    constructor(ownerRepository) {
        this.ownerRepository = ownerRepository;
    }
    async create(createOwnerInput) {
        let owner = this.ownerRepository.create(createOwnerInput);
        return await this.ownerRepository.save(owner);
    }
    async findAll() {
        return await this.ownerRepository.find({
            relations: ["pets"]
        });
    }
    async findOne(id) {
        let owner = await this.ownerRepository.findOne(id, {
            relations: ["pets"]
        });
        if (owner) {
            return owner;
        }
        throw new common_1.NotFoundException(`Owner record cannot find by id ${id}`);
    }
    async update(id, updateOwnerInput) {
        let owner = this.ownerRepository.create(updateOwnerInput);
        owner.id = id;
        return await this.ownerRepository.save(owner);
    }
    async remove(id) {
        let owner = this.findOne(id);
        if (owner) {
            let ret = await this.ownerRepository.delete(id);
            if (ret.affected === 1) {
                return owner;
            }
        }
        throw new common_1.NotFoundException(`Owner record cannot find by id ${id}`);
    }
};
OwnerService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(owner_entity_1.Owner)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], OwnerService);
exports.OwnerService = OwnerService;
//# sourceMappingURL=owner.service.js.map