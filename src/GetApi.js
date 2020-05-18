import React, { useEffect, useState } from "react"
import Weather from "./Weather"

const GetApi = () => {
    //const [longitude, setLongitude] = useState();
    const [weather, setWeather] = useState();
    const API_KEY = '894c0c1d03546d1843b5efd334d6e479';

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            getWeather(position.coords);
        },
            (error) => {
                console.log(error);
            }
        )
        const getWeather = ({ latitude, longitude }) => {
            fetch(`https://api.openweathermap.org/data/2.5/weather?&lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
                .then(response => response.json()) //json으로 변환
                .then(data => setWeather(data))
    
            console.log("Test", weather);
        }
    }, []);
    
    const isLoading = (weather == null);
    return (
        <div>
            {isLoading ? <h1>Weather</h1> :
                <Weather
                    location={weather.name}
                    weather={weather.weather[0].main}
                    temp={weather.main.temp}
                    key={weather.id}
                />
            }
        </div>
    );
}

export default GetApi;