import "./App.css";
import React from "react";

// Pseudo code: User enters any number into any entry and doing so will automatically convert it. So entering a value into years will auto convert it

//Prompt 1 year in Chamber = 1 day on Earth

// Miliseconds to seconds = seconds * 1000
// Seconds to minutes  = seconds / 60
// Minutes to hours = minutes / 60 
// Hours to days = hours / 24  
// Days to weeks = days / 7
// Weeks to months = weeks / 4.35 
// Months to years = months / 12 
// Years to decade = years / 10
// Decade to Century = decade / 10
// Century to millenium =  century / 10

function Conversion(seconds, minutes, hours, days, weeks, months, years) {
  var minutes = seconds / 60;
  var seconds = minutes * 60;
  var hours = minutes / 60;
  console.log("Seconds " + seconds, "Minutes " + minutes, "Hours " + hours);
}


function App() {

  console.log("Hello World but Again")
  return (
    <div>
      <h1>Hello, WORLD!</h1>
      <Conversion/>
    </div>
  );
}


export default App;
