import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import authRoutes from './routes/auth.routes.js';
import cors from 'cors';

dotenv.config()

const app = express();
const PORT = process.env.PORT || 5000;

// Cors 
const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true,
};

app.use(cors(corsOptions));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('Welcome to the Examination Portal API');
})

// API end points 
app.use('/api/v1/user', authRoutes);


app.listen(PORT, () => {
  console.log(`Server running on port : ${PORT}`)
});
