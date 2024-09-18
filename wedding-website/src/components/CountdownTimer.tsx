// src/components/CountdownTimer.tsx

import React, { useState, useEffect } from 'react';

const CountdownTimer: React.FC = () => {
  const calculateTimeLeft = () => {
    const eventDate = new Date('2025-01-25T20:00:00'); // Fecha y hora del evento
    const now = new Date();
    const difference = eventDate.getTime() - now.getTime();
    let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-dancing mb-4 text-gray-800">Countdown to the Big Day!</h2>
      <div className="flex justify-center space-x-2">
        <div className="bg-blue-200 p-3 rounded-lg">
          <span className="text-3xl font-bold text-gray-800">{timeLeft.days}</span>
          <p className="text-sm text-gray-600">Days</p>
        </div>
        <div className="bg-blue-300 p-3 rounded-lg">
          <span className="text-3xl font-bold text-gray-800">{timeLeft.hours}</span>
          <p className="text-sm text-gray-600">Hours</p>
        </div>
        <div className="bg-blue-200 p-3 rounded-lg">
          <span className="text-3xl font-bold text-gray-800">{timeLeft.minutes}</span>
          <p className="text-sm text-gray-600">Minutes</p>
        </div>
        <div className="bg-blue-300 p-3 rounded-lg">
          <span className="text-3xl font-bold text-gray-800">{timeLeft.seconds}</span>
          <p className="text-sm text-gray-600">Seconds</p>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
