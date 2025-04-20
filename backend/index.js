const express = require('express');
const cors = require('cors');
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 5000;

const dbConnection = require("../backend/config/db")
dbConnection()

const route = require("./routes/route")
app.use("/api/v1",route);

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})