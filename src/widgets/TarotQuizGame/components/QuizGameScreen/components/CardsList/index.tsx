import React, { useState, useEffect } from 'react';
import { useGameStateContext } from '../../../../utils/context';
import { QUIZ_INDICATOR_ARRAY, GAME_LAST_MATCHE } from '../../../../utils/constants';
import { GameCard, GameMatch, GameScreen } from '../../../../utils/types';
import CardQuiz from '../CardQuiz';
import QuizTimeline from './components/QuizTimeline';

type CardsListProps = {
  cards: GameCard[];
};

const CardsList = (props: CardsListProps) => {
  const { cards } = props;
  const { gameState, setGameState } = useGameStateContext();
  const [cardIndex, setCardIndex] = useState(0);
  const [matches, setMatches] = useState<GameMatch[] | []>([]);
  const [firstClickOnName, setFirstClickOnName] = useState(true);

  useEffect(() => {
    if (matches.length === cards.length) {
      setGameState({
          ...gameState,
          gameScreen: GameScreen.end,
          gameMatches: matches,
      });
    }
  }, [matches]);

  const handleCardIndex = (name: string) => {
    setMatches([...matches, {
      gameCard: cards[cardIndex],
      matchName: name,
    }]);

    if (cardIndex < GAME_LAST_MATCHE) {
      setCardIndex(cardIndex + 1);
    }
  };

  return (
    <>
      <CardQuiz
        card={cards[cardIndex]}
        handleCardIndex={handleCardIndex}
        firstClickOnName={firstClickOnName}
        setFirstClickOnName={setFirstClickOnName}
        isLastMatch={cardIndex === GAME_LAST_MATCHE}
      />
      <QuizTimeline
        numbersArray={QUIZ_INDICATOR_ARRAY}
        currentIndex={cardIndex}
      />
    </>
  );
};

export default CardsList;
