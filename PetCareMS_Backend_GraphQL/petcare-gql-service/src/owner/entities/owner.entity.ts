import { Field, ObjectType } from "@nestjs/graphql"
import { Pet } from "src/pet/entries/pet.entity"
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"

@ObjectType()
@Entity()
export class Owner {
  @Field()
    @PrimaryGeneratedColumn('uuid')
    id: string
    @Column()
    @Field()
    name: string
    @Column()
    @Field()
    residence: string
    @Column()
    @Field()
    contact: string
    @Column()
    @Field()
    gender: string

    @OneToMany(()=> Pet, pet=>pet.owner)
    @Field(()=> [Pet],{nullable:true})
    pets: Pet[]
}
