// DateSelector.js

import React, { useState, useRef } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";



const DateSelector = ({ selectedDate, onDateSelect, label }) => {
  const [startDate, setStartDate] = useState(null);
  const buttonRef = useRef(null);

  const handleDateSelect = (date) => {
    setStartDate(date);
    if (onDateSelect) {
      onDateSelect(date);
    }
    clickButtonAutomatically();
  };

  const clickButtonAutomatically = () => {
    if (buttonRef.current) {
      buttonRef.current.click();
    }
  };

  return (
   
      
      <div className="btn-group Datebtn-group">
        <button
          className="btn dropdown-toggle male-btn"
          type="button"
          id={`${label}Dropdown`}
          data-bs-toggle="dropdown"
          data-bs-auto-close="outside"
          aria-expanded="false"
        >
          <span>
            <i className="far fa-calendar-alt"></i>
          </span>
          {startDate ? startDate.format("YYYY-MM-DD") : "Select Date"}
          <span>
            <i className="fas fa-angle-down"></i>
          </span>
        </button>

        <ul
          className="dropdown-menu btnDrp-menu calender-top"
          aria-labelledby={`${label}Dropdown`}
        >
          <li className="calender-box">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar date={startDate} onChange={handleDateSelect} />
            </LocalizationProvider>
          </li>
        </ul>
      </div>
   
  );
};

export default DateSelector;
