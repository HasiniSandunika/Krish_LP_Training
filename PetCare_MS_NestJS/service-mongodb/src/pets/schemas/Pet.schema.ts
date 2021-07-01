import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type PetDocumet=Pet & Document;

@Schema()
export class Pet{
    @Prop()
    id: string
    @Prop({ required: true })
    name: string
    @Prop({ required: true })
    type: string
    @Prop({ required: true })
    gender: string
    @Prop({ required: true })
    age: string
}

export const PetSchema=SchemaFactory.createForClass(Pet);
