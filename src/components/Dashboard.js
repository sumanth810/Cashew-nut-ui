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

  // Fetch data when the date changes
  useEffect(() => {
    const fetchData = async (selectedDate) => {
      const formattedDate = format(selectedDate, "yyyy-MM-dd");
      const token = localStorage.getItem("jwtToken");

      try {
        const response = await fetch(
          `/api/cashew-process/batchdata?date=${formattedDate}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result[0] || null); // Handle case when there's no data
      } catch (error) {
        console.error("Error fetching data:", error);
        setData(null); // Set data to null in case of an error
      }
    };

    fetchData(date);
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
