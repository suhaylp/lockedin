// import React from 'react';

// const LeetCodeStats = () => {
//   const username = "suhaylp"; // Replace with your LeetCode username
//   const theme = "light"; // Replace with your desired theme (e.g., "dark", "light")
//   const statsUrl = `https://leetcode-stats.vercel.app/api?username=${username}&theme=${theme}`;

//   return (
//     <div style={{ textAlign: 'center' }}>
//       <h2>My LeetCode Stats</h2>
//       <a href="https://github.com/JeremyTsaii/leetcode-stats" target="_blank" rel="noopener noreferrer">
//         <img src={statsUrl} alt={`${username}'s LeetCode Stats`} />
//       </a>
//     </div>
//   );
// };

// export default LeetCodeStats;

//import LeetCodeStats from './LeetCodeStats';

import axios from 'axios';
import React, { useEffect, useState } from 'react';

const LeetCodeStats = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const username = "suhaylp"; // Replace with your LeetCode username
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
      {/* <h2>LeetCode Stats for {username}</h2> */}
      <p>Leetcode Questions Solved: {stats.totalSolved}</p>
      {/* <p>Acceptance Rate: {stats.acceptanceRate}%</p> */}
      {/* <p>Ranking: {stats.ranking}</p> */}
      {/* <p>Contribution Points: {stats.contributionPoints}</p> */}
      {/* <p>Reputation: {stats.reputation}</p> */}
      {/* todo*/}
      <p>Job Applications Submitted: 0</p>
      <p>Locked In Streak: 0 days</p>
    </div>
  );
};

export default LeetCodeStats;
