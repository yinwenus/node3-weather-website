const request = require('request')

const geocode = (address, callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1IjoieWlud2VudXMiLCJhIjoiY2t5aHg4YTdsMG5hcDJwb2xqZjE4YTJmYSJ9.aIchU6qHyxUtmf2SC3_b4Q"
    request({url, json:true}, (error, {body}={})=>{
         if(error) {
            callback(console.log('can not connect to map mapbox'), undefined)
         }
         else if (body.features.length===0 ){
           callback(console.log('can not find location'), undefined)
         }
        else {
            callback(undefined,{
                latitude: body.features[0].center[1],
                longtitude:body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports=geocode