import { Field, InputType } from "@nestjs/graphql"

@InputType()
export class CreatePetDTO{
    @Field()
    name: string
    @Field()
    type: string
    @Field()
    gender: string
    @Field()
    age: string
    @Field()
    ownerId: string
}