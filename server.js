const express = require('express');
const fs = require('fs');

const app = express();

app.post('/', (req, res) => {
    res.json(ContractSchema)
})

app.get("/users", (req, res) => {
    fs.readFile(`${__dirname}/data/usersFaker.json`, function (err, data){
        console.log(data);
        res.status(200).end(data);
    });
});

app.post("/ContractSchema", (req,res) => {
    fs.readFile(`${__dirname}/data/usersFaker.json`, function (err, ContractSchema){
        console.log(ContractSchema);
        res.status(200).end(ContractSchema);
    });   
});

app.listen(3001);
console.log("Servidor rodando http://localhost:3001/");