import React from 'react';
import { isMobile } from 'react-device-detect';
import { GameCard } from '../../../../utils/types';
import SimpleGameCard from '../../../GameCardTemplate/components/SimpleGameCard';
import AdSensePlaceholder from '../../../../../../components/AdSensePlaceholder';
import { GameCardsListStyled } from './styled';

interface GameCardsListProps {
  gameCards: GameCard[];
}

const GameCardsList = (props: GameCardsListProps) => {
  const { gameCards } = props;

  return (
    <GameCardsListStyled>
      {
        gameCards.map((gameCard: GameCard, index: number) => (
          <React.Fragment key={index}>
            <SimpleGameCard
              gameCard={gameCard}
            />
            {isMobile && (index + 1) % 4 === 0 && <AdSensePlaceholder />}
          </React.Fragment>
        ))
      }
    </GameCardsListStyled>
  );
};

export default GameCardsList;
