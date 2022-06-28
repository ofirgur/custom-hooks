import React from 'react';

import { useGameStateContext } from '../../utils/context';
import { GamePost } from '../../utils/types';
import GamePostCard from '../GamePostCard';

const GameStartScreen = () => {
  const { gameState } = useGameStateContext();

  const renderPosts = (posts: GamePost[]) => {
    return posts.map((post: GamePost) => {
      return <GamePostCard key={post.id} post={post} />;
    });
  };

  return (
    <div>
      {renderPosts(gameState.gamePosts)}
    </div>
  );
};

export default GameStartScreen;
