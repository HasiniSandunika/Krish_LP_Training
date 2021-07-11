import { Field, ObjectType } from "@nestjs/graphql"
import { Owner } from "src/owner/entities/owner.entity"
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

@ObjectType()
@Entity()
export class Pet{
    @Field()
    @PrimaryGeneratedColumn('uuid')
    id: string
    @Column()
    @Field()
    name: string
    @Column()
    @Field()
    type: string
    @Column()
    @Field()
    gender: string
    @Column()
    @Field()
    age: string
    @ManyToOne(()=> Owner, owner=>owner.pets)
    @Field(()=> Owner, {nullable:true})
    owner: Owner
    @Column()
    @Field()
    ownerId: string
}