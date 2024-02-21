import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
// setting up the middleware
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
// limit rakh di accept rakhne ki
app.use(express.json({ limit: "24kb" }));
// spacifying url structure
app.use(express.urlencoded({ extended: true, limit: "24kb" }));
// using cookies parser
app.use(cookieParser());

app.use(express.static("public"));

export { app };
