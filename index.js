const express = require('express');
const app= express();
const path=require('path');
const fs= require('fs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname,'public')));
app.set('view engine','ejs');

app.get("/",function(req,res){
    fs.readdir('./files',function(err,files){

        res.render("index",{files:files})
    })
})
app.post('/create',function(req,res){
fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`,req.body.details,function(err){
    res.redirect('/');
})
})
app.get("/file/:filename",function(req,res){``
    fs.readFile(`./files/${req.params.filename}`,"utf8",function(err,filedata){

        res.render("detail",{filename:req.params.filename,data:filedata});
    })

})

// app.get("/public/:paji",function(req,res){
//     res.send(`welcome ${req.params.paji}`);
// })
// app.get("/public/:paji/:age",function(req,res){
//     res.send(`welcome ${req.params.paji} of age ${req.params.age}`);
// })


app.listen(3000);