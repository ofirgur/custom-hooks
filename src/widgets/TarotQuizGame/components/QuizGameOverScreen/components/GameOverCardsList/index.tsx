import React from 'react';
import { GameMatch } from '../../../../utils/types';
import SimpleCard from '../../../SimpleCard';
import { GameOverCardListStyled } from './styled';

type GameOverCardsListProps = {
  matches: GameMatch[];
};

const GameOverCardsList = (props: GameOverCardsListProps) => {
  const { matches } = props;

  return (
    <GameOverCardListStyled>
      {
        matches.map((match, index) => (
          <SimpleCard
            key={index}
            image={match.gameCard.image}
            name={match.gameCard.name}
            correct={match.gameCard.name === match.matchName}
          />
        ))
      }
    </GameOverCardListStyled>
  );
};

export default GameOverCardsList;
