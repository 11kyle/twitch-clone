import { useEffect, useState } from "react";

export const useDate = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setDate(new Date()), 1000);
        
        return function cleanup() {
            clearInterval(timer);
        }
    });

    return [date];
}

// month, day, year, hours, minutes, seconds

export const useCountdown = (targetDate = new Date("Jan 5, 2024 15:37:25").getTime()) => {
  // Initialize state
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Update the count down every 1 second
    const tick = setInterval(() => {
      // Get today's date and time
      const now = new Date().getTime();

      // Find the distance between
      const distance = targetDate - now;

      // Time calculations for days, hours, minutes and seconds
      setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((distance % (1000 * 60)) / 1000));

      if (distance < 0) {
        clearInterval(tick);
        // Update element here (with "EXPIRED" text or something else)
      }
    }, 1000);

    return function cleanup() {
      clearInterval(tick);
    }
  
  });

  return [days, hours, minutes, seconds];
}
