// api/index.js
import express from 'express';
import serverless from 'serverless-http';
import cors from 'cors';
import 'dotenv/config';
import connectDB from '../config/mongoDB.js';
import { clerkWebhooks } from '../controllers/webhooks.js';

const app = express();
app.use(cors());
app.use(express.json());

await connectDB();

app.get('/favicon.ico', (req, res) => res.status(204).end());
app.get('/', (req, res) => res.send('API is running...'));
app.post('/clerk', clerkWebhooks);

export const handler = serverless(app);
