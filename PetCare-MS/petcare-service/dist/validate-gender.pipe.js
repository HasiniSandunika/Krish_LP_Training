"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateGenderPipe = void 0;
const common_1 = require("@nestjs/common");
let ValidateGenderPipe = class ValidateGenderPipe {
    transform(value, metadata) {
        console.log(value);
        if (!(value.gender == 'Male' || value.gender == 'Female')) {
            console.log(value.gender);
            throw new common_1.BadRequestException(`${value.gender} is not a valid gender`);
        }
        return value;
    }
};
ValidateGenderPipe = __decorate([
    common_1.Injectable()
], ValidateGenderPipe);
exports.ValidateGenderPipe = ValidateGenderPipe;
//# sourceMappingURL=validate-gender.pipe.js.map