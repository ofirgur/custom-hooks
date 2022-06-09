import React, { useEffect, useState } from 'react';
import { useGameStateContext } from '../../../../utils/context';
import { getPacketCards } from '../../../../utils/logic';
import { GameCard, GameScreen, MetchCardInterface, PacketCard } from '../../../../utils/types';
import FlipPacketCard from '../../../GameCardTemplate/components/FlipPacketCard';
import { GameScreenCardsWrapperStyled } from './styled';

interface GameScreenCardsWrapperProps {
  matches: number;
  handleMatches: () => void;
  moves: number;
  handleMoves: () => void;
}

const GameScreenCardsWrapper = (props: GameScreenCardsWrapperProps) => {
  const { matches, handleMatches, moves, handleMoves } = props;
  const { gameState, setGameState } = useGameStateContext();
  const { gameCards } = gameState;
  const numberOfGameCards = gameCards.length;
  const [packetCards] = useState<PacketCard[]>(getPacketCards(gameCards));
  const [matchCard, setMatchCard] = useState<MetchCardInterface | null>(null);
  const [matchedCards, setMatchedCards] = useState<GameCard[] | []>([]);

  useEffect(() => {
    if (matchedCards.length === numberOfGameCards) {
      setTimeout(() => {
        setGameState({
          ...gameState,
          gameScreen: GameScreen.end,
          gameMoves: moves,
          gameMatches: matches,
        });
      }, 2000);
    }
  }, [matchedCards]);

  const handleCardClick = (
    currentCard: PacketCard,
    setOpen: (open: boolean) => void,
    setStop: (open: boolean) => void,
  ) => {
    // console.log('handleCardClick currentCard: ', currentCard);
    // open the card &
    // update moves
    setOpen(true);
    // *****      logic begin *****
    // first card ot looking for
    if (!matchCard) {
      // stop the card
      setStop(true);
      // update matchCard
      setMatchCard({
        card: currentCard,
        setOpen,
        setStop,
      });
    } else { // second card ot metch with
      // a move = click on 2 cards
      handleMoves();
      if (currentCard.id === matchCard.card.pairId) {
        // **** bingo *****
        // update matchedCards with another card &
        // update matches &
        // matchCard to be null &
        // stop the card &
        // stop the pair card
        setMatchedCards([...matchedCards, currentCard as GameCard]);
        handleMatches();
        setMatchCard(null);
        setStop(true);
        matchCard.setStop(true);
      } else {
        // ***** failure *****
        // close the card
        // close the pair card
        // matchCard to be null
        // un stop the pair card
        setMatchCard(null);
        setTimeout(() => {
          setOpen(false);
          matchCard.setOpen(false);
          matchCard.setStop(false);
        }, 500);
      }
    }
  };

  return (
    <GameScreenCardsWrapperStyled>
      {
        packetCards.map((packetCard: PacketCard, i: number) => {
          const isMatche = matchedCards.filter(m => m.name === packetCard.name).length > 0;
          return (
            <FlipPacketCard
              key={i}
              packetCard={packetCard}
              onClick={handleCardClick}
              isMatched={isMatche}
            />
          );
        })
      }
    </GameScreenCardsWrapperStyled>
  );
};

export default GameScreenCardsWrapper;
