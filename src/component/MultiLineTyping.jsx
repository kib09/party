import React, { useEffect, useState } from "react";

const MultiLineTyping = ({ lines = [], speed = 100, onComplete }) => {
  const [displayLines, setDisplayLines] = useState(() => lines.map(() => ""));

  useEffect(() => {
    if (!lines || lines.length === 0) return;

    let lineIndex = 0;
    let charIndex = 0;

    const interval = setInterval(() => {
      setDisplayLines((prev) => {
        const newLines = [...prev];
        const currentLine = lines[lineIndex] || "";

        if (charIndex < currentLine.length) {
          newLines[lineIndex] += currentLine[charIndex];
        }

        return newLines;
      });

      charIndex++;

      if (charIndex >= (lines[lineIndex] || "").length) {
        lineIndex++;
        charIndex = 0;
      }

      if (lineIndex >= lines.length) {
        clearInterval(interval);
        if (onComplete) onComplete();
      }
    }, speed);

    return () => clearInterval(interval);
  }, [lines, speed, onComplete]);

  return (
    <div
      style={{ fontSize: "1.5rem", lineHeight: "2.8rem", textAlign: "center" }}
    >
      {displayLines.map((line, idx) => (
        <div className="font-Amarillo" key={idx}>
          {line}
        </div>
      ))}
    </div>
  );
};

export default MultiLineTyping;
