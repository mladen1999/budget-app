import React from "react";
let newDate = new Date()
let date = newDate.getDate();
let month = newDate.getMonth() + 1;
let year = newDate.getFullYear();
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const Header = () => {
  return (
    <div className="header">
      <h1>Available Budget in {MONTHS[month]} {year}</h1>
    </div>
  );
};

export default Header;