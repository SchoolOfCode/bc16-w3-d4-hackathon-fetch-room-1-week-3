const api = 'https://api.open-meteo.com/v1/forecast?latitude=51.5085&longitude=-0.1257&current=temperature_2m,weather_code,wind_speed_10m&wind_speed_unit=mph&timezone=GMT&forecast_days=1'
// Create a async function to call back weather api data


async function getWeatherData(callback) {
    // // Use fetch to get api JSON response
    const response = await fetch(api,{method:'GET'})

    // // parse response using josn()
    const data = await response.json()
    
    // // Catch error
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    //  calling data in another function
    callback(data)
}

// Create function to use data from api (async)
// use DOM manipulation to get elements
// feed data to selected DOM elements
// // select temp, day , time and location condition 

