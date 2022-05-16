import React, { useEffect } from 'react';
import cardsJSON from '../../utils/cards.json';
import { STRINGS } from '../../utils/strings';
import { useGameStateContext } from '../../utils/context';
import { getRandomGameCards } from '../../utils/logic';
import AdSensePlaceholder from '../../../../components/AdSensePlaceholder';
import { CARDS_NUMBER, QUIZ_CARDS_NUMBER } from '../../utils/constants';
import CardsList from './components/CardsList';
import { QuizGameScreenStyled, Fetching } from './styled';

const QuizGameScreen = () => {
  const { gameState, setGameState } = useGameStateContext();
  const { gameCards } = gameState;

  useEffect(() => {
    const setGameCards = () => {
      const cards = gameCards.length > 0
        ? gameCards
        : getRandomGameCards(
          CARDS_NUMBER,
          QUIZ_CARDS_NUMBER,
          cardsJSON.cards as any,
        );
      setGameState({
        gameCards: cards,
      });
    };
    setGameCards();
  }, []);

  return (
    <QuizGameScreenStyled>
      <AdSensePlaceholder />
      {
        gameCards.length === 0
          ? <Fetching>{STRINGS.GAME_SCREEN.FETCHING}</Fetching>
          : <CardsList cards={gameCards} />
      }
    </QuizGameScreenStyled>
  );
};

export default QuizGameScreen;
