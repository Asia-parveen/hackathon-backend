import express from "express"
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import connectToDb from "./db/db.js";
import taskRoutes from './routes/taskRoutes.js';
import authRoutes from './routes/authRoutes.js';


// const port = 3000
dotenv.config();

const app = express();
connectToDb();

// app.use(cors());
app.use(
	cors({
		origin: ['http://localhost:5174',
			 'http://localhost:5173',
            
			
			
			],
		methods: ['GET', 'PUT', 'POST', 'DELETE'],
		credentials: true,
		allowedHeaders: ['Content-Type', 'Authorization'],
	}),
);
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/api/auth", authRoutes);
app.use('/api/tasks', taskRoutes);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })