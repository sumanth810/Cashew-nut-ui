import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles.css";

const DatePickerComponent = ({ selected, onChange }) => {
  return (
    <DatePicker
      selected={selected}
      onChange={onChange}
      className="border border-gray-300 rounded p-2"
    />
  );
};

export default DatePickerComponent;
