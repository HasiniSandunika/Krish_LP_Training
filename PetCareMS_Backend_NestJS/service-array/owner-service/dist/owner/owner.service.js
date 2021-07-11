"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OwnerService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
let OwnerService = class OwnerService {
    constructor() {
        this.owners = [];
    }
    getAllOwners() {
        return this.owners;
    }
    createOwner(ownerCreateDTO) {
        const { name, residence, contact, gender } = ownerCreateDTO;
        const owner = {
            id: uuid_1.v1(),
            name: name,
            residence: residence,
            contact: contact,
            gender: gender
        };
        this.owners.push(owner);
        return owner;
    }
    ownerSearch(ownerSerarchDTO) {
        const { name } = ownerSerarchDTO;
        let owners = this.getAllOwners();
        if (name) {
            owners = owners.filter(owner => owner.name.includes(name));
        }
        return owners;
    }
    getOwnerByID(id) {
        const owners = this.getAllOwners();
        let owner = owners.find(owner => owner.id == id);
        if (!owner) {
            throw new common_1.NotFoundException("Cannot find the owner");
        }
        return owner;
    }
    updateOwnerByID(ownerUpdateDTO) {
        const { id, name, residence, contact, gender } = ownerUpdateDTO;
        let owner = this.getOwnerByID(id);
        owner.name = name;
        owner.residence = residence;
        owner.contact = contact;
        owner.gender = gender;
        return owner;
    }
    deleteOwnerByID(id) {
        let owners = this.getAllOwners();
        this.owners = owners.filter(owner => owner.id != id);
        return (owners.length != this.owners.length);
    }
};
OwnerService = __decorate([
    common_1.Injectable()
], OwnerService);
exports.OwnerService = OwnerService;
//# sourceMappingURL=owner.service.js.map