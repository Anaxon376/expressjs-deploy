import express from "express";
import ServerlessHttp from "serverless-http";

 const app=express();

app.get('/', (req, res)=>{
    res.send("Welcome to the server!");
});
app.get('/about',(req, res)=>{
    res.json({
        name: "Anaxon",
        surname: " Davletova",
        email: "davletova@gmail.com",
        age: 17,
    })
})

 export const handler = ServerlessHttp(app);