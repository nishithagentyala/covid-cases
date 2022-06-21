import React from "react";
import { FaHospitalUser } from "react-icons/fa";
const Confirmed = ({ confirm }) => {
  var api = confirm.detail;

  return (
    <div>
      <h2 className="title"></h2>
      Cases
      <FaHospitalUser className="icon" />
      {confirm.value}
    </div>
  );
};

export default Confirmed;
