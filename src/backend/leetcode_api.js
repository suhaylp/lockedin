const axios = require('axios');

const username = "suhaylp";
const url = `https://leetcode-stats-api.herokuapp.com/${username}`;

axios.get(url)
    .then(response => {
        const data = response.data;
        if (data.status === 'success') {
            console.log("LeetCode Stats:");
            console.log(`Total Solved: ${data.totalSolved}`);
            console.log(`Acceptance Rate: ${data.acceptanceRate}%`);
            console.log(`Ranking: ${data.ranking}`);
            console.log(`Contribution Points: ${data.contributionPoints}`);
            console.log(`Reputation: ${data.reputation}`);
        } else {
            console.log("Failed to retrieve stats.");
        }
    })
    .catch(error => {
        console.log("Error fetching data:", error);
    });
