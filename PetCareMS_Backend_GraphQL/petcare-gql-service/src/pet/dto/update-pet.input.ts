import { Field, InputType } from "@nestjs/graphql"

@InputType()
export class UpdatePetDTO{
    @Field()
    id: string
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