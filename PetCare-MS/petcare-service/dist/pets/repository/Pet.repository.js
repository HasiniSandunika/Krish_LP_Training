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
exports.PetRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const Pet_schema_1 = require("../schemas/Pet.schema");
const mongoose = require("mongoose");
let PetRepository = class PetRepository {
    constructor(petModel) {
        this.petModel = petModel;
    }
    async create(petCreateDTO) {
        let pet = new this.petModel(petCreateDTO);
        return await pet.save();
    }
    async findAll() {
        return await this.petModel.find();
    }
    async findOne(id) {
        return await this.petModel.findOne({ _id: id });
    }
    async petSearch(petSearchDTO) {
        let name = Object.is(petSearchDTO.name, undefined) ? '' : petSearchDTO.name;
        return await this.petModel.find({ $and: [{ name: { $regex: name } }] });
    }
    async update(petUpdateDTO) {
        return await this.petModel.findByIdAndUpdate({ _id: petUpdateDTO.id }, { name: petUpdateDTO.name, type: petUpdateDTO.type,
            gender: petUpdateDTO.gender, age: petUpdateDTO.age }, { new: true });
    }
    async delete(id) {
        let objId = mongoose.Types.ObjectId(id);
        let result = await this.petModel.deleteOne({ _id: objId });
        return (result.n === 1);
    }
};
PetRepository = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(Pet_schema_1.Pet.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], PetRepository);
exports.PetRepository = PetRepository;
//# sourceMappingURL=Pet.repository.js.map