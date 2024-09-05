import React from "react";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import CloudIcon from "@mui/icons-material/Cloud";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Mainweather = ({ weatherData }) => {
  const temperatureCelcius = weatherData?.main?.temp || "N/A";
  const weatherDescription = weatherData?.weather?.[0]?.description || "N/A";
  const cityName = weatherData?.name || "N/A";
  const countryName = weatherData?.sys?.country || "Country not Available";
  const timeStamp = weatherData?.dt || null;

  const currentDate = timeStamp
    ? new Date(timeStamp * 1000).toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "short",
      })
    : "Date not available";

  const renderTemperatureIcon = () => {
    if (temperatureCelcius > 23) {
      return (
        <WbSunnyIcon
          style={{ marginLeft: "10px", fontSize: "3rem", color: "orange" }}
        />
      );
    } else if (temperatureCelcius < 10) {
      return (
        <AcUnitIcon
          style={{ marginLeft: "10px", fontSize: "3rem", color: "blue" }}
        />
      );
    } else {
      return (
        <CloudIcon
          style={{ marginLeft: "10px", fontSize: "3rem", color: "darkgray   " }}
        />
      );
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#9A7575",
        color: "white",
        borderRadius: "0.5rem",
        width: "160px",
        padding: "30px",
      }}
    >
      <div style={{ fontSize: "20px" }}>Now</div>
      <div
        style={{
          fontSize: "35px",
          display: "flex",
          alignItems: "center",
          fontWeight: "bold",
        }}
      >
        {temperatureCelcius}℃<div>{renderTemperatureIcon()}</div>
      </div>
      <div style={{ fontSize: "15px", marginTop: "8px", fontWeight: "50" }}>
        {" "}
        {weatherDescription}
      </div>
      <div style={{ marginTop: "1rem" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <CalendarMonthIcon />
          {currentDate}
        </div>
        <div
          style={{ marginTop: "4px", display: "flex", alignItems: "center" }}
        >
          <LocationOnIcon />
          {cityName}, {countryName}
        </div>
      </div>
    </div>
  );
};

export default Mainweather;
