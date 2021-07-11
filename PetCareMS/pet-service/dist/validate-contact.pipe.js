"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateContactPipe = void 0;
const common_1 = require("@nestjs/common");
let ValidateContactPipe = class ValidateContactPipe {
    transform(value, metadata) {
        console.log(value.contact);
        var reg = new RegExp(/^\d+$/);
        if (reg.test(value.contact) && value.contact.length == 10) {
            console.log(value.contact);
            return value;
        }
        else {
            console.log(value.contact);
            throw new common_1.BadRequestException(`${value.contact} is not a valid contact no.`);
        }
    }
};
ValidateContactPipe = __decorate([
    common_1.Injectable()
], ValidateContactPipe);
exports.ValidateContactPipe = ValidateContactPipe;
//# sourceMappingURL=validate-contact.pipe.js.map