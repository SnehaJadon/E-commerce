const cookieParser = require("cookie-parser");
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')



const uri = "mongodb+srv://snehajadon2003:snehajadon2025@cluster0.ttcfo9m.mongodb.net/"

mongoose.connect(uri).then(()=>console.log('mongoDB is connected.')).catch((error)=> console.log(error))

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({

    origin: 'http://localhost:5173/',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: [
        "Content-Type",
        'Authorization',
        'Cache-Control',
        'Expires',
        'Pragma'
    ],
    Credentials: true
}))

app.use(cookieParser())
app.use(express.json())

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
