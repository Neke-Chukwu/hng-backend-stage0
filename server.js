import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import meRoute from './routes/get-me-endpoint.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

//Health check route
app.get('/', (req, res) => {
  res.status(200).send('Server is running✅')
});

// Importing the /me route
app.use(meRoute);

// Console colors
const reset = '\x1b[0m';
const blue = '\x1b[34m';

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(blue,`http://localhost:${PORT}/me`, reset);
});

