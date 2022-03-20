
const express = require("express");
const bodyParser = require("body-parser");
const app = express()
const port = process.env.PORT || 8080 ;

app.use(bodyParser.json());

const BASE_API_URL = "/api/v1";

var contacts = [
    {
        name : "peter",
        phone : 12345
    },
    {
        name : "paul",
        phone : 5678
    }
];

app.get(BASE_API_URL+"/contacts",(req,res)=>{
    res.send(JSON.stringify(contacts,null,2));

});

app.get(BASE_API_URL+"/contacts",(req,res)=>{
    res.redirect(API_DOC_PORTAL);

});


app.post(BASE_API_URL+"/contacts",(req,res)=>{
    contacts.push(req.body);
    res.sendStatus(201,"CREATED");

});
//ESTO BORRA TODOS LOS RECURSO  
app.delete(BASE_API_URL+"/contacts", (req, res)=>{
    contacts = [];
    res.sendStatus(200,"OK");
});


app.delete(BASE_API_URL+"/contacts/:name", (req, res)=>{
    var contactName = req.params.name;
    contacts.filter((contact)=>{
        return(contact.name!=contactName);
    })
    res.sendStatus(200,"OK");
});


app.get(BASE_API_URL+"/contacts/:name", (req, res)=>{
    var contactName = req.params.name;
    filteredContacts = contacts.filter((contact)=>{
        return(contact.name == contactName);
    })
    if(filteredContacts == 0){
        res.sendStatus(404,"NOT FOUND");
    }else{
        res.send(JSON.stringify(filteredContacts[0],null,2));
    }

    res.sendStatus(200,"OK");


});



app.use("/",express.static('public'));

//para que esté escuchando en un puerto 
app.listen(port,() =>{
console.log(`Server ready at port ${port}`)
});





//console.log(`Server ready at port ${port}`); asi no esta bien hecho, mejor se pone en el listen como otro parametro





/*
app.get("/",(req,res)=>{
    console.log("Requested / route");
    res.send("<html><body><h1>"+cool()+"<h1></body></html>")
});

app.get("/time",(req,res)=>{
    console.log("Requested / route");
    res.send("<html><body><h1>"+new Date()+"<h1></body></html>")
});

*/