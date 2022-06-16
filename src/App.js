import { useState } from "react";
import { PieChart } from "react-minimal-pie-chart";
import Confirmed from "./api/Confirmed";
import "./index.css";
import Header from "./Header";
import Case from "./Case";
function App() {
  var confirmed;
  const [confirm, setconfirm] = useState("");
  const [country, setcountry] = useState("");
  const [text, setText] = useState("");
  fetch("https://api-covid19-tracker.herokuapp.com/india/state_wise")
    .then((res) => res.json())
    .then((data) => {
      setconfirm(data);
      setcountry(data);
      console.log(data);
    });

  return (
    <div className="App">
      <Header text={text} setText={setText} />
      <Confirmed />
      {/* <PieChart
        className="piechart"
        data={[
          {
            title: "Active",
            value: (alldata.confirmed * 100) / alldata.tested,
            color: "#FF1493",
          },
          {
            title: "Cases",
            value: (alldata.tested * 100) / population,
            color: "#FF69B4",
          },
          {
            title: "Deaths",
            value: (alldata.deceased * 100) / alldata.confirmed,
            color: "red",
          },
          {
            title: "Recovered",
            value: (alldata.recovered * 100) / alldata.confirmed,
            color: "green",
          },
          {
            title: "Vaccinated",
            value: (alldata.vaccinated1 * 100) / population,
            color: "mediumblue",
          },
        ]}
      />*/}
    </div>
  );
}

export default App;
