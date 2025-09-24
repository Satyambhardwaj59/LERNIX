import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongoDB.js';
import { clerkWebhooks } from './controllers/webhooks.js';

const app = express();

// MiddleWares 
app.use(cors());

// Connect to DB
await connectDB();

app.use(express.json());

// Routes
app.get('/favicon.ico', (req, res) => res.status(204).end());
app.use('/', (req, res) => res.send('API is running...'));
app.post('/clerk', express.json(), clerkWebhooks)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));