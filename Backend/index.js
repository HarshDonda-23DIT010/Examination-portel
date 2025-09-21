import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import userRoutes from './routes/user.routes.js';
import yearRoutes from "./routes/year.routes.js"
import subjectRoutes from "./routes/subject.routes.js"
import studentRoutes from "./routes/student.routes.js"
import subjectFacultyRoutes from "./routes/subjectFaculty.routes.js"
import cors from 'cors';

dotenv.config()

const app = express();
const PORT = process.env.PORT || 5000;

// Cors 
const corsOptions = {
  origin: ['http://localhost:5173', 'http://localhost:5174'],
  credentials: true,
};

app.use(cors(corsOptions));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('Welcome to the Examination Portal API');
})

// example for port number 5173
// app.get("/example",(req,res)=>{
//   return res.json({
//     name : "Rolex"
//   });
// })

// API end points 
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/year', yearRoutes);
app.use('/api/v1/subject', subjectRoutes);
app.use('/api/v1/student', studentRoutes);
app.use('/api/v1/subject-faculty', subjectFacultyRoutes);


app.listen(PORT, () => {
  console.log(`Server running on port : ${PORT}`)
});
