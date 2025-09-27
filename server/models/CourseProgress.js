import mongoose, { Schema } from "mongoose";


const courseProgressSchema = new Schema({
    userId: {type: String, require: true},
    courseId: {type: String, require: true},
    completed: {type: Boolean, default: false},
    lectureCompleted: []
}, {minimize: false});

export const CourseProgress = mongoose.model('CourseProgress', courseProgressSchema);