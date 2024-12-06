import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactCalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css"; // Optional: for default styling
import './CP.css'; // Add custom styles if needed

const CP = () => {
  const [heatmapData, setHeatmapData] = useState([]);

  // Fetch the user activity data (this is an example API URL)
  useEffect(() => {
    // Replace with actual LeetCode API to fetch submission/solved problem data
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`https://leetcode.com/${"mthirumalai2905"}/api/solved-problems`);
        // Example data structure: [{ date: '2024-12-01', count: 5 }, { date: '2024-12-02', count: 3 }, ...]
        const data = response.data.map(item => ({
          date: item.date,
          count: item.count,
        }));
        setHeatmapData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  // Format data to fit the format required by react-calendar-heatmap
  const formattedData = heatmapData.map(item => ({
    date: item.date,
    count: item.count,
  }));

  return (
    <div className="section">
      <h2>Competitive Programming</h2>
      <p>Content related to your competitive programming goes here.</p>

      <div className="heatmap-container">
        <h3>LeetCode Heatmap</h3>
        <ReactCalendarHeatmap
          startDate={new Date('2024-01-01')}
          endDate={new Date('2024-12-31')}
          values={formattedData}
          gutterSize={2}
          showMonthLabels={true}
          showWeekdayLabels={true}
          horizontal={false}
          classForValue={(value) => {
            if (!value) return "color-empty";
            return `color-gitlab-${value.count}`;
          }}
        />
      </div>
    </div>
  );
};

export default CP;
