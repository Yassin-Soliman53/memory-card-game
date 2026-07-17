import React from "react";

const WinMessage = ({ moves, onReset }) => {
  return (
    <div className="win-overlay">
      <div className="win-modal">
        <div className="win-icon">🎉</div>
        <h2>Congratulations!</h2>
        <p>You completed the memory game in <strong>{moves}</strong> moves!</p>
        <button className="play-again-btn" onClick={onReset}>
          Play Again
        </button>
      </div>
    </div>
  );
};

export default WinMessage;
