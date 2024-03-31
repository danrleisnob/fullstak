import express, { json } from "express";
import authRouter from "./routes/authRoutes.js";
import transactionRouter from "./routes/transactionRoutes.js";
import { connectBd } from "./config/database.js";

const app = express();

connectBd();
app.use(json());
app.use(authRouter);
app.use(transactionRouter)

const port = process.env.PORT;
app.listen(port, ()=> console.log(`Server listenin port ${port}`));