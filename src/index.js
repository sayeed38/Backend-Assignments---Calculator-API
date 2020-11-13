const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here
app.get('/', (req, res) => {
    res.send("Hello world!");
}) 

app.post('/add', (req, res) => {
    //console.log(isNaN(parseInt(req.body.num1)));
    if(isNaN(+req.body.num1) || isNaN(+req.body.num2)){
        res.send({
            status: "error",
            message: "Invalid data types"
        });
        return;
    }
    let sum = req.body.num1 + req.body.num2;
    if((parseInt(req.body.num1) > 100000 || parseInt(req.body.num2) > 100000) || sum > 100000){
        res.send({
            status: "error",
            message: "Overflow"
        });
        return;
    }
    res.send({
        status: "success",
        message: "the sum of two given numbers",
        sum: sum
    });
})

app.post('/sub', (req, res) => {
    //console.log(isNaN(parseInt(req.body.num1)));
    if(isNaN(+req.body.num1) || isNaN(+req.body.num2)){
        res.send({
            status: "error",
            message: "Invalid data types"
        });
        return;
    }
    let diff = req.body.num1 - req.body.num2;
    if((parseInt(req.body.num1) < 100000 || parseInt(req.body.num2) < 100000) || diff < 100000){
        res.send({
            status: "error",
            message: "Underflow"
        });
        return;
    }
    
    res.send({
        status: "success",
        message: "the difference of two given numbers",
        difference: diff
    });
})

app.post('/multiply', (req, res) => {
    //console.log(isNaN(parseInt(req.body.num1)));
    if(isNaN(+req.body.num1) || isNaN(+req.body.num2)){
        res.send({
            status: "error",
            message: "Invalid data types"
        });
        return;
    }
    if(parseInt(req.body.num1) > 100000 || parseInt(req.body.num2) > 100000){
        res.send({
            status: "error",
            message: "Overflow"
        });
        return;
    }
    let mul = req.body.num1 * req.body.num2;
    res.send({
        status: "success",
        message: "The product of given numbers",
        result: mul
    });
})

app.post('/division', (req, res) => {
    //console.log(req.body.num2);
    if(isNaN(+req.body.num1) || isNaN(+req.body.num2)){
        res.send({
            status: "error",
            message: "Invalid data types"
        });
        return;
    }
    if(parseInt(req.body.num2) === 0){
        res.send({
            status: "error",
            message: "Cannot divide by zero"
        });
        return;
    }
    let div = req.body.num1 / req.body.num2;
    res.send({
        status: "success",
        message: "The division of given numbers",
        result: div
    });
})
//port, () => console.log(`App listening on port ${port}!`)
app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;