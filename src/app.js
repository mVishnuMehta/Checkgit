const path=require("path");
const express=require("express");
const app=express();

const port= process.env.PORT || 3000;

const request=require('request');
const geocode=require("./utils/geocode");
const weatherstack=require("./utils/weatherstack");

app.set('views',"../views");
app.set('view engine','hbs');
app.use(express.static(path.join(__dirname,"../pri")));

//app.set('views', path.join(__dirname, 'views'));


// app.get('',(req,res)=>
// {
//     res.send("hello World");
//     console.log("Entered into section")
// })

app.get('',(req,res)=>{
    //console.log("a");
    res.render('index');
});

app.get("/weather",(req,res)=>{
    if(!req.query.address){
        res.send({
            error:"currently we dont have any address corresponding to that"
        });
    } 
else{
    geocode(req.query.address,(error,{latitude,longitude})=>{
        if(error){
            res.send({error});
        }
        else{
            console.log(req.query.address);
            weatherstack(latitude,longitude,(error,forecast)=>{
                if(error)
                {
                    res.send({error});
                 }
                 else 
                 {  
                    res.send(forecast);}
            })
        }
      
    })

}

    
    
    });


    app.listen(port,()=>{
        console.log("server on port" +port);
    })
    