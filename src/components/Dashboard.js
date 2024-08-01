import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import Overview from "./Overview";
import Shelling from "./Shelling";
import Peeling from "./Peeling";
import Grading from "./Grading";
import DatePickerComponent from "./DatePickerComponent";

const defaultData = {
  todayIntake: 0,
  todayOutput: 0,
  shellingIntake: 0,
  shellingOutput: 0,
  peelingIntake: 0,
  peelingOutput: 0,
  gradingIntake: 0,
  whiteWholesOutput: 0,
  scorchedWholesOutput: 0,
  cashewFormsOutput: 0,
};

const Dashboard = () => {
  const [date, setDate] = useState(new Date());
  const [data, setData] = useState(defaultData);

  useEffect(() => {
    const formattedDate = format(date, "yyyy-MM-dd");
    fetch(`/api/cashew-process/batchdata?date=${formattedDate}`)
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setData(data[0]); // Assuming the API returns an array
        } else {
          setData(defaultData); // Set default values if no data
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setData(defaultData); // Set default values in case of an error
      });
  }, [date]);

  return (
    <div className="p-5 flex flex-col space-y-5">
      <div className="flex justify-end items-center mb-5">
        <DatePickerComponent selected={date} onChange={setDate} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
        <Overview data={data} />
        <Shelling data={data} />
        <Peeling data={data} />
        <Grading data={data} />
      </div>
    </div>
  );
};

export default Dashboard;
