import { Schema, model } from "mongoose";

const TransactionSchema = new Schema({
    value:{type: String, riquered: true},
    description:{type: String, riquered: true},
    type:{type: String, riquered: true},
    userId: {type: Schema.Types.ObjectId, require: true, ref: "users"},
    created_at: {type: Date, default: Date.now()},
});

export default model("transactions", TransactionSchema);