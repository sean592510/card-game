import React, { useState, useEffect } from 'react';
import Card from './Card';
import './GameBoard.css';

function GameBoard({ setMoves }) {
  const emojis = ['😺', '🐶', '🦁', '🐘', '🦒', '🐼', '🦊', '🐻'];
  const cards = [...emojis, ...emojis]; // Create pairs

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const [cardList, setCardList] = useState(shuffleArray([...cards]));
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
    if (flippedCards.length === 2) {
      setIsLocked(true);
      setMoves((prev) => prev + 1);
      const [first, second] = flippedCards;
      if (cardList[first] === cardList[second]) {
        setMatchedCards((prev) => [...prev, first, second]);
        setFlippedCards([]);
        setIsLocked(false);
      } else {
        setTimeout(() => {
          setFlippedCards([]);
          setIsLocked(false);
        }, 1000);
      }
    }
  }, [flippedCards, cardList, setMoves]);

  useEffect(() => {
    if (matchedCards.length === cardList.length && cardList.length > 0) {
      alert('Congratulations! You won!');
    }
  }, [matchedCards, cardList]);

  const handleCardClick = (index) => {
    if (isLocked || flippedCards.includes(index) || matchedCards.includes(index)) {
      return;
    }
    setFlippedCards((prev) => [...prev, index]);
  };

  return (
    <div className="game-board">
      {cardList.map((emoji, index) => (
        <Card
          key={index}
          emoji={emoji}
          index={index}
          isFlipped={flippedCards.includes(index) || matchedCards.includes(index)}
          isMatched={matchedCards.includes(index)}
          onClick={() => handleCardClick(index)}
        />
      ))}
    </div>
  );
}

export default GameBoard;
