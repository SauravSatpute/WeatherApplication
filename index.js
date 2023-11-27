const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '079a2d8494msh87cfb42efa0e8cep1410f3jsn75894f5b84e3',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};



let getWeather = (city) => {
    fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city, options)
    .then(response => response.json())
    .then(response => {
        console.log(response);
        let cloud_pct = response.cloud_pct;
        let feels_like = response.feels_like;
        let humidity = response.humidity;
        let max_temp = response.max_temp;
        let min_temp = response.min_temp;
        let sunrise = response.sunrise;
        let sunset = response.sunset;
        let temp = response.temp;
        let wind_degrees = response.wind_degrees;
        let wind_speed = response.wind_speed;
        
        $('#city').text(city);
        $("#cloud-pct").text(cloud_pct + "%");
        $('#feels-like').text(feels_like);
        $('#humidity').text(humidity);
        $('#max-temp').text(max_temp);
        $('#min-temp').text(min_temp);
        $('#sunrise').text(sunrise);
        $('#sunset').text(sunset);
        $('#temp').text(temp);
        $('#wind-degrees').text(wind_degrees + "°C");
        $('#wind-speed').text(wind_speed);




    })
    .catch(err => console.error(err));

}

getWeather("delhi");


$("#btnSubmit").click(function() {
    let city = $("input").val();
    isNumber = /\d/.test(city)
    if(isNumber) {
    $("main").hide();
    $("main").after("<iframe src='https://giphy.com/embed/14uQ3cOFteDaU' width='480' height='360' frameBorder='0' class='giphy-embed' allowFullScreen></iframe><p><a href='https://giphy.com/gifs/404-14uQ3cOFteDaU'>via GIPHY</a></p>");
    }else {
        $(".giphy-embed").hide();
        $('main').show();
        getWeather(city);
    }
})
