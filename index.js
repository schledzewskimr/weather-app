let weather = {
    
    apiKey: "21155f708c957d5fc264f08905db6419",

    zipCode: function(){
        this.fetchWeather(document.querySelector(".searchBar").value);
    },

    cityWeather: function(){
        this.cityFetchWeather(document.querySelector(".searchBar").value);
    },

    cityFetchWeather:function(cityName){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid="+this.apiKey+"&units=imperial"
        )
        .then((response) => response.json())
        .then((data) => {
            let lat = data.coord.lat;
            let lon = data.coord.lon;
            let cityName = data.name;
            
            const cb = document.querySelector('.units');
            if(cb.checked){
                return fetch(
                    "https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&appid="+this.apiKey+"&units=imperial"
                )
                .then((response) => response.json())
                .then((data) => {
                    const date = new Date().toLocaleDateString('en-us', { weekday:"short", month:"short", day:"numeric", hour:"numeric", minute:"numeric"})

                    let temp = Math.round(data.current.temp);
                    let description = data.current.weather[0].description;
                    let icon = data.current.weather[0].icon;
                    let tempHigh = Math.round(data.daily[0].temp.max);
                    let tempLow = Math.round(data.daily[0].temp.min);
                    let humidity = data.current.humidity;
                    let windSpeed = Math.round(data.current.wind_speed);
                    let windDeg = data.current.wind_deg;
                    var directions = ["north", "north-east", "east", "south-east", "south", "south-west", "west", "north-west"]
                    function getDirection() {
                        let direction = Math.round(((windDeg %= 360) < 0 ? windDeg + 360 : windDeg) / 45) % 8
                        return directions[direction]
                    }
                    document.querySelector(".date").innerText = date;
                    document.querySelector(".city").innerText = cityName;
                    document.querySelector(".temperature").innerText = temp+"??";
                    document.querySelector(".tempHigh").innerText = "high: "+tempHigh+"??";
                    document.querySelector(".tempLow").innerText = "low: "+tempLow+"??";
                    document.querySelector(".icon").src="https://openweathermap.org/img/wn/"+icon+"@2x.png";
                    document.querySelector(".description").innerText = description;
                    document.querySelector(".humidity").innerText = "humidity: "+humidity+"%";
                    document.querySelector(".wind").innerText = "wind: "+windSpeed+" mph "+getDirection();

                    let tomorrowTempHigh = Math.round(data.daily[1].temp.max);
                    document.querySelector(".tomorrowTempHigh").innerText = "high: "+tomorrowTempHigh+"??";
                    let twoDaysTempHigh = Math.round(data.daily[2].temp.max);
                    document.querySelector(".twoDaysTempHigh").innerText = "high: "+twoDaysTempHigh+"??";
                    let threeDaysTempHigh = Math.round(data.daily[3].temp.max);
                    document.querySelector(".threeDaysTempHigh").innerText = "high: "+threeDaysTempHigh+"??";
                    let fourDaysTempHigh = Math.round(data.daily[4].temp.max);
                    document.querySelector(".fourDaysTempHigh").innerText = "high: "+fourDaysTempHigh+"??";
                    let fiveDaysTempHigh = Math.round(data.daily[5].temp.max);
                    document.querySelector(".fiveDaysTempHigh").innerText = "high: "+fiveDaysTempHigh+"??";
                    let sixDaysTempHigh = Math.round(data.daily[6].temp.max);
                    document.querySelector(".sixDaysTempHigh").innerText = "high: "+sixDaysTempHigh+"??";
                    
                    let tomorrowTempLow = Math.round(data.daily[1].temp.min);
                    document.querySelector(".tomorrowTempLow").innerText = "low: "+tomorrowTempLow+"??";
                    let twoDaysTempLow = Math.round(data.daily[2].temp.min);
                    document.querySelector(".twoDaysTempLow").innerText = "low: " +twoDaysTempLow+"??";
                    let threeDaysTempLow = Math.round(data.daily[3].temp.min);
                    document.querySelector(".threeDaysTempLow").innerText = "low: " +threeDaysTempLow+"??";
                    let fourDaysTempLow = Math.round(data.daily[4].temp.min);
                    document.querySelector(".fourDaysTempLow").innerText = "high: "+fourDaysTempLow+"??";
                    let fiveDaysTempLow = Math.round(data.daily[5].temp.min);
                    document.querySelector(".fiveDaysTempLow").innerText = "high: "+fiveDaysTempLow+"??";
                    let sixDaysTempLow = Math.round(data.daily[6].temp.min);
                    document.querySelector(".sixDaysTempLow").innerText = "high: "+sixDaysTempLow+"??";

                    let tomorrowIcon = data.daily[1].weather[0].icon;
                    let twoDaysIcon = data.daily[2].weather[0].icon;
                    let threeDaysIcon = data.daily[3].weather[0].icon;
                    let fourDaysIcon = data.daily[4].weather[0].icon;
                    let fiveDaysIcon = data.daily[5].weather[0].icon;
                    let sixDaysIcon = data.daily[6].weather[0].icon;

                    document.querySelector(".tomorrowIcon").src="https://openweathermap.org/img/wn/"+tomorrowIcon+".png";
                    document.querySelector(".twoDaysIcon").src="https://openweathermap.org/img/wn/"+twoDaysIcon+".png";
                    document.querySelector(".threeDaysIcon").src="https://openweathermap.org/img/wn/"+threeDaysIcon+".png";
                    document.querySelector(".fourDaysIcon").src="https://openweathermap.org/img/wn/"+fourDaysIcon+".png"
                    document.querySelector(".fiveDaysIcon").src="https://openweathermap.org/img/wn/"+fiveDaysIcon+".png"
                    document.querySelector(".sixDaysIcon").src="https://openweathermap.org/img/wn/"+sixDaysIcon+".png"

                    let tomorrowDate = new Date();
                    tomorrowDate.setDate(new Date().getDate() + 1);
                    let weekday1=tomorrowDate.toLocaleDateString('en-us', { weekday:"short"});
                    document.querySelector(".weekday1").innerText=weekday1;

                    let twoDaysDate = new Date();
                    twoDaysDate.setDate(new Date().getDate() + 2);
                    let weekday2=twoDaysDate.toLocaleDateString('en-us', { weekday:"short"});
                    document.querySelector(".weekday2").innerText=weekday2;

                    let threeDaysDate = new Date();
                    threeDaysDate.setDate(new Date().getDate() + 3);
                    let weekday3=threeDaysDate.toLocaleDateString('en-us', { weekday:"short"});
                    document.querySelector(".weekday3").innerText=weekday3;

                    let fourDaysDate = new Date();
                    fourDaysDate.setDate(new Date().getDate() + 4);
                    let weekday4=fourDaysDate.toLocaleDateString('en-us', { weekday:"short"});
                    document.querySelector(".weekday4").innerText=weekday4;

                    let fiveDaysDate = new Date();
                    fiveDaysDate.setDate(new Date().getDate() + 5);
                    let weekday5=fiveDaysDate.toLocaleDateString('en-us', { weekday:"short"});
                    document.querySelector(".weekday5").innerText=weekday5;

                    let sixDaysDate = new Date();
                    sixDaysDate.setDate(new Date().getDate() + 6);
                    let weekday6=sixDaysDate.toLocaleDateString('en-us', { weekday:"short"});
                    document.querySelector(".weekday6").innerText=weekday6;                })
            }
            else{
                return fetch(
                    "https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&appid="+this.apiKey+"&units=metric"
                )
                .then((response) => response.json())
                .then((data) => {

                    const date = new Date().toLocaleDateString('en-us', { weekday:"short", month:"short", day:"numeric", hour:"numeric", minute:"numeric"})

                    let temp = Math.round(data.current.temp);
                    let description = data.current.weather[0].description;
                    let icon = data.current.weather[0].icon;
                    let tempHigh = Math.round(data.daily[0].temp.max);
                    let tempLow = Math.round(data.daily[0].temp.min);
                    let humidity = data.current.humidity;
                    let windSpeed = Math.round((data.current.wind_speed)*2.2);
                    let windDeg = data.current.wind_deg;
                    var directions = ["north", "north-east", "east", "south-east", "south", "south-west", "west", "north-west"]
                    function getDirection() {
                        let direction = Math.round(((windDeg %= 360) < 0 ? windDeg + 360 : windDeg) / 45) % 8
                        return directions[direction]
                    }
                    document.querySelector(".date").innerText = date;
                    document.querySelector(".city").innerText = cityName;
                    document.querySelector(".temperature").innerText = temp+"??";
                    document.querySelector(".tempHigh").innerText = "high: "+tempHigh+"??";
                    document.querySelector(".tempLow").innerText = "low: "+tempLow+"??";
                    document.querySelector(".icon").src="https://openweathermap.org/img/wn/"+icon+"@2x.png";
                    document.querySelector(".description").innerText = description;
                    document.querySelector(".humidity").innerText = "humidity: "+humidity+"%";
                    document.querySelector(".wind").innerText = "wind: "+windSpeed+" mph "+getDirection();

                    let tomorrowTempHigh = Math.round(data.daily[1].temp.max);
                    document.querySelector(".tomorrowTempHigh").innerText = "high: "+tomorrowTempHigh+"??";
                    let twoDaysTempHigh = Math.round(data.daily[2].temp.max);
                    document.querySelector(".twoDaysTempHigh").innerText = "high: "+twoDaysTempHigh+"??";
                    let threeDaysTempHigh = Math.round(data.daily[3].temp.max);
                    document.querySelector(".threeDaysTempHigh").innerText = "high: "+threeDaysTempHigh+"??";
                    let fourDaysTempHigh = Math.round(data.daily[4].temp.max);
                    document.querySelector(".fourDaysTempHigh").innerText = "high: "+fourDaysTempHigh+"??";
                    let fiveDaysTempHigh = Math.round(data.daily[5].temp.max);
                    document.querySelector(".fiveDaysTempHigh").innerText = "high: "+fiveDaysTempHigh+"??";
                    let sixDaysTempHigh = Math.round(data.daily[6].temp.max);
                    document.querySelector(".sixDaysTempHigh").innerText = "high: "+sixDaysTempHigh+"??";
                    
                    let tomorrowTempLow = Math.round(data.daily[1].temp.min);
                    document.querySelector(".tomorrowTempLow").innerText = "low: "+tomorrowTempLow+"??";
                    let twoDaysTempLow = Math.round(data.daily[2].temp.min);
                    document.querySelector(".twoDaysTempLow").innerText = "low: " +twoDaysTempLow+"??";
                    let threeDaysTempLow = Math.round(data.daily[3].temp.min);
                    document.querySelector(".threeDaysTempLow").innerText = "low: " +threeDaysTempLow+"??";
                    let fourDaysTempLow = Math.round(data.daily[4].temp.min);
                    document.querySelector(".fourDaysTempLow").innerText = "high: "+fourDaysTempLow+"??";
                    let fiveDaysTempLow = Math.round(data.daily[5].temp.min);
                    document.querySelector(".fiveDaysTempLow").innerText = "high: "+fiveDaysTempLow+"??";
                    let sixDaysTempLow = Math.round(data.daily[6].temp.min);
                    document.querySelector(".sixDaysTempLow").innerText = "high: "+sixDaysTempLow+"??";

                    let tomorrowIcon = data.daily[1].weather[0].icon;
                    let twoDaysIcon = data.daily[2].weather[0].icon;
                    let threeDaysIcon = data.daily[3].weather[0].icon;
                    let fourDaysIcon = data.daily[4].weather[0].icon;
                    let fiveDaysIcon = data.daily[5].weather[0].icon;
                    let sixDaysIcon = data.daily[6].weather[0].icon;

                    document.querySelector(".tomorrowIcon").src="https://openweathermap.org/img/wn/"+tomorrowIcon+".png";
                    document.querySelector(".twoDaysIcon").src="https://openweathermap.org/img/wn/"+twoDaysIcon+".png";
                    document.querySelector(".threeDaysIcon").src="https://openweathermap.org/img/wn/"+threeDaysIcon+".png";
                    document.querySelector(".fourDaysIcon").src="https://openweathermap.org/img/wn/"+fourDaysIcon+".png"
                    document.querySelector(".fiveDaysIcon").src="https://openweathermap.org/img/wn/"+fiveDaysIcon+".png"
                    document.querySelector(".sixDaysIcon").src="https://openweathermap.org/img/wn/"+sixDaysIcon+".png"

                    let tomorrowDate = new Date();
                    tomorrowDate.setDate(new Date().getDate() + 1);
                    let weekday1=tomorrowDate.toLocaleDateString('en-us', { weekday:"short"});
                    document.querySelector(".weekday1").innerText=weekday1;

                    let twoDaysDate = new Date();
                    twoDaysDate.setDate(new Date().getDate() + 2);
                    let weekday2=twoDaysDate.toLocaleDateString('en-us', { weekday:"short"});
                    document.querySelector(".weekday2").innerText=weekday2;

                    let threeDaysDate = new Date();
                    threeDaysDate.setDate(new Date().getDate() + 3);
                    let weekday3=threeDaysDate.toLocaleDateString('en-us', { weekday:"short"});
                    document.querySelector(".weekday3").innerText=weekday3;

                    let fourDaysDate = new Date();
                    fourDaysDate.setDate(new Date().getDate() + 4);
                    let weekday4=fourDaysDate.toLocaleDateString('en-us', { weekday:"short"});
                    document.querySelector(".weekday4").innerText=weekday4;

                    let fiveDaysDate = new Date();
                    fiveDaysDate.setDate(new Date().getDate() + 5);
                    let weekday5=fiveDaysDate.toLocaleDateString('en-us', { weekday:"short"});
                    document.querySelector(".weekday5").innerText=weekday5;

                    let sixDaysDate = new Date();
                    sixDaysDate.setDate(new Date().getDate() + 6);
                    let weekday6=sixDaysDate.toLocaleDateString('en-us', { weekday:"short"});
                    document.querySelector(".weekday6").innerText=weekday6;
                })
            }
        })
    },

    fetchWeather: function(zipCode){
        fetch(
            "https://api.openweathermap.org/geo/1.0/zip?zip="+zipCode+"&appid="+this.apiKey
        )
        .then((response) => response.json())
        .then((zipData) => {

            let name = zipData.name;
            let lat = zipData.lat;
            let lon = zipData.lon;

            const cb = document.querySelector('.units');
            
            if(cb.checked){

                return fetch(
                    "https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&appid="+this.apiKey+"&units=imperial"
                )
                .then((response) => response.json())
                .then((data) => {

                    const date = new Date().toLocaleDateString('en-us', { weekday:"short", month:"short", day:"numeric", hour:"numeric", minute:"numeric"})

                    let temp = Math.round(data.current.temp);
                    let description = data.current.weather[0].description;
                    let icon = data.current.weather[0].icon;
                    let tempHigh = Math.round(data.daily[0].temp.max);
                    let tempLow = Math.round(data.daily[0].temp.min);
                    let humidity = data.current.humidity;
                    let windSpeed = Math.round(data.current.wind_speed);
                    let windDeg = data.current.wind_deg;
                    var directions = ["north", "north-east", "east", "south-east", "south", "south-west", "west", "north-west"]
                    function getDirection() {
                        let direction = Math.round(((windDeg %= 360) < 0 ? windDeg + 360 : windDeg) / 45) % 8
                        return directions[direction]
                    }
                    document.querySelector(".date").innerText = date;
                    document.querySelector(".city").innerText = name;
                    document.querySelector(".temperature").innerText = temp+"??";
                    document.querySelector(".tempHigh").innerText = "high: "+tempHigh+"??";
                    document.querySelector(".tempLow").innerText = "low: "+tempLow+"??";
                    document.querySelector(".icon").src="https://openweathermap.org/img/wn/"+icon+"@2x.png";
                    document.querySelector(".description").innerText = description;
                    document.querySelector(".humidity").innerText = "humidity: "+humidity+"%";
                    document.querySelector(".wind").innerText = "wind: "+windSpeed+" mph "+getDirection();

                    let tomorrowTempHigh = Math.round(data.daily[1].temp.max);
                    document.querySelector(".tomorrowTempHigh").innerText = "high: "+tomorrowTempHigh+"??";
                    let twoDaysTempHigh = Math.round(data.daily[2].temp.max);
                    document.querySelector(".twoDaysTempHigh").innerText = "high: "+twoDaysTempHigh+"??";
                    let threeDaysTempHigh = Math.round(data.daily[3].temp.max);
                    document.querySelector(".threeDaysTempHigh").innerText = "high: "+threeDaysTempHigh+"??";
                    let fourDaysTempHigh = Math.round(data.daily[4].temp.max);
                    document.querySelector(".fourDaysTempHigh").innerText = "high: "+fourDaysTempHigh+"??";
                    let fiveDaysTempHigh = Math.round(data.daily[5].temp.max);
                    document.querySelector(".fiveDaysTempHigh").innerText = "high: "+fiveDaysTempHigh+"??";
                    let sixDaysTempHigh = Math.round(data.daily[6].temp.max);
                    document.querySelector(".sixDaysTempHigh").innerText = "high: "+sixDaysTempHigh+"??";
                    
                    let tomorrowTempLow = Math.round(data.daily[1].temp.min);
                    document.querySelector(".tomorrowTempLow").innerText = "low: "+tomorrowTempLow+"??";
                    let twoDaysTempLow = Math.round(data.daily[2].temp.min);
                    document.querySelector(".twoDaysTempLow").innerText = "low: " +twoDaysTempLow+"??";
                    let threeDaysTempLow = Math.round(data.daily[3].temp.min);
                    document.querySelector(".threeDaysTempLow").innerText = "low: " +threeDaysTempLow+"??";
                    let fourDaysTempLow = Math.round(data.daily[4].temp.min);
                    document.querySelector(".fourDaysTempLow").innerText = "high: "+fourDaysTempLow+"??";
                    let fiveDaysTempLow = Math.round(data.daily[5].temp.min);
                    document.querySelector(".fiveDaysTempLow").innerText = "high: "+fiveDaysTempLow+"??";
                    let sixDaysTempLow = Math.round(data.daily[6].temp.min);
                    document.querySelector(".sixDaysTempLow").innerText = "high: "+sixDaysTempLow+"??";

                    let tomorrowIcon = data.daily[1].weather[0].icon;
                    let twoDaysIcon = data.daily[2].weather[0].icon;
                    let threeDaysIcon = data.daily[3].weather[0].icon;
                    let fourDaysIcon = data.daily[4].weather[0].icon;
                    let fiveDaysIcon = data.daily[5].weather[0].icon;
                    let sixDaysIcon = data.daily[6].weather[0].icon;

                    document.querySelector(".tomorrowIcon").src="https://openweathermap.org/img/wn/"+tomorrowIcon+".png";
                    document.querySelector(".twoDaysIcon").src="https://openweathermap.org/img/wn/"+twoDaysIcon+".png";
                    document.querySelector(".threeDaysIcon").src="https://openweathermap.org/img/wn/"+threeDaysIcon+".png";
                    document.querySelector(".fourDaysIcon").src="https://openweathermap.org/img/wn/"+fourDaysIcon+".png"
                    document.querySelector(".fiveDaysIcon").src="https://openweathermap.org/img/wn/"+fiveDaysIcon+".png"
                    document.querySelector(".sixDaysIcon").src="https://openweathermap.org/img/wn/"+sixDaysIcon+".png"

                    let tomorrowDate = new Date();
                    tomorrowDate.setDate(new Date().getDate() + 1);
                    let weekday1=tomorrowDate.toLocaleDateString('en-us', { weekday:"short"});
                    document.querySelector(".weekday1").innerText=weekday1;

                    let twoDaysDate = new Date();
                    twoDaysDate.setDate(new Date().getDate() + 2);
                    let weekday2=twoDaysDate.toLocaleDateString('en-us', { weekday:"short"});
                    document.querySelector(".weekday2").innerText=weekday2;

                    let threeDaysDate = new Date();
                    threeDaysDate.setDate(new Date().getDate() + 3);
                    let weekday3=threeDaysDate.toLocaleDateString('en-us', { weekday:"short"});
                    document.querySelector(".weekday3").innerText=weekday3;

                    let fourDaysDate = new Date();
                    fourDaysDate.setDate(new Date().getDate() + 4);
                    let weekday4=fourDaysDate.toLocaleDateString('en-us', { weekday:"short"});
                    document.querySelector(".weekday4").innerText=weekday4;

                    let fiveDaysDate = new Date();
                    fiveDaysDate.setDate(new Date().getDate() + 5);
                    let weekday5=fiveDaysDate.toLocaleDateString('en-us', { weekday:"short"});
                    document.querySelector(".weekday5").innerText=weekday5;

                    let sixDaysDate = new Date();
                    sixDaysDate.setDate(new Date().getDate() + 6);
                    let weekday6=sixDaysDate.toLocaleDateString('en-us', { weekday:"short"});
                    document.querySelector(".weekday6").innerText=weekday6;                })
            }
            else{
                return fetch(
                    "https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&appid="+this.apiKey+"&units=metric"
                )
                .then((response) => response.json())
                .then((data) => {

                    const date = new Date().toLocaleDateString('en-us', { weekday:"short", month:"short", day:"numeric", hour:"numeric", minute:"numeric"})

                    let temp = Math.round(data.current.temp);
                    let description = data.current.weather[0].description;
                    let icon = data.current.weather[0].icon;
                    let tempHigh = Math.round(data.daily[0].temp.max);
                    let tempLow = Math.round(data.daily[0].temp.min);
                    let humidity = data.current.humidity;
                    let windSpeed = Math.round((data.current.wind_speed)*2.2);
                    let windDeg = data.current.wind_deg;
                    var directions = ["north", "north-east", "east", "south-east", "south", "south-west", "west", "north-west"]
                    function getDirection() {
                        let direction = Math.round(((windDeg %= 360) < 0 ? windDeg + 360 : windDeg) / 45) % 8
                        return directions[direction]
                    }

                    document.querySelector(".date").innerText = date;
                    document.querySelector(".city").innerText = name;
                    document.querySelector(".temperature").innerText = temp+"??";
                    document.querySelector(".tempHigh").innerText = "high: "+tempHigh+"??";
                    document.querySelector(".tempLow").innerText = "low: "+tempLow+"??";
                    document.querySelector(".icon").src="https://openweathermap.org/img/wn/"+icon+"@2x.png";
                    document.querySelector(".description").innerText = description;
                    document.querySelector(".humidity").innerText = "humidity: "+humidity+"%";
                    document.querySelector(".wind").innerText = "wind: "+windSpeed+" mph "+getDirection();

                    let tomorrowTempHigh = Math.round(data.daily[1].temp.max);
                    document.querySelector(".tomorrowTempHigh").innerText = "high: "+tomorrowTempHigh+"??";
                    let twoDaysTempHigh = Math.round(data.daily[2].temp.max);
                    document.querySelector(".twoDaysTempHigh").innerText = "high: "+twoDaysTempHigh+"??";
                    let threeDaysTempHigh = Math.round(data.daily[3].temp.max);
                    document.querySelector(".threeDaysTempHigh").innerText = "high: "+threeDaysTempHigh+"??";
                    let fourDaysTempHigh = Math.round(data.daily[4].temp.max);
                    document.querySelector(".fourDaysTempHigh").innerText = "high: "+fourDaysTempHigh+"??";
                    let fiveDaysTempHigh = Math.round(data.daily[5].temp.max);
                    document.querySelector(".fiveDaysTempHigh").innerText = "high: "+fiveDaysTempHigh+"??";
                    let sixDaysTempHigh = Math.round(data.daily[6].temp.max);
                    document.querySelector(".sixDaysTempHigh").innerText = "high: "+sixDaysTempHigh+"??";
                    
                    let tomorrowTempLow = Math.round(data.daily[1].temp.min);
                    document.querySelector(".tomorrowTempLow").innerText = "low: "+tomorrowTempLow+"??";
                    let twoDaysTempLow = Math.round(data.daily[2].temp.min);
                    document.querySelector(".twoDaysTempLow").innerText = "low: " +twoDaysTempLow+"??";
                    let threeDaysTempLow = Math.round(data.daily[3].temp.min);
                    document.querySelector(".threeDaysTempLow").innerText = "low: " +threeDaysTempLow+"??";
                    let fourDaysTempLow = Math.round(data.daily[4].temp.min);
                    document.querySelector(".fourDaysTempLow").innerText = "high: "+fourDaysTempLow+"??";
                    let fiveDaysTempLow = Math.round(data.daily[5].temp.min);
                    document.querySelector(".fiveDaysTempLow").innerText = "high: "+fiveDaysTempLow+"??";
                    let sixDaysTempLow = Math.round(data.daily[6].temp.min);
                    document.querySelector(".sixDaysTempLow").innerText = "high: "+sixDaysTempLow+"??";

                    let tomorrowIcon = data.daily[1].weather[0].icon;
                    let twoDaysIcon = data.daily[2].weather[0].icon;
                    let threeDaysIcon = data.daily[3].weather[0].icon;
                    let fourDaysIcon = data.daily[4].weather[0].icon;
                    let fiveDaysIcon = data.daily[5].weather[0].icon;
                    let sixDaysIcon = data.daily[6].weather[0].icon;

                    document.querySelector(".tomorrowIcon").src="https://openweathermap.org/img/wn/"+tomorrowIcon+".png";
                    document.querySelector(".twoDaysIcon").src="https://openweathermap.org/img/wn/"+twoDaysIcon+".png";
                    document.querySelector(".threeDaysIcon").src="https://openweathermap.org/img/wn/"+threeDaysIcon+".png";
                    document.querySelector(".fourDaysIcon").src="https://openweathermap.org/img/wn/"+fourDaysIcon+".png"
                    document.querySelector(".fiveDaysIcon").src="https://openweathermap.org/img/wn/"+fiveDaysIcon+".png"
                    document.querySelector(".sixDaysIcon").src="https://openweathermap.org/img/wn/"+sixDaysIcon+".png"

                    let tomorrowDate = new Date();
                    tomorrowDate.setDate(new Date().getDate() + 1);
                    let weekday1=tomorrowDate.toLocaleDateString('en-us', { weekday:"short"});
                    document.querySelector(".weekday1").innerText=weekday1;

                    let twoDaysDate = new Date();
                    twoDaysDate.setDate(new Date().getDate() + 2);
                    let weekday2=twoDaysDate.toLocaleDateString('en-us', { weekday:"short"});
                    document.querySelector(".weekday2").innerText=weekday2;

                    let threeDaysDate = new Date();
                    threeDaysDate.setDate(new Date().getDate() + 3);
                    let weekday3=threeDaysDate.toLocaleDateString('en-us', { weekday:"short"});
                    document.querySelector(".weekday3").innerText=weekday3;

                    let fourDaysDate = new Date();
                    fourDaysDate.setDate(new Date().getDate() + 4);
                    let weekday4=fourDaysDate.toLocaleDateString('en-us', { weekday:"short"});
                    document.querySelector(".weekday4").innerText=weekday4;

                    let fiveDaysDate = new Date();
                    fiveDaysDate.setDate(new Date().getDate() + 5);
                    let weekday5=fiveDaysDate.toLocaleDateString('en-us', { weekday:"short"});
                    document.querySelector(".weekday5").innerText=weekday5;

                    let sixDaysDate = new Date();
                    sixDaysDate.setDate(new Date().getDate() + 6);
                    let weekday6=sixDaysDate.toLocaleDateString('en-us', { weekday:"short"});
                    document.querySelector(".weekday6").innerText=weekday6;                })
            }
        })
    }
}

document.querySelector(".searchButton").addEventListener("click",function(){
    const searchRequest = document.querySelector(".searchBar").value;
    if(!isNaN(searchRequest)){
        weather.zipCode();
        document.querySelector(".weather").classList.add("visible");
        document.querySelector(".futureWeather").classList.add("visible");
        document.querySelector(".card").classList.add("visible");
    }
    else{
        weather.cityWeather();
        document.querySelector(".weather").classList.add("visible");
        document.querySelector(".futureWeather").classList.add("visible");
        document.querySelector(".card").classList.add("visible");
    }
})

document.querySelector(".searchBar").addEventListener("keyup", function(event){
    const searchRequest = document.querySelector(".searchBar").value;
    if(event.key == "Enter"){
        if(!isNaN(searchRequest)){
            weather.zipCode();
            document.querySelector(".weather").classList.add("visible");
            document.querySelector(".futureWeather").classList.add("visible");
            document.querySelector(".card").classList.add("visible");
        }
        else{
            weather.cityWeather();
            document.querySelector(".weather").classList.add("visible");
            document.querySelector(".futureWeather").classList.add("visible");
            document.querySelector(".card").classList.add("visible");
        }
    }
})

document.querySelector(".units").addEventListener("click", function(){
    const searchRequest = document.querySelector(".searchBar").value;
    if(!isNaN(searchRequest)){
        weather.zipCode();
    }
    else{
        weather.cityWeather();
    }
})