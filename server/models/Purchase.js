import mongoose, { Schema } from "mongoose";

const PurchaseSchema = new Schema({
    courseId: {type: Schema.Types.ObjectId, ref: 'Course', require: true},
    userId: {type: String, ref: 'User', require: true},
    amount: {type: Number, require: true},
    status: {type: String, enum: ['pending', 'completed', 'failed'], default: 'pending'},
}, {timestamps: true})

const Purchase = mongoose.model('Purchase', PurchaseSchema);

export default Purchase;