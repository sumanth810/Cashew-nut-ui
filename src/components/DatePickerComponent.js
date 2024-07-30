// src/components/DatePickerComponent.js
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerComponent = ({ selectedDate, onDateChange }) => {
  return (
    <div className="date-header">
      <span>DATE:</span>
      <DatePicker
        selected={selectedDate}
        onChange={onDateChange}
        dateFormat="yyyy-MM-dd"
        className="date-picker"
      />
    </div>
  );
};

export default DatePickerComponent;
