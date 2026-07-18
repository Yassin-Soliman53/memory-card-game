import Card from "./components/cards";
import Header from "./components/header";
import WinMessage from "./components/WinMessage";
import useGameLogic from "../hooks/useGameLogic"; 

const cardValues = [
  "🍎",
  "🍌",
  "🍇",
  "🍊",
  "🍓",
  "🥝",
  "🍑",
  "🍒",
  "🍎",
  "🍌",
  "🍇",
  "🍊",
  "🍓",
  "🥝",
  "🍑",
  "🍒",
];

function App() {
  const {
    cards,
    score,
    moves,
    handleCardClick,
    initializeGame,
    isGameComplete,
  } = useGameLogic(cardValues)
  return (
    <div className="app">
      <Header score={score} moves={moves} onReset={initializeGame} />

      {isGameComplete && (
        <WinMessage moves={moves} onReset={initializeGame} />
      )}

      <div className="card-grid">
  {cards.map((card) => (
      <Card key={card.id} card={card} onClick={handleCardClick} />
  ))}
</div>
    </div>
  );
}

export default App;