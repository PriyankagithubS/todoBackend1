import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDb from './config/dbConfig.js';
import todoRoutes from './routes/TodoRoutes.js';


dotenv.config();

const app = express();

// Middleware for parsing requests
app.use(express.json()); // Parse JSON request body
app.use(cors()); // Enable CORS for all requests

// Default route
app.get('/', (req, res) => {
    res.status(200).json({ message: "App is working fine" });
});
//endpoints
app.use('/api', todoRoutes);

// Connect to MongoDB
connectDb();


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
