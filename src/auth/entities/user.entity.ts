import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class User {

    @Prop({ unique: true, required: true })
    email: string;

    @Prop({ required: true })
    name: string;

    @Prop({ required: true, minlength: 6 })
    password?: string;

    @Prop({ default: true })
    isActive: string;

    @Prop({ type: [String], default: ['user'] })
    roles: string[];

    _id?: string;
}

export const UserSchema = SchemaFactory.createForClass(User);