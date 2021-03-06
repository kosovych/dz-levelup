function ajaxGetWeather(API_TYPE) {

	function getCityID() {

		var cityID = $("#city-list")[0].selectedOptions[0].id;

		return cityID;
	}

	let  cityID = getCityID();

	console.log(cityID);

	API_TYPE = API_TYPE || `/city?city_id=${cityID}`;

	let MAIN_HEAD = API_TYPE;

	console.log(MAIN_HEAD);

	const API_KEY = "key=380c88df3fbf4c5db27e7cce0379ead1";

	//https://api.weatherbit.io/v1.0/forecast/3hourly  /city?city_id=4487042&days=4&key=380c88df3fbf4c5db27e7cce0379ead1

	//https://api.weatherbit.io/v1.0/forecast/3hourly  ?lat=48.4617535%20&lon=35.0210408&days=4  &key=380c88df3fbf4c5db27e7cce0379ead1

	//https://api.weatherbit.io/v1.0/forecast/3hourly?lat=48.4440901lon=34.9934939&days=4&key=380c88df3fbf4c5db27e7cce0379ead1

	const API_START = "https://api.weatherbit.io/v1.0/forecast/3hourly";

	const API_DAYS = "days=4";

	let request = $.ajax({

		url: `${API_START}${MAIN_HEAD}&${API_DAYS}&${API_KEY}`,
		async: false

	}).responseJSON;

	console.log(request);

	$("#locationTitle").text(`${request.city_name}`);

	return request.data;
}

function otherStuff(API_TYPE) {

	let request = ajaxGetWeather(API_TYPE);

	console.log(request);

	var data = new Date();

	var day = data.getDay();

	// var presentDayWeatherData = `${data.getFullYear()}-0${data.getMonth() + 1}-0${data.getDate()}`; //день месяца
	// var secontDayWeatherData = `${data.getFullYear()}-0${data.getMonth() + 1}-0${data.getDate() + 1}`; //день месяца
	// var thirdDayWeatherData = `${data.getFullYear()}-0${data.getMonth() + 1}-${data.getDate() + 2}`; //день месяца
	// var fourthDayWeatherData = `${data.getFullYear()}-0${data.getMonth() + 1}-${data.getDate() + 3}`; //день месяца

	var presentDayWeatherData = `${data.getFullYear()}-0${data.getMonth() + 1}-${data.getDate()}`; //день месяца
	var secontDayWeatherData = `${data.getFullYear()}-0${data.getMonth() + 1}-${data.getDate() + 1}`; //день месяца
	var thirdDayWeatherData = `${data.getFullYear()}-0${data.getMonth() + 1}-${data.getDate() + 2}`; //день месяца
	var fourthDayWeatherData = `${data.getFullYear()}-0${data.getMonth() + 1}-${data.getDate() + 3}`; //день месяца

	console.log(presentDayWeatherData, secontDayWeatherData, thirdDayWeatherData, fourthDayWeatherData);

	let presentDayWeatherArr = []; //масив обьектов погоды на текущий день
	let secontDayWeatherArr = []; //масив обьектов погоды на второй день
	let thirdDayWeatherArr = []; //масив обьектов погоды на третий день
	let fourthDayWeatherArr = []; //масив обьектов погоды на четвертый день

	let $responseObjArr = request.map(reqObjs => {

		if (reqObjs.datetime.slice(0, -3) === presentDayWeatherData) {
			presentDayWeatherArr.push(reqObjs);
			return reqObjs;
		}

		if (reqObjs.datetime.slice(0, -3) === secontDayWeatherData) {
			secontDayWeatherArr.push(reqObjs);
			return reqObjs;
		}

		if (reqObjs.datetime.slice(0, -3) === thirdDayWeatherData) {
			thirdDayWeatherArr.push(reqObjs);
			return reqObjs;
		}

		if (reqObjs.datetime.slice(0, -3) === fourthDayWeatherData) {
			fourthDayWeatherArr.push(reqObjs);
			return reqObjs;
		}
	});

	let presentDayTempArr = [...presentDayWeatherArr.map(obj => obj.temp)]; //массив температур за день
	let secontDayTempArr = [...secontDayWeatherArr.map(obj => obj.temp)]; //массив температур за день
	let thirdDayTemArr = [...thirdDayWeatherArr.map(obj => obj.temp)]; //массив температур за день
	let fourthDayTempArr = [...fourthDayWeatherArr.map(obj => obj.temp)]; //массив температур за день

	function findMaxTemp(dayTempArr) {

		return Math.max.apply(null, dayTempArr);
	};

	function findMinTemp(dayTempArr) {

		return Math.min.apply(null, dayTempArr);
	};

	let presentDayMAXtemp = findMaxTemp(presentDayTempArr);
	let secontDayMAXtemp = findMaxTemp(secontDayTempArr);
	let thirdDayMAXtemp = findMaxTemp(thirdDayTemArr);
	let fourthDayMAXtemp = findMaxTemp(fourthDayTempArr);

	let presentDayMINtemp = findMinTemp(presentDayTempArr);
	let secontDayMINtemp = findMinTemp(secontDayTempArr);
	let thirdDayMINtemp = findMinTemp(thirdDayTemArr);
	let fourthDayMINtemp = findMinTemp(fourthDayTempArr);

	console.log($responseObjArr);
	console.log(presentDayWeatherArr);
	console.log(secontDayWeatherArr);
	console.log(thirdDayWeatherArr);
	console.log(fourthDayWeatherArr);

	console.log(presentDayTempArr);
	console.log(secontDayTempArr);
	console.log(thirdDayTemArr);
	console.log(fourthDayTempArr);

	console.log("presentDayMAXtemp", presentDayMAXtemp);
	console.log("secontDayMAXtemp", secontDayMAXtemp);
	console.log("thirdDayMAXtemp", thirdDayMAXtemp);
	console.log("fourthDayMAXtemp", fourthDayMAXtemp);
	console.log("presentDayMINtemp", presentDayMINtemp);
	console.log("secontDayMINtemp", secontDayMINtemp);
	console.log("thirdDayMINtemp", thirdDayMINtemp);
	console.log("fourthDayMINtemp", fourthDayMINtemp);

	$("#presentDayMAXtemp").text(`${presentDayMAXtemp.toFixed(0)}`);
	$("#secontDayMAXtemp").text(`${secontDayMAXtemp.toFixed(0)}`);
	$("#thirdDayMAXtemp").text(`${thirdDayMAXtemp.toFixed(0)}`);
	$("#fourthDayMAXtemp").text(`${fourthDayMAXtemp.toFixed(0)}`);

	$("#presentDayMINtemp").text(`${presentDayMINtemp.toFixed(0)}`);
	$("#secontDayMINtemp").text(`${secontDayMINtemp.toFixed(0)}`);
	$("#thirdDayMINtemp").text(`${thirdDayMINtemp.toFixed(0)}`);
	$("#fourthDayMINtemp").text(`${fourthDayMINtemp.toFixed(0)}`);

	// https://www.weatherbit.io/static/img/icons/t01d.png

	let presentDayIcon = `https://www.weatherbit.io/static/img/icons/${presentDayWeatherArr[0].weather.icon}.png`; //адресс на картинку
	let secontDayIcon = `https://www.weatherbit.io/static/img/icons/${secontDayWeatherArr[4].weather.icon}.png`; //адресс на картинку
	let thirdDayIcon = `https://www.weatherbit.io/static/img/icons/${thirdDayWeatherArr[4].weather.icon}.png`; //адресс на картинку
	let fourthDayIcon = `https://www.weatherbit.io/static/img/icons/${fourthDayWeatherArr[4].weather.icon}.png`; //адресс на картинку

	$(".presentDayIcon").attr("src", presentDayIcon);
	$(".secontDayIcon").attr("src", secontDayIcon);
	$(".thirdDayIcon").attr("src", thirdDayIcon);
	$(".fourthDayIcon").attr("src", fourthDayIcon);


	$("#present-weather-degree").text(`${presentDayWeatherArr[0].app_temp.toFixed(0)}`);
	$("#secont-weather-degree").text(`${secontDayWeatherArr[4].app_temp.toFixed(0)}`);
	$("#third-weather-degree").text(`${thirdDayWeatherArr[4].app_temp.toFixed(0)}`);
	$("#fourth-weather-degree").text(`${fourthDayWeatherArr[4].app_temp.toFixed(0)}`);


	$("#presentDaywind").text(`${presentDayWeatherArr[0].wind_spd} m/c`);
	$("#secontDaywind").text(`${secontDayWeatherArr[4].wind_spd} m/c`);
	$("#thirdDaywind").text(`${thirdDayWeatherArr[4].wind_spd} m/c`);
	$("#fourthDaywind").text(`${fourthDayWeatherArr[4].wind_spd} m/c`);

	function getWindDirection(WeatherObj){

		var windDir = WeatherObj.wind_cdir;

		if (windDir === "N") { return "N"}
		if (windDir === "NE") { return "NE"}
		if (windDir === "E") { return "E"}
		if (windDir === "SE") { return "SE"}
		if (windDir === "S") { return "S"}
		if (windDir === "SW") { return "SW"}
		if (windDir === "W") { return "W"}
		if (windDir === "NW") { return "NW"}

		else return;
	}

	$("#present-wind-direction").addClass(`win-dir-${getWindDirection(presentDayWeatherArr[0])}`);
	$("#secont-wind-direction").addClass(`win-dir-${getWindDirection(secontDayWeatherArr[4])}`);
	$("#third-wind-direction").addClass(`win-dir-${getWindDirection(thirdDayWeatherArr[4])}`);
	$("#fourth-wind-direction").addClass(`win-dir-${getWindDirection(fourthDayWeatherArr[4])}`);

	function setWeekDay() {

		const dayOfWeek = [ "SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT", 
							"SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT" ];

		let presentDayOfWeek = data.getDay();

		// console.log(presentDayOfWeek);

		let last4days = dayOfWeek.slice(presentDayOfWeek, presentDayOfWeek + 4);

		// console.log(last4days);

		for( let i = 0; i < last4days.length; i++) {

			$(`#dayTitle${i}`).text(`${last4days[i]}`);
		}
	}

	setWeekDay();
}

otherStuff();

$("#city-list").on("change",() => {
	 otherStuff();
});

$("#byLocation").on("click", (ev) => {

	ev.preventDefault();


	function getPosition(position, err) {

		var latitude  = position.coords.latitude;
	    var longitude = position.coords.longitude;

	    let latLon = `?lat=${latitude}&lon=${longitude}`;

	    console.log(latLon);

		otherStuff(latLon);

	    return latLon;
	}

	function err(argument) {

		console.log("Unable to retrieve your location");

	}

	navigator.geolocation.getCurrentPosition(getPosition);

});