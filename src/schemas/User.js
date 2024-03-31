import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    name:{type: String, riquered: true},
    email:{type: String, unique:true, riquered: true},
    password:{type: String, riquered: true},
    createdAt: {type: Date, default: Date.now()},
});

export default model("users", UserSchema);