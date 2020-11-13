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
    let num1 = req.body.num1;
    let num2 = req.body.num2;
    if(isNaN(parseFloat(num1)) || isNaN(parseFloat(num2))){
        res.send({
            status: "error",
            message: "Invalid data types"
        });
        return;
    }
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    let sum = num1 + num2;
    if(((num1) > 100000 || (num2) > 100000) || sum > 100000){
        res.send({
            status: "error",
            message: "Overflow"
        });
        return;
    }else if(num1 < -100000 || num2 < -100000 || sum < -100000){
        res.send({
            status: "error",
            message: "Underflow"
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

    let num1 = req.body.num1;
    let num2 = req.body.num2;
    if(isNaN(parseFloat(num1)) || isNaN(parseFloat(num2))){
        res.send({
            status: "error",
            message: "Invalid data types"
        });
        return;
    }
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    let diff = req.body.num1 - req.body.num2;
    if(((num1) > 100000 || (num2) > 100000) || diff > 100000){
        res.send({
            status: "error",
            message: "Overflow"
        });
        return;
    }else if(num1 < -100000 || num2 < -100000 || diff < -100000){
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
    let num1 = req.body.num1;
    let num2 = req.body.num2;
    if(isNaN(parseFloat(num1)) || isNaN(parseFloat(num2))){
        res.send({
            status: "error",
            message: "Invalid data types"
        });
        return;
    }
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    let mul = req.body.num1 * req.body.num2;
    if(((num1) > 100000 || (num2) > 100000) || mul > 100000){
        res.send({
            status: "error",
            message: "Overflow"
        });
        return;
    }else if(num1 < -100000 || num2 < -100000 || mul < -100000){
        res.send({
            status: "error",
            message: "Underflow"
        });
        return;
    }
    res.send({
        status: "success",
        message: "The product of given numbers",
        result: mul
    });
})

app.post('/divide', (req, res) => {
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