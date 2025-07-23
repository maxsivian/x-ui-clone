import React, { useState } from "react";

const MAX_CHARS = 280;

export default function TweetInput() {
  const [text, setText] = useState("");

  const percent = Math.min((text.length / MAX_CHARS) * 100, 100);
  const radius = 18;
  const stroke = 4;
  const normalizedRadius = radius - stroke;
  const circumference = 2 * Math.PI * normalizedRadius;
  const strokeDashoffset =
    circumference - (percent / 100) * circumference;

  return (
    <div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={4}
        placeholder="Type your tweet..."
      />
      <div className="circle">
        <svg height={radius * 2} width={radius * 2}>
          <g transform={`rotate(-90, ${radius}, ${radius})`}>
            <circle
              stroke="#e5e7eb"
              fill="transparent"
              strokeWidth={stroke}
              r={normalizedRadius}
              cx={radius}
              cy={radius}
            />
            <circle
              // stroke={text.length >= 280 ? "red": "#1DA1F2"} 
              stroke={text.length >= 260 ? (text.length >= 280 ? "red" : "yellow") : "#1DA1F2"}
              fill="transparent"
              strokeWidth={stroke}
              strokeDasharray={circumference + " " + circumference}
              strokeDashoffset={strokeDashoffset}
              r={normalizedRadius}
              cx={radius}
              cy={radius}
              style={{ transition: "stroke-dashoffset 0.35s" }}
            />
          </g>
        </svg>
        <div className="">{280-text.length}</div>
      </div>
      <div>{text.length}</div>
    </div>
  );
}
