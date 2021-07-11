import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type OwnerDocumet=Owner & Document;

@Schema()
export class Owner{
    @Prop()
    id: string
    @Prop({ required: true })
    name: string
    @Prop({ required: true })
    residence: string
    @Prop({ required: true })
    contact: string
    @Prop({ required: true })
    gender: string
}

export const OwnerSchema=SchemaFactory.createForClass(Owner);