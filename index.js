const cool = require("cool-ascii-faces");
//console.log(cool());


const express = require("express");

const app = express()
const port = 8080; 

app.get("/",(req,res)=>{
    console.log("Requested / route");
    res.send("<html><body><h1>"+cool()+"<h1></body></html>")
});

//para que esté escuchando en un puerto 
app.listen(port,() =>{
console.log(`Server ready at port ${port}`)
});

//console.log(`Server ready at port ${port}`); asi no esta bien hecho, mejor se pone en el listen como otro parametro

