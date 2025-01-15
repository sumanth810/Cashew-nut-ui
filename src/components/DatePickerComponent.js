import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays, subDays } from "date-fns";

const DatePickerComponent = ({ selected, onChange }) => {
  // Navigate to the previous day
  const handlePreviousDay = () => {
    const newDate = subDays(selected, 1);
    onChange(newDate);
  };

  // Navigate to the next day
  const handleNextDay = () => {
    const newDate = addDays(selected, 1);
    onChange(newDate);
  };

  return (
    <div className="flex items-center space-x-4">
      {/* Button for previous day */}
      <button
        onClick={handlePreviousDay}
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Previous Day
      </button>
      {/* Date Picker component */}
      <DatePicker
        selected={selected}
        onChange={(date) => onChange(date)}
        className="border border-gray-300 rounded p-2"
      />
      {/* Button for next day */}
      <button
        onClick={handleNextDay}
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Next Day
      </button>
    </div>
  );
};

export default DatePickerComponent;
