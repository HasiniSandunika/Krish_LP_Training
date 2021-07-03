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
exports.OwnerRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const Owner_schema_1 = require("../schemas/Owner.schema");
const mongoose = require("mongoose");
let OwnerRepository = class OwnerRepository {
    constructor(ownerModel) {
        this.ownerModel = ownerModel;
    }
    async create(ownerCreateDTO) {
        let owner = new this.ownerModel(ownerCreateDTO);
        return await owner.save();
    }
    async findAll() {
        return await this.ownerModel.find();
    }
    async findOne(id) {
        return await this.ownerModel.findOne({ _id: id });
    }
    async ownerSearch(ownerSearchDTO) {
        let name = Object.is(ownerSearchDTO.name, undefined) ? '' : ownerSearchDTO.name;
        return await this.ownerModel.find({ $and: [{ name: { $regex: name } }] });
    }
    async update(ownerUpdateDTO) {
        return await this.ownerModel.findOneAndUpdate({ _id: ownerUpdateDTO.id }, { name: ownerUpdateDTO.name, residence: ownerUpdateDTO.residence,
            contact: ownerUpdateDTO.contact, gender: ownerUpdateDTO.gender }, { new: true });
    }
    async delete(id) {
        let objId = mongoose.Types.ObjectId(id);
        let result = await this.ownerModel.deleteOne({ _id: objId });
        console.log(result.n);
        return (result.n === 1);
    }
};
OwnerRepository = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(Owner_schema_1.Owner.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], OwnerRepository);
exports.OwnerRepository = OwnerRepository;
//# sourceMappingURL=Owner.repository.js.map