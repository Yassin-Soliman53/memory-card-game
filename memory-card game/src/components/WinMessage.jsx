import React from "react";
const WinMessage = ({moves , score, onReset}) => { 
  return (
    <div className="win-overlay">
      <div className="win-modal">
        <div className="win-icon">🤴</div>
        <h2>BEAH IBN BEAH</h2>
        <p>You completed the game in <strong>{moves}</strong> moves with a score of <strong>{score}</strong>. 
        Would you like to play again?</p>
        <button className="play-again-btn" onClick={onReset}>PLAY AGAIN</button>
      </div>
    </div>
  )
}
export default WinMessage;

