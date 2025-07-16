import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import authRoutes from './routes/auth.routes.js';

dotenv.config()

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.listen(PORT, () => {
    console.log(`Server running on port : ${PORT}`)
});

app.get('/', (req, res) => {
    res.send('Welcome to the Examination Portal API');
})

app.use('/api/auth', authRoutes);