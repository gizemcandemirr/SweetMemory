import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import userRouter from "./routes/user.js"
import memoryRouter from "./routes/memory.js"

const app= express();

app.use(morgan("dev"));
app.use(express.json({limit:"30mb", extended: true}));
app.use(express.urlencoded({limit:"30mb", extended: true}));
app.use(cors());

app.use("/users", userRouter);
app.use("/memories", memoryRouter);


const MONGODB_URL= "mongodb+srv://mhndsbgyn:452452@cluster0.khrqv.mongodb.net/sweet-memory-app?retryWrites=true&w=majority";

const port = 5000;

mongoose.connect(MONGODB_URL).then(() => {

    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    })
}).catch((error) => console.log(`${error} did not connect`))