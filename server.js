import express from "express";

const app = express();
const port = 3000;

// middleware for parsing json body
app.use(express.json());

// add 

app.post("/add" , (req, res)=>{
    const {num1 , num2} = req.body;
    const result = num1 + num2 ;
    res.json({operation: "addition" , result});
});

// subtract

app.post("/subtract" , (req, res)=>{
    const {num1 , num2} = req.body;
    const result = num1 - num2 ;
    res.json({operation: "subtract" , result});
});

// multiply

app.post("/multiply" , (req, res)=>{
    const {num1 , num2} = req.body;
    const result = num1 * num2 ;
    res.json({operation: "multiply" , result});
});

// divide

app.post("/divide" , (req , res)=>{
    const {num1 , num2} = req.body;
    if (num2 === 0){
        return res.status(400).json({error:"cannot divided by zero"});
    }
    const result = num1 / num2 ; 
    res.json({operation : "divde" , result});
});

app.listen(port , ()=> console.log(`server is listening on ${port}`));

