const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const port = "3000";

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.get("/", (req,res)=>{
    // res.send("working");
    res.render("form")
})

app.post("/", (req, res)=>{
    let fileName = req.body.fileName;
    res.sendFile(path.join(__dirname,"./files/" + fileName + ".txt"));
    // res.render(fileName);
})


app.listen(port, ()=>{
    console.log("http://localhost:"+ port)
})