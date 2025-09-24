import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongoDB.js';

const app = express();

// MiddleWares 
app.use(cors());

// Connect to DB
await connectDB();

app.use(express.json());

// Routes
app.use('/', (req, res) => res.send('API is running...'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));