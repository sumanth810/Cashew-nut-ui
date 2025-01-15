import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import Overview from "./Overview";
import Shelling from "./Shelling";
import Peeling from "./Peeling";
import Grading from "./Grading";
import DatePickerComponent from "./DatePickerComponent";

const Dashboard = () => {
  const [date, setDate] = useState(new Date()); // State to track the selected date
  const [data, setData] = useState(null); // State to store fetched data

  // Fetch data whenever the selected date changes
  useEffect(() => {
    const fetchData = async (selectedDate) => {
      const formattedDate = format(selectedDate, "yyyy-MM-dd"); // Format date for API
      const token = localStorage.getItem("jwtToken"); // Get JWT token for authentication

      try {
        const response = await fetch(
          `/api/cashew-process/batchdata?date=${formattedDate}`, // Fetch data for the selected date
          {
            headers: {
              Authorization: `Bearer ${token}`, // Pass token in headers
            },
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok"); // Handle HTTP errors
        }
        const result = await response.json();
        setData(result[0] || null); // Update state with fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
        setData(null); // Reset data on error
      }
    };

    fetchData(date); // Call fetch function when date changes
  }, [date]);

  return (
    <div className="p-5 flex flex-col space-y-5">
      <div className="flex justify-end items-center mb-5">
        <DatePickerComponent selected={date} onChange={setDate} />{" "}
        {/* Date picker */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
        <Overview data={data} /> {/* Overview of batch data */}
        <Shelling data={data} /> {/* Shelling-specific data */}
        <Peeling data={data} /> {/* Peeling-specific data */}
        <Grading data={data} /> {/* Grading-specific data */}
      </div>
    </div>
  );
};

export default Dashboard;
