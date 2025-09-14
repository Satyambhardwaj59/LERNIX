import mongoose from "mongoose";

const connectionDB = async () => {
    try {
        mongoose.connection.on('connected', () => console.log('MongoDB connected successfully'));
        await mongoose.connect(process.env.MONGO_URL);
    } catch (error) {
        console.log('Error in DB connection', error);
    }
}

export default connectionDB;