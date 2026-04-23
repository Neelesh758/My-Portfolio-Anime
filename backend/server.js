import express from "express";
import dotenv from "dotenv";
//Load Enviorment Variables
dotenv.config();

import cors from "cors";
import connectDb from "./config/db.js";
import errorHandler from "./middlewares/errorHandler.Middleware.js";
import adminRoutes from "./routes/admin.Route.js"
import skillsroute from './routes/skill.Route.js'
import expRoutes from './routes/experience.Route.js';
import projectRoute from './routes/project.Route.js'
import cookieParser from "cookie-parser";


//Initialize App
const app = express();

//Database Connection 
connectDb()


//Middlewares
app.use(express.json());
app.use(cors());
app.use(cookieParser());

//Routes
app.use('/api/v1/admin',adminRoutes);
app.use('/api/v1/skills',skillsroute);
app.use('/api/v1/exp',expRoutes);
app.use('/api/v1/projects',projectRoute);


//Root Route
app.get("/", (req, res) => {
  res.send("Portfolio Backend API is running ");
});

//Error Hadle
app.use(errorHandler);


//Server Listen 
const Port = process.env.PORT || 1307;

app.listen(Port ,()=>{
  console.log(`Server is Running Successfully on Port -  ${Port}`)
})