import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class ValidateContactPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata): any;
}
