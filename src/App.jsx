import "./App.css";
import Navbar from "../src/components/Navbar";
import { useEffect, useState } from "react";
import Mainweather from "./components/Mainweather";
import Todayhighlights from "./components/Todayhighlights";

function App() {
  const [weatherData, setweatherData] = useState(null);
  const [city, setcity] = useState("Colombo");
  const [airQualityData, setAirQualityData] = useState(null);

  useEffect(() => {
    fetchweatherData(city);
  }, [city]);

  const fetchAirQualityData = (lat, lon) => {
    const API_KEY = "06a6c752587c3649346534946080afc5";
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`
      )
      .then((response) => {
        setAirQualityData(response.data.list[0]);
      })
      .catch((error) =>
        console.error("Error fetching the air quality data:", error)
      );
  };

  const fetchweatherData = () => {
    const API_KEY = "06a6c752587c3649346534946080afc5";
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        setweatherData(data);
        console.log(JSON.stringify(data));
        fetchAirQualityData(data.coord.lat, data.coord.lon);
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
          )
          .then((response) => {
            setFiveDayForecast(response.data);
          })
          .catch((error) =>
            console.error("Error fetching the 5-day forecast data:", error)
          );
      })
      .catch((error) =>
        console.error("Error fetching the weather data:", error)
      );
  };

  const handleSearch = (searchCity) => {
    setcity(searchCity);
  };

  return (
    <>
      <Navbar onSearch={handleSearch} />

      {weatherData && (
        <div style={{ display: "flex", padding: "30px", gap: "20px" }}>
          <div style={{ flex: "1", marginRight: "10px" }}>
            <Mainweather weatherData={weatherData} />
          </div>
          <div
            style={{
              display: "flex",
              flexDirectionG: "column",
              flex: "0.5",
              gap: "20px",
            }}
          >
            <Todayhighlights
              weatherData={weatherData}
              airQualityData={airQualityData}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
