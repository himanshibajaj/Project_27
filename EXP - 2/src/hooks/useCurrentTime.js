// src/hooks/useCurrentTime.js
import { useState, useEffect } from "react";

export default function useCurrentTime() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer); // cleanup
  }, []);

  return time;
}
