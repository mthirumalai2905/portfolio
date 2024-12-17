import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ActivityCalendar from 'react-activity-calendar';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import ErrorBoundary from './ErrorBoundary';
import codechef from '../img/codechef.png';
import atcoders from '../img/atcoders.png';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

window.onerror = function (message, source, lineno, colno, error) {
  console.log(`%cError: ${message}`, "color: green; font-weight: bold;");
  return true;
};

window.addEventListener("unhandledrejection", function (event) {
  console.log(
    `%cUnhandled Promise Rejection: ${event.reason}`,
    "color: green; font-weight: bold;"
  );
});

function CP() {
  const [codeforcesData, setCodeforcesData] = useState({ dates: [], ratings: [] });
  const [leetcodeData, setLeetcodeData] = useState([]);
  const [leetcodeStats, setLeetcodeStats] = useState(null);
  const [codechefBadges, setCodechefBadges] = useState(null);
  const [atcoderUserStatus, setAtcoderUserStatus] = useState(null);
  const [isLeetcodeLoading, setIsLeetcodeLoading] = useState(true);
  const [hoveredDate, setHoveredDate] = useState(null);
  const [hoveredCount, setHoveredCount] = useState(null);

  useEffect(() => {
    async function fetchCodeforcesData() {
      try {
        const response = await axios.get('https://codeforces.com/api/user.rating?handle=thiru2905');
        const ratingHistory = response.data.result;

        if (ratingHistory?.length) {
          const dates = ratingHistory.map(item => {
            const date = new Date(item.ratingUpdateTimeSeconds * 1000);
            return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
          });
          const ratings = ratingHistory.map(item => item.newRating);
          setCodeforcesData({ dates, ratings });
        }
      } catch (error) {
        console.error('%cError fetching Codeforces data:', 'color: green;', error);
      }
    }

    fetchCodeforcesData();
  }, []);

  useEffect(() => {
    async function fetchLeetcodeData() {
      try {
        const response = await axios.get(
          'https://alfa-leetcode-api.onrender.com/userProfile/mthirumalai2905'
        );
        const calendar = response.data.submissionCalendar;

        const formattedData = Object.entries(calendar).map(([timestamp, count]) => {
          const date = new Date(parseInt(timestamp) * 1000).toISOString().split('T')[0];
          return {
            date,
            count,
            level: count > 20 ? 4 : count > 10 ? 3 : count > 5 ? 2 : count > 0 ? 1 : 0,
          };
        });

        setLeetcodeData(formattedData);
        
        // Fetching user stats
        const stats = response.data.userProfile;
        setLeetcodeStats({
          problemsSolved: stats.numSolved,
          easy: stats.easySolved,
          medium: stats.mediumSolved,
          hard: stats.hardSolved,
        });

      } catch (error) {
        console.error('%cError fetching LeetCode data:', 'color: green;', error);
      } finally {
        setIsLeetcodeLoading(false);
      }
    }

    fetchLeetcodeData();
  }, []);

  useEffect(() => {
    // Fetching CodeChef user badge (4-star)
    async function fetchCodechefData() {
      try {
        const response = await axios.get('https://api.codechef.com/users/mthirumalai2905');
        const badges = response.data.result.data[0].badges;
        const fourStarBadge = badges.find(badge => badge.name === '4 Star');
        setCodechefBadges(fourStarBadge ? fourStarBadge : null);
      } catch (error) {
        console.error('%cError fetching CodeChef data:', 'color: green;', error);
      }
    }

    fetchCodechefData();
  }, []);

  useEffect(() => {
    // Fetching AtCoder user status
    async function fetchAtcoderData() {
      try {
        const response = await axios.get(
          `https://atcoder.jp/users/thiru2905.json`
        );
        const userStatus = response.data;
        setAtcoderUserStatus(userStatus);
      } catch (error) {
        console.error('%cError fetching AtCoder data:', 'color: green;', error);
      }
    }

    fetchAtcoderData();
  }, []);

  const handleMouseEnter = (date, count) => {
    setHoveredDate(date);
    setHoveredCount(count);
  };

  const handleMouseLeave = () => {
    setHoveredDate(null);
    setHoveredCount(null);
  };

  const chartData = {
    labels: codeforcesData.dates,
    datasets: [
      {
        label: 'Rating',
        data: codeforcesData.ratings,
        fill: true,
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: codeforcesData.ratings.map(rating => {
          if (rating < 1200) return 'rgba(144, 238, 144, 0.2)';
          if (rating < 1400) return 'rgba(76, 175, 80, 0.2)';
          if (rating < 1600) return 'rgba(34, 139, 34, 0.2)';
          if (rating < 1900) return 'rgba(0, 128, 0, 0.2)';
          return 'rgba(0, 100, 0, 0.2)';
        }),
        tension: 0.1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Rating Progress' },
    },
    scales: {
      y: { beginAtZero: false },
    },
  };

  const explicitTheme = {
    light: ['#e8f5e9', '#c8e6c9', '#a5d6a7', '#81c784', '#66bb6a'],
    dark: ['#388e3c', '#2e7d32', '#1b5e20', '#004d40', '#015315'],
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
      

        <div className="space-y-8">
          {/* LeetCode Activity Heatmap */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              LeetCode Activity Heatmap
            </h2>
            {isLeetcodeLoading ? (
              <div className="flex justify-center items-center h-48">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-500" />
              </div>
            ) : (
              <ErrorBoundary>
                <ActivityCalendar
                  data={leetcodeData}
                  theme={explicitTheme}
                  color="#66bb6a"
                  hideDate
                  hideContribution
                  onMouseEnter={({ date, count }) => handleMouseEnter(date, count)}
                  onMouseLeave={handleMouseLeave}
                />
              </ErrorBoundary>
            )}
            {hoveredDate && hoveredCount && (
              <div className="mt-4 p-4 bg-white border border-gray-200 rounded-lg shadow">
                <p className="font-semibold text-gray-800">Activity on {hoveredDate}</p>
                <p className="text-gray-600">Submissions: {hoveredCount}</p>
              </div>
            )}
            {/* LeetCode Stats */}
            {leetcodeStats && (
              <div className="mt-4 p-4 bg-white border border-gray-200 rounded-lg shadow">
                <h3 className="text-xl font-semibold text-gray-800">LeetCode Stats</h3>
                <p className="text-gray-600">Problems Solved: {leetcodeStats.problemsSolved}</p>
                <p className="text-gray-600">Easy: {leetcodeStats.easy}</p>
                <p className="text-gray-600">Medium: {leetcodeStats.medium}</p>
                <p className="text-gray-600">Hard: {leetcodeStats.hard}</p>
              </div>
            )}
          </div>

          {/* Codeforces Chart */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Codeforces Rating Progress</h2>
            <Line data={chartData} options={chartOptions} />
          </div>

          {/* CodeChef Badge */}
          {codechefBadges && (
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">CodeChef Badges</h2>
              <p className="text-gray-600">Your 4-Star Badge: {codechefBadges.name}</p>
            </div>
          )}

          {/* AtCoder User Status */}
          {atcoderUserStatus && (
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">AtCoder User Status</h2>
              <p className="text-gray-600">User Status: {atcoderUserStatus.userStatus}</p>
            </div>
          )}


          
          
        </div>
      </div>
      <div className='remaining'>
          <div className='codechef'><img src={codechef} /></div>
          <div className='atcoders'><img src={atcoders} /></div>
          </div>
    </div>
  );
}

export default CP;
