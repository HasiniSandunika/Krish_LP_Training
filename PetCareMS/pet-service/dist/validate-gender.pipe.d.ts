import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class ValidateGenderPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata): any;
}
