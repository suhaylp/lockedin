import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './css/Index.css';

const LeetCodeStats = ({ showFullStats }) => { // Destructure showFullStats from props
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const username = "suhaylp";
  const url = `https://leetcode-stats-api.herokuapp.com/${username}`;
  
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        if (response.data.status === 'success') {
          setStats(response.data);
        } else {
          setError("Failed to retrieve stats.");
        }
      })
      .catch((err) => {
        setError("Error fetching data: " + err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [username]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div class="">
      {/* Show full leetcode stats conditionally */}
      {showFullStats && (
        <>
          <p>Acceptance Rate: {stats.acceptanceRate}%</p>
          <p>Ranking: {stats.ranking}</p>
          <p>Contribution Points: {stats.contributionPoints}</p>
          <p>Reputation: {stats.reputation}</p>
          <p>Leetcode Questions Solved: {stats.totalSolved}</p>
        </>
      )}

      {!(showFullStats) && (
        <>
          <p class="display-font font-semibold text-[#3097D8]">&#128293; DAYS LOCKED IN: 0</p>
          <p class="display-font font-semibold text-[#0268C8]">&#x1F4BC; JOBS APPLIED TO: 0</p>
          <p class="display-font font-semibold text-[#0A3370]">&#x1F4BB; LEETCODE SOLVED: {stats.totalSolved}</p>
        </>
      )}
        </div>
  );
};

export default LeetCodeStats;
