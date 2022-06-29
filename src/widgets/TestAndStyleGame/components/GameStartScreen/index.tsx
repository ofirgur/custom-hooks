import React from 'react';

import { useGameStateContext } from '../../utils/context';
import { GamePost } from '../../utils/types';
import { STRINGS } from '../../utils/strings';
import GamePostCard from '../GamePostCard';
import { GameStartScreenStyled, GameStartScreenTitleStyled } from './styled';

const GameStartScreen = () => {
  const { gameState } = useGameStateContext();

  const renderPosts = (posts: GamePost[]) => {
    return posts.map((post: GamePost) => {
      return <GamePostCard key={post.id} post={post} />;
    });
  };

  return (
    <GameStartScreenStyled>
      <GameStartScreenTitleStyled>{STRINGS.SRTART_SCREEN.TITLE}</GameStartScreenTitleStyled>
      {renderPosts(gameState.gamePosts)}
    </GameStartScreenStyled>
  );
};

export default GameStartScreen;
