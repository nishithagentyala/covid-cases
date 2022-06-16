import React from "react";
import { GiLoveInjection } from "react-icons/gi";
import { BiError } from "react-icons/bi";
import { FaHospitalUser } from "react-icons/fa";
import { BiDonateHeart } from "react-icons/bi";
import "./Case.css";
const Case = ({ alldata, api }) => {
  //const vaccinated = alldata.vaccinated1 + alldata.vaccinated2;
  //  console.log(alldata.confirmed.detail);
  fetch(api)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });

  return (
    <div className="cases">
      <h2 className="title"></h2>
      Cases
      <FaHospitalUser className="icon" />
      {alldata}
    </div>
  );
};

export default Case;
