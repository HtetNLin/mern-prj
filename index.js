import express from 'express';
import bodyParser from 'body-parser';
import  Mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';
import dotenv from 'dotenv';

const app = express();

dotenv.config(); 

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use('/posts',postRoutes);

app.get('/',(req,res) => {
    res.send("hello to dash-mm api")
})

// const CONNECTION_URL = 'mongodb+srv://hnl:1234@cluster0.5jpax.mongodb.net/myFirstDatabase?retryWrites=true&w=majority '
const PORT = process.env.PORT || 5000;

Mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=> app.listen(PORT,() => console.log(`Server is running on port: ${PORT}`)))
.catch((err)=> console.log(err.message));

