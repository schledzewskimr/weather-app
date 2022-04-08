let weather = {
    
    apiKey: "21155f708c957d5fc264f08905db6419",

    zipCode: function(){
        this.fetchWeather(document.querySelector(".searchBar").value);
    },

    fetchWeather: function(zipCode){
        fetch(
            "http://api.openweathermap.org/geo/1.0/zip?zip="+zipCode+"&appid="+this.apiKey
        )
        .then((response) => response.json())
        .then((zipData) => {

            let name = zipData.name;
            let lat = zipData.lat;
            let lon = zipData.lon;

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
                document.querySelector(".temperature").innerText = temp+"°";
                document.querySelector(".tempHigh").innerText = "high: "+tempHigh+"°";
                document.querySelector(".tempLow").innerText = "low: "+tempLow+"°";
                document.querySelector(".icon").src="http://openweathermap.org/img/wn/"+icon+"@2x.png";
                document.querySelector(".description").innerText = description;
                document.querySelector(".humidity").innerText = "humidity: "+humidity+"%";
                document.querySelector(".wind").innerText = "wind: "+windSpeed+" mph "+getDirection();


                let tomorrowTempHigh = Math.round(data.daily[1].temp.max);
                document.querySelector(".tomorrowTempHigh").innerText = "high: "+tomorrowTempHigh+"°";
                let twoDaysTempHigh = Math.round(data.daily[2].temp.max);
                document.querySelector(".twoDaysTempHigh").innerText = "high: "+twoDaysTempHigh+"°";
                let threeDaysTempHigh = Math.round(data.daily[3].temp.max);
                document.querySelector(".threeDaysTempHigh").innerText = "high: "+threeDaysTempHigh+"°";
                let tomorrowTempLow = Math.round(data.daily[1].temp.min);
                document.querySelector(".tomorrowTempLow").innerText = "low: "+tomorrowTempLow+"°";
                let twoDaysTempLow = Math.round(data.daily[2].temp.min);
                document.querySelector(".twoDaysTempLow").innerText = "low: " +twoDaysTempLow+"°";
                let threeDaysTempLow = Math.round(data.daily[3].temp.min);
                document.querySelector(".threeDaysTempLow").innerText = "low: " +threeDaysTempLow+"°";
                let tomorrowIcon = data.daily[1].weather[0].icon;
                let twoDaysIcon = data.daily[2].weather[0].icon;
                let threeDaysIcon = data.daily[3].weather[0].icon;
                document.querySelector(".tomorrowIcon").src="http://openweathermap.org/img/wn/"+tomorrowIcon+".png";
                document.querySelector(".twoDaysIcon").src="http://openweathermap.org/img/wn/"+twoDaysIcon+".png";
                document.querySelector(".threeDaysIcon").src="http://openweathermap.org/img/wn/"+threeDaysIcon+".png";

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
            })
        })
    }
}

document.querySelector(".searchButton").addEventListener("click",function(){
    weather.zipCode();
    document.querySelector(".searchBar").value=""
})

document.querySelector(".searchBar").addEventListener("keyup", function(event){
    if(event.key == "Enter"){
        weather.zipCode();
        document.querySelector(".searchBar").value=""
    }
})
