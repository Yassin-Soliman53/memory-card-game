import { useState, useEffect, useCallback } from "react";
export default function useGameLogic(cardValues) { 
  const [cards, setCards] = useState([]); 
  const [, setFlippedCards] = useState([]);
  const [moves, setMoves] = useState(0);
  const [score, setScore] = useState(0);
  const [isGameComplete, setIsGameComplete] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const initializeGame = useCallback(() => {
    const shuffledCards = [...cardValues]
      .sort(() => Math.random() - 0.5)
      .map((value, index) => ({
        id: index,
        value,
        isFlipped: false,
        isMatched: false,
      }));
    
    setCards(shuffledCards);
    setFlippedCards([]);
    setMoves(0);
    setScore(0);
    setIsGameComplete(false);
    setDisabled(false);
  }, [cardValues]);
  useEffect(() => {
    initializeGame();
  }, [initializeGame]);

  const handleCardClick = useCallback((clickedCard) => {
    if (disabled) return;
    if (clickedCard.isFlipped || clickedCard.isMatched) return;
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === clickedCard.id ? { ...card, isFlipped: true } : card
      )
    );
        setFlippedCards((prevFlipped) => {
      const newFlipped = [...prevFlipped, clickedCard];

      if (newFlipped.length === 2) {
        setDisabled(true);
        setMoves((prevMoves) => prevMoves + 1);

        const [first] = newFlipped;

        if (first.value === clickedCard.value) {
          setCards((prevCards) =>
            prevCards.map((card) =>
              card.id === first.id || card.id === clickedCard.id
                ? { ...card, isMatched: true }
                : card
            )
          );
          setScore((prevScore) => prevScore + 10);
          setDisabled(false);
          return [];
        } else {
          setTimeout(() => {
            setCards((prevCards) =>
              prevCards.map((card) =>
                card.id === first.id || card.id === clickedCard.id
                  ? { ...card, isFlipped: false }
                  : card
              )
            );
            setDisabled(false);
          }, 1000);
          return [];
        }
      }
      return newFlipped;
    });
  }, [disabled]);

  useEffect(() => {
    if (cards.length > 0 && cards.every((card) => card.isMatched)) {
      setIsGameComplete(true);
    }
  }, [cards]);

  return {
    cards,
    score,
    moves,
    handleCardClick,
    initializeGame,
    isGameComplete,
  };
}
  

  

 



