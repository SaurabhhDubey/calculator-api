import express from "express";

const app = express();
const port = 3000;

// middleware for parsing json body
app.use(express.json());

