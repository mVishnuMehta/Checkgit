const request=require('request');

const forecast=(latitude,longitude,callback)=>{
    const url= "http://api.weatherstack.com/current?access_key=18779a8dfce0589f3d495eb63bfa4352&query="+latitude+","+longitude+"&units=f";

   // request({url,json:true},(err,response)=>{
     request({url,json:true},(err,{body})=>{
        if(err){
            callback("Err",undefined);
        }
        else{
  //          callback(undefined,response.body.current.temperature +" degree out. Their is a "+response.body.current.precip+"% chance of rain");   
  callback(undefined,body.current.temperature +" degree out. Their is a "+body.current.precip+"% chance of rain");   
      
}      
    })    
}

console.log(__dirname);

module.exports=forecast;