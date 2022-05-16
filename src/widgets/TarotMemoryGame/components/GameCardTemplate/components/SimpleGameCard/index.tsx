import React from 'react';
import { sendWazimoEvent } from '../../../../../../events';
import { STRINGS } from '../../../../utils/strings';
import { GameCard } from '../../../../utils/types';
import { SimpleGameCardStyled, SimpleCardImage, CardTitle, MeaningLink } from './styled';

type SimpleGameCardProps = {
  gameCard: GameCard;
};

const SimpleGameCard = (props: SimpleGameCardProps) => {
  const { gameCard } = props;
  const handleMeaningClick = () => {
    sendWazimoEvent(
      'CTA click',
      'tarot-memory-score_card_click',
    );
  };

  return (
    <SimpleGameCardStyled>
      <SimpleCardImage
        src={gameCard.image}
      />
      <CardTitle>
        {gameCard.name}
      </CardTitle>
      <MeaningLink
        href={gameCard.link}
        onClick={handleMeaningClick}
      >
        {STRINGS.END_SCREEN.Meaning}
      </MeaningLink>
    </SimpleGameCardStyled>
  );
};

export default SimpleGameCard;
