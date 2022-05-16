import React, { useState, useEffect } from 'react';

import cardsJSON from '../../utils/cards.json';
import { getRandomGameCards } from '../../utils/logic';
import { STRINGS } from '../../utils/strings';
import { useGameStateContext } from '../../utils/context';
import { CARDS_PER_LEVEL } from '../../utils/constants';
import AdSensePlaceholder from '../../../../components/AdSensePlaceholder';
import GameScreenTitle from './components/GameScreenTitle';
import GameScreenCardsWrapper from './components/GameScreenCardsWrapper';
import { GameScreenStyled, Fetching } from './styled';

const GameScreen = () => {
  const { gameState, setGameState } = useGameStateContext();
  const { gameCards, gameLevel, gameMoves, gameMatches } = gameState;
  const [moves, setMoves] = useState<number>(gameMoves);
  const [matches, setMatches] = useState<number>(gameMatches);

  const handleMoves = () => setMoves(moves + 1);
  const handleMatches = () => setMatches(matches + 1);

  useEffect(() => {
    setGameState({
      gameCards: getRandomGameCards(CARDS_PER_LEVEL[gameLevel], cardsJSON.cards),
    });
  }, []);

  if (gameCards.length === 0) {
    return (<Fetching>{STRINGS.GAME_SCREEN.FETCHING}</Fetching>);
  }

  return (
    <GameScreenStyled>
      <AdSensePlaceholder />
      <GameScreenTitle
        moves={moves}
        matches={matches}
      />
      <GameScreenCardsWrapper
        matches={matches}
        handleMatches={handleMatches}
        moves={moves}
        handleMoves={handleMoves}
      />
    </GameScreenStyled>
  );
};

export default GameScreen;
