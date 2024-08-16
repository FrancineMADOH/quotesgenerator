import express , { Request, Response,Express } from "express";
import router from "../routes/main";
import setupSwagger from "./swagger";

const app:Express = express();
const PORT = process.env.port || 4000

setupSwagger(app);
app.use('/api', router);


app.get('/', (req:Request,res:Response)=>{
    res.send('Welcome to the server...')
});


app.listen(PORT, ()=>{
    console.log("Listening on port " + PORT);
    console.log('API docs are available at http://localhost:4000/api-docs');
} )