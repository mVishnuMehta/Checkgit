const request=require('request');

const geocode=(address,callback)=>{
    const url="https://api.mapbox.com/geocoding/v5/mapbox.places/"+ address + ".json?access_token=pk.eyJ1IjoibXZpc2hudSIsImEiOiJja2M1eDQ2ZHcwbTBjMnNvOXgwcDljcmZ1In0.I8cZQZ1XFe_gHcEyEGOjwg"

    request({url,json:true},(err,response)=>{
        if(err)
        {
            callback("err",undefined);
        }
        else{
            callback(undefined,{
                latitude:response.body.features[1].center[0],
                longitude:response.body.features[1].center[1]
            })
        }
    })
};

module.exports=geocode;