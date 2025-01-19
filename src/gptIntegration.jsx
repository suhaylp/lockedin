import React, { useState } from 'react';

const SassyReminder = () => {
    const [message, setMessage] = useState('');

    const sassyMessages = [
        //generated using gpt
        "Oh, look who's avoiding LeetCode again... Your future job isn't going to apply itself!",
        "Haven't submitted any job applications? Are you secretly waiting for a recruiter to knock on your door?",
        "You know, practicing LeetCode might just be a good idea if you want that dream job. Just saying...",
        "Still no job apps or LeetCode? Are you trying to become a professional procrastinator?",
        "Time to stop slacking! LeetCode won't solve itself, and neither will your career!",
        "Seriously? Another day without a job app or LeetCode? Your dream job's not going to just appear!"
    ];

    const getSassyReminder = () => {
        const randomIndex = Math.floor(Math.random() * sassyMessages.length);
        setMessage(sassyMessages[randomIndex]);
    };

    return (
        <div>
            <button onClick={getSassyReminder}>Get a Sassy Reminder</button>
            {message && <div><strong>Sassy Reminder:</strong> {message}</div>}
        </div>
    );
};

export default SassyReminder;
