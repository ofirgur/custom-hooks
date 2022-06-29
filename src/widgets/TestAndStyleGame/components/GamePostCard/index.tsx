import React from 'react';

import { GameScreen, GamePost } from '../../utils/types'; 
import { useGameStateContext } from '../../utils/context';
import  { GamePostCardStyled } from './styled';

interface GamePostCardProps {
  post: GamePost;
}

const GamePostCard = (props: GamePostCardProps) => {
  const { post } = props;
  const { setGameState } = useGameStateContext();

  const handleClick = () => {
    setGameState({
      gameScreen: GameScreen.Card,
      gameSelectedPost: post,
    });
  };
  
  return (
    <GamePostCardStyled onClick={handleClick}>
      {post.title}
    </GamePostCardStyled>
  );
};

export default GamePostCard;
