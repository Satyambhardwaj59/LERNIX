import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongoDB.js';
import { clerkWebhooks } from './controllers/webhooks.js';


const PORT = process.env.PORT || 5000;
const app = express();
await connectDB();

app.use(cors());



app.get('/', (req, res) => res.send('API is running...'));
app.post('/clerk',express.json(), clerkWebhooks);

app.listen(PORT, () => console.log(`Server start on ${PORT}`));
