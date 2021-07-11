import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateOwnerInput {
    @Field()
    name: string
    @Field()
    residence: string
    @Field()
    contact: string
    @Field()
    gender: string
}
