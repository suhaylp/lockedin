import axios from 'axios';
import React, { useEffect, useState } from 'react';

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
    <div>
      {/* Show full stats conditionally */}
      {showFullStats && (
        <>
          <p>Acceptance Rate: {stats.acceptanceRate}%</p>
          <p>Ranking: {stats.ranking}</p>
          <p>Contribution Points: {stats.contributionPoints}</p>
          <p>Reputation: {stats.reputation}</p>
        </>
      )}

      {/* Always show these stats */}
      <p>&#128293; Locked In Streak: 0 days</p>
      <p>&#x1F4BC; Job Applications Submitted: 0</p>
      <p>&#x1F4BB; Leetcode Questions Solved: {stats.totalSolved}</p>
    </div>
  );
};

export default LeetCodeStats;
