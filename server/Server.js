import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongoDB.js';
import { clerkWebhooks } from './controllers/webhooks.js';


const PORT = process.env.PORT || 5000;
await connectDB();

const app = express();
app.use(cors());
app.use(express.json());



app.get('/', (req, res) => res.send('API is running...'));
app.post('/clerk', clerkWebhooks);

app.listen(PORT, () => console.log(`Server start on ${PORT}`));
