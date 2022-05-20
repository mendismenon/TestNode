const request = require('request')

const geocode = (address, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=ca3a93f18a55a665053ce0f92570bf78&query='+address

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (!body?.location) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.location.lat,
                longitude: body.location.lon,
                whether: body.current.weather_descriptions,
                location: body.location,

            })
        }
    })
}

module.exports = geocode