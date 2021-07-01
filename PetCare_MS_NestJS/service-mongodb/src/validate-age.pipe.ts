import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidateAgePipe implements PipeTransform {

  transform(value: any, metadata: ArgumentMetadata) {
    if(!isNaN(value.age) && Number(value.age)<0){
      throw new BadRequestException(`${value.age} is not a valid age`);
    }
    return value;
  }
}
