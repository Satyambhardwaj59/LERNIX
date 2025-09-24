import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
    {
        _id: {type: String, require: true},
        name: {type: String, require: true},
        email: {type: String, require: true},
        imageUrl: {type: String, require: true},
        enrolledCourses: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Course'
            }
        ],
    }, {timestamps: true}
)

const User = mongoose.model('User', userSchema);

export default User;