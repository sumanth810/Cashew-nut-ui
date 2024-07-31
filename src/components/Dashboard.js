import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import Overview from "./Overview";
import Shelling from "./Shelling";
import Peeling from "./Peeling";
import Grading from "./Grading";
import DatePickerComponent from "./DatePickerComponent";

const Dashboard = () => {
  const [date, setDate] = useState(new Date());
  const [data, setData] = useState(null);

  useEffect(() => {
    const formattedDate = format(date, "yyyy-MM-dd");
    fetch(`/api/cashew-process/batchdata?date=${formattedDate}`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [date]);

  return (
    <div className="p-5">
      <div className="flex justify-end items-center mb-5">
        <DatePickerComponent selected={date} onChange={setDate} />
      </div>

      <div className="space-y-5">
        <Overview data={data} />
        <Shelling data={data} />
        <Peeling data={data} />
        <Grading data={data} />
      </div>
    </div>
  );
};

export default Dashboard;
