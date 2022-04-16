const request=require('request')

const forecast= (latitude, longtitude, callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=264f7097a3dd9538b0427dcb57e2980c&query=' + latitude +','+ longtitude+'&units=m'
    request({url, json:true}, (error, {body}={})=>{
        if (error) {
            callback ("can not connect to weather service", undefined)
        }else if(body.error) {
            callback("invalid query. can not find location", undefined)
        }
        else
        callback(undefined, {
            description: body.current.weather_descriptions[0],
            temperature: body.current.temperature,
            humidity: body.current.humidity})
        })
}

module.exports=forecast