import React, { useState } from "react";

export default function City(props) {
  let [temperature, setTemperature] = useState(props.temperature);

  function showFarehrenheit(event) {
    event.preventDefault();
    let fahrenheitTemperature = Math.round(props.temperature * (9 / 5) + 32);
    setTemperature(fahrenheitTemperature);
  }

  function showCelsius(event) {
    event.preventDefault();
    setTemperature(props.temperature);
  }

  return (
    <div class="City">
      It is {temperature}{" "}
      <a href="" onClick={showCelsius}>
        {" "}
        °C{" "}
      </a>{" "}
      |{" "}
      <a href="" onClick={showFarehrenheit}>
        {" "}
        °F{" "}
      </a>{" "}
      in {props.name}
    </div>
  );
}
