import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongoDB.js';
import { clerkWebhooks } from './controllers/webhooks.js';
import educatorRouter from './routes/educatorRoutes.js';
import { clerkMiddleware } from '@clerk/express';
import connectCloudinary from './config/cloudinary.js';


const app = express();

// Middlewares 
app.use(cors());
app.use(clerkMiddleware());

connectDB();
await connectCloudinary()

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => res.send('API is running...'));
app.post('/clerk', express.json(), clerkWebhooks);
app.use('/api/educator', express.json(), educatorRouter)

app.listen(PORT, () => console.log(`Server start on ${PORT}`));
