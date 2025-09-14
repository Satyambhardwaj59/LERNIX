import express from 'express';
import 'dotenv/config';
import connectionDB from './config/mongoDB.js';

const app = express();
const PORT = process.env.PORT || 5000;

connectionDB();

app.use(express.json());

app.use('/', (req, res) => res.send('API is running...'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));