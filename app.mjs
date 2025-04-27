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
       'https://hackathonfrontendmern.vercel.app/taskboard'
            
			
			
			],
		methods: ['GET', 'PUT', 'POST', 'DELETE'],
		credentials: true,
		allowedHeaders: ['Content-Type', 'Authorization'],
	}),
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("✅ Backend is live and working!");
});

app.use("/api/auth", authRoutes);
app.use('/api/tasks', taskRoutes);



const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`✅ Server is live on port ${port}`);
});

