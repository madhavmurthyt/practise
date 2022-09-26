const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=e94db13e28eb1e38d954043b30dad537&query=' + latitude + ',' + longitude +'&units=f';

    request({url, json: true}, (error, { body }) => {

            if(error) {
                callback('Unable to connect to weather service!')
            } else if(body.error ) {
                callback('Unable to find location', undefined)
            } else {
                callback(undefined, 'Weather at '+body.location.name+' is '+body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out.'); 

            }
    })
}

module.exports = forecast