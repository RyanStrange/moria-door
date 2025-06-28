import React, { useState } from "react";
import "./MoriaDoor.css";
import doorImage from "../assets/moria-door-bg-transparent.png";

const MoriaDoor = () => {
  const [input, setInput] = useState("");
  const [shaking, setShaking] = useState(false);
  const [unlocked, setUnlocked] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (input.trim().toLowerCase() === "mellon") {
        setUnlocked(true);
        // Redirect or unlock logic
        setTimeout(() => {
          window.location.href = "/welcome"; // change this to your desired route
        }, 1500);
      } else {
        setShaking(true);
        setTimeout(() => setShaking(false), 400);
      }
    }
  };

  return (
    <div className="moria-container">
      <img
        src={doorImage}
        alt="Doors of Moria"
        className={`door-image ${unlocked ? "door-open" : ""}`}
      />
      <h1>Speak friend, and enter</h1>
      <input
        type="text"
        placeholder=""
        className={shaking ? "shake" : ""}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default MoriaDoor;
