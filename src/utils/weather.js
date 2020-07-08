//const request=require('request');
const geocode=require("./geocode");
const forecast=require("./weatherstack");
//const url= "http://api.weatherstack.com/current?access_key=18779a8dfce0589f3d495eb63bfa4352&query=37.8267,-122.4233";
//const url1="https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibXZpc2hudSIsImEiOiJja2M1eDQ2ZHcwbTBjMnNvOXgwcDljcmZ1In0.I8cZQZ1XFe_gHcEyEGOjwg"

// request({url,json:true},(err,res)=>{
// //var data=JSON.parse(res);
// //console.log(res);

// //console.log(res.body);

// //var d=res.body;
// // var data=(JSON.parse(res.body));
// // console.log(data.current.temperature);
// console.log(res.body.current);
// console.log(res.body.current.temperature);
// console.log("It is currently "+ res.body.current.temperature +" degree out. Their is a "+res.body.current.precip+"% chance of rain" );
// })

// request({url:url1,json:true},(err,res)=>{
//     console.log(res.body.features[1].center[0]);

// })


// geocode("Boston",(error,data)=>{
//   //  console.log("Error",error);
//     console.log("Data",data);
// });

// forecast(-71.01263800000001,42.364098,(err,data)=>{
//    // console.log("error",err);
//     console.log("data",data);
// });  

geocode("Boston",(error,{latitude,longitude})=>{
    console.log("latitude",latitude);
    console.log('longitude',longitude);
    forecast(latitude,longitude,(err,data)=>{
        console.log("Data",data);
    })
})

// const code=(add,callback)=>{
//     setTimeout(()=>{
//         const data={
//             lat:"32",
//             long:"43"
//         }
//          callback(data);
//     },2000)

// }

// code("hello",(data)=>{
//     console.log(data);
// })


//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

// const add=(a, b, callback) => {
//     setTimeout(() => { 
//         callback (a + b)
//     },2000)
// };

// add(2,3,(data)=>{
//     console.log(data);
// })