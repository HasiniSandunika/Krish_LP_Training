"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OwnerModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const owner_controller_1 = require("./controller/owner.controller");
const Owner_repository_1 = require("./repository/Owner.repository");
const Owner_schema_1 = require("./schemas/Owner.schema");
const owner_service_1 = require("./service/owner.service");
let OwnerModule = class OwnerModule {
};
OwnerModule = __decorate([
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forFeature([
                { name: Owner_schema_1.Owner.name, schema: Owner_schema_1.OwnerSchema }
            ])],
        controllers: [owner_controller_1.OwnerController],
        providers: [owner_service_1.OwnerService, Owner_repository_1.OwnerRepository]
    })
], OwnerModule);
exports.OwnerModule = OwnerModule;
//# sourceMappingURL=owner.module.js.map