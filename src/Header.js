import React from "react";
import { FaHeartbeat } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
const Header = ({ text, setText }) => {
  return (
    <div className="top-bar">
      <h1>
        <FaHeartbeat className="heart" />
        Coronavirus Case Dashboard
      </h1>
      <form>
        <input
          type="text"
          placeholder="Search"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <FiSearch
          className="search"
          onClick={() => {
            document.querySelector(".title").innerHTML = text;
            setText("");
          }}
        />
      </form>
    </div>
  );
};

export default Header;
