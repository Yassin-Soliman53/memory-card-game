import useGameLogic from "../hooks/useGameLogic";
import WinMessage from "./WinMessage";

const cardValues = [
  "🍎", "🍌", "🍇", "🍊", "🍓", "🥝", "🍑", "🍒",
  "🍎", "🍌", "🍇", "🍊", "🍓", "🥝", "🍑", "🍒",
];
const Card = ({ card, onClick }) => {
  return (
    <div
      className={`card ${card.isFlipped ? "flipped" : ""} ${card.isMatched ? "matched" : ""}`}
      onClick={() => onClick(card)}
    >
      <div className="card-front">?</div>
      <div className="card-back">{card.value}</div>
    </div>
  );
};
const GameHeader = ({ score, moves, onReset }) => {
  return (
    <div className="Header-div">
      <h1>🎮Memory card game</h1>
      <div className="stats">
        <div className="stat-item">
          <span className="stat-label">SCORE :</span>{" "}
          <span className="stat-value">{score}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">MOVES : </span>{" "}
          <span className="stat-value">{moves}</span>
        </div>
      </div>
      <button className="reset-btn" onClick={onReset}>
        Reset Game
      </button>
    </div>
  );
};

const GamePage = () => {
  const { cards, score, moves, handleCardClick, initializeGame, isGameComplete } =
    useGameLogic(cardValues);

  return (
    <div className="app">
      <GameHeader score={score} moves={moves} onReset={initializeGame} />

      {isGameComplete && (
        <WinMessage moves={moves} score={score} onReset={initializeGame} />
      )}

      <div className="card-grid">
        {cards.map((card) => (
          <Card key={card.id} card={card} onClick={handleCardClick} />
        ))}
      </div>
    </div>
  );
};

export default GamePage;
