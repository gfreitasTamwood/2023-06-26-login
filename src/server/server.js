require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get('/login-test', function(req,res){
    res.send("You are the best!");
});

app.post('/login-form',function(req,res){
    console.log(res.json({
        message: "You logged!",
        username: req.body.username
    }));
}

);

app.listen(PORT, function(){
    console.log(`Server running into port ${PORT}`);
});