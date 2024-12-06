import React, { useState, useEffect } from "react";
import axios from "axios"; // Axios for fetching data
import { Line } from 'react-chartjs-2'; // For rendering a line chart
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import './CP.css'; // Custom styles for your component

// Registering chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const CP = () => {
  const [ratingData, setRatingData] = useState({ dates: [], ratings: [] }); // State for the rating graph data

  useEffect(() => {
    // Fetching rating data from Codeforces API for user 'thiru2905'
    axios.get('https://codeforces.com/api/user.rating?handle=thiru2905')
      .then(response => {
        const ratingHistory = response.data.result;
        
        if (ratingHistory && ratingHistory.length > 0) {
          // Extracting the contest dates and ratings
          const dates = ratingHistory.map(item => {
            const date = new Date(item.date * 1000); // Convert timestamp to Date object
            const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`; // Format date as YYYY-MM-DD
            return formattedDate;
          });

          const ratings = ratingHistory.map(item => item.newRating);

          console.log('Dates:', dates);
          console.log('Ratings:', ratings);

          setRatingData({ dates, ratings }); // Set the data for chart
        } else {
          console.error("No rating history data found");
        }
      })
      .catch(err => console.error('Error fetching data:', err));
  }, []);

  // Check if the data is being set correctly
  console.log('Rating Data:', ratingData);

  // Function to determine background color based on rating
  const getRatingColor = (rating) => {
    if (rating < 1200) return 'rgba(169, 169, 169, 0.2)';  // Gray for ratings less than 1200
    if (rating >= 1200 && rating < 1400) return 'rgba(0, 255, 0, 0.2)';  // Green
    if (rating >= 1400 && rating < 1600) return 'rgba(0, 255, 255, 0.2)'; // Cyan
    if (rating >= 1600 && rating < 1900) return 'rgba(0, 0, 255, 0.2)'; // Blue
    return 'rgba(128, 0, 128, 0.2)';  // Purple for ratings 1900 and above
  };

  // Chart.js data structure
  const chartData = {
    labels: ratingData.dates, // Dates for x-axis
    datasets: [
      {
        label: 'Rating',
        data: ratingData.ratings, // Rating data for y-axis
        fill: true, // Fill area below the line
        borderColor: 'rgba(75,192,192,1)', // Line color
        backgroundColor: ratingData.ratings.map(getRatingColor), // Apply background colors dynamically
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="section">
      <h2>Codeforces Rating Graph</h2>
      <p>Rating changes of user "thiru2905" over time</p>

      {/* Line chart for Codeforces ratings */}
      <div className="chart-container">
        <Line data={chartData} />
      </div>
    </div>
  );
};

export default CP;
