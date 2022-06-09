import React, { useState } from 'react';
import { STRINGS } from '../../../../utils/strings';
import { GameCard } from '../../../../utils/types';
import SimpleCard from '../../../SimpleCard';
import NameButton from './components/NameButton';
import { CardQuizStyled, SelectionAreaStyled, NextButtonStyled } from './styled';

type CardQuizProps = {
  card: GameCard;
  handleCardIndex: (name: string) => void;
  isLastMatch: boolean;
  firstClickOnName: boolean;
  setFirstClickOnName: (first: boolean) => void;
};

const CardQuiz = (props: CardQuizProps) => {
  const emptyString = '';
  const { card, handleCardIndex, isLastMatch, firstClickOnName, setFirstClickOnName } = props;
  const { quizCards } = card;
  const [selectedName, setSelectedName] = useState(emptyString);
  const handleNextButtonClick = () => {
    if (selectedName) {
      setSelectedName(emptyString);
      handleCardIndex(selectedName);
    }
  };
  const handleNameButtonClick = (quizCard: GameCard) => {
    setSelectedName(quizCard.name);
    if (firstClickOnName) {
      setFirstClickOnName(false);
    }
  };

  return (
    <CardQuizStyled>
      <SimpleCard image={card.image} />
      <NameButton
        name={selectedName}
        disabled={false}
      />
      <SelectionAreaStyled>
        {
          quizCards.map((quizCard: GameCard, index: number) => {
            return (
              <NameButton
                key={index}
                name={quizCard.name}
                onClick={() => handleNameButtonClick(quizCard)}
                disabled={quizCard.name === selectedName}
              />
            );
          })
        }
      </SelectionAreaStyled>
      <NextButtonStyled
        disabled={selectedName === emptyString}
        onClick={handleNextButtonClick}
      >
        {isLastMatch ? STRINGS.GAME_SCREEN.GET_YOUR_SCORE : STRINGS.GAME_SCREEN.NEXT}
      </NextButtonStyled>
    </CardQuizStyled>
  );
};

export default CardQuiz;
