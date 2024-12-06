import React, { useState, useEffect } from "react";
import axios from "axios";
import ActivityCalendar from "react-activity-calendar";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./CP.css";

// Registering chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const CP = () => {
  const [ratingData, setRatingData] = useState({ dates: [], ratings: [] });
  const [leetcodeData, setLeetcodeData] = useState([]);
  const [isLeetcodeDataLoaded, setIsLeetcodeDataLoaded] = useState(false);

  // Fetch Codeforces rating data
  useEffect(() => {
    axios
      .get("https://codeforces.com/api/user.rating?handle=thiru2905")
      .then((response) => {
        const ratingHistory = response.data.result;
        if (ratingHistory && ratingHistory.length > 0) {
          const dates = ratingHistory.map((item) => {
            const date = new Date(item.date * 1000);
            return `${date.getFullYear()}-${(date.getMonth() + 1)
              .toString()
              .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
          });
          const ratings = ratingHistory.map((item) => item.newRating);
          setRatingData({ dates, ratings });
        }
      })
      .catch((err) => console.error("Error fetching Codeforces data:", err));
  }, []);

  // Fetch LeetCode activity data
  useEffect(() => {
    axios
      .get("https://alfa-leetcode-api.herokuapp.com/api/v1/calendar/mthirumalai2905")
      .then((response) => {
        const data = response.data.calendarData;
        // Ensure the data is in the correct format: [{ date: "YYYY-MM-DD", count: n }]
        const formattedData = Object.entries(data).map(([date, count]) => ({
          date, // Format as "YYYY-MM-DD"
          count, // The count of activities on that date
        }));
        setLeetcodeData(formattedData);
        setIsLeetcodeDataLoaded(true);
      })
      .catch((err) => console.error("Error fetching LeetCode data:", err));
  }, []);

  // Function to get the background color based on rating
  const getRatingColor = (rating) => {
    if (rating < 1200) return "rgba(169, 169, 169, 0.2)";
    if (rating >= 1200 && rating < 1400) return "rgba(0, 255, 0, 0.2)";
    if (rating >= 1400 && rating < 1600) return "rgba(0, 255, 255, 0.2)";
    if (rating >= 1600 && rating < 1900) return "rgba(0, 0, 255, 0.2)";
    return "rgba(128, 0, 128, 0.2)";
  };

  // Chart.js data structure
  const chartData = {
    labels: ratingData.dates,
    datasets: [
      {
        label: "Rating",
        data: ratingData.ratings,
        fill: true,
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: ratingData.ratings.map(getRatingColor),
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="section">
      <h2>Codeforces and LeetCode Activity</h2>

      <div className="chart-container">
        <h3>Codeforces Rating Graph</h3>
        <Line data={chartData} />
      </div>

      <div className="heatmap-container">
        <h3>LeetCode Activity Heatmap</h3>
        {isLeetcodeDataLoaded ? (
          <ActivityCalendar
            data={leetcodeData} // Pass the formatted LeetCode data
            color="#0d6efd"
            labels={{
              legend: {
                less: "Less",
                more: "More",
              },
            }}
          />
        ) : (
          <p>Loading LeetCode data...</p>
        )}
      </div>
    </div>
  );
};

export default CP;
