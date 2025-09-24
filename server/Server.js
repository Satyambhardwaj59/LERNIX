import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongoDB.js';
import { clerkWebhooks } from './controllers/webhooks.js';

const app = express();

// Middlewares 
app.use(cors());
app.use(express.json());

// Connect to DB
await connectDB();

// Handle favicon request (avoids 404 in browser)
app.get('/favicon.ico', (req, res) => res.status(204).end());

// Routes
app.post('/clerk', clerkWebhooks);       // webhook route first
app.get('/', (req, res) => res.send('API is running...'));  // root route last

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
