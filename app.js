const apiEndpoint =
	"https://api.open-meteo.com/v1/forecast?latitude=51.5085&longitude=-0.1257&current=temperature_2m,weather_code,wind_speed_10m&wind_speed_unit=mph&timezone=GMT&forecast_days=1";
// use DOM manipulation to get elements
const weatherImg = document.querySelector("#weatherConditionImg");
const weatherTemp = document.querySelector("#weatherTemp");
const weatherLoc = document.querySelector("#weatherLocation");
const locationDay = document.querySelector("#locationDay");
const locationTime = document.querySelector("#locationTime");
const weatherCondition = document.querySelector("#weatherCondition");

// Create a async function to call back weather api data
async function getWeatherData() {
	// // Use fetch to get api JSON response
	try {
		const response = await fetch(apiEndpoint, { method: "GET" });
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		// // parse response using josn()
		const data = await response.json();
		return data;
	} catch (error) {
		// // Catch error
		console.error("Could not fetch weather data: ", error);
	}
}

// Create function to use data from api (async)
async function handleData() {
	const weatherData = await getWeatherData();
	console.log(weatherData);

	// feed data to selected DOM elements
	// save elements as variables
	const temp = Math.round(weatherData.current.temperature_2m);
	const weekDay = convertDate(weatherData.current.time);

	console.log(convertTime(weatherData.current.time));

	weatherTemp.textContent = `${temp}°C`;
	locationDay.textContent = `${weekDay}`;
}

function convertDate(date) {
	const todaysDate = new Date(date);
	const dayNum = todaysDate.getDay();

	// extract day of the week
	const dayNames = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];

	const weekday = dayNames[dayNum];
	// Return the day of the week
	return weekday;
}

function convertTime(time) {
	const dateArray = time.split("T");
	const hourMin = dateArray[1];
	console.log(hourMin);
}

handleData();

// // select temp, day , time and location condition
