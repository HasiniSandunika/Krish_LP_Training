import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateOwnerInput {
    @Field()
    id: string
    @Field()
    name: string
    @Field()
    residence: string
    @Field()
    contact: string
    @Field()
    gender: string
}
