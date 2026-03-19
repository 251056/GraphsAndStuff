import { useState, useEffect } from "react";
import {Image} from 'react-bootstrap';

import clock from "../assets/clockBody.png";
import hourHand from "../assets/hourHand.png";
import minuteHand from "../assets/minuteHand.png";

function ClockGame() {
  const [hourRotation, setHourRotation] = useState(0);
  const [minuteRotation, setMinuteRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [tries, setTries] = useState(3);

  useEffect(() => {
    if (!spinning) return;

    const interval = setInterval(() => {
      setHourRotation(prev => prev + 5);
      setMinuteRotation(prev => prev + 15);
    }, 50);

    return () => clearInterval(interval);
  }, [spinning]);

  const stopClock = () => {
    setSpinning(false);
    setTries(prev => prev - 1);
  };

  return (
    <div className="game">

      <div className="clock-container">

        <Image src={clock} className="clock-face" />

        <Image
          src={hourHand}
          className="hour-hand"
          style={{ transform: `rotate(${hourRotation}deg)` }}
        />

        <Image 
          src={minuteHand}
          className="minute-hand"
          style={{ transform: `rotate(${minuteRotation}deg)` }}
        />

      </div>

      <button onClick={() => setSpinning(true)}>Spin</button>
      <button onClick={stopClock}>Stop</button>

      <p>Tries Left: {tries}</p>

    </div>
  );
}

export default ClockGame;