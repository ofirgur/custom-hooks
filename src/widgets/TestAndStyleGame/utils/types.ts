export interface GameStateContextInterface {
  gameState: GameState;
  setGameState: (gameState: Partial<GameState>) => void;
}

export interface GameState {
  gameScreen: GameScreen;
  gamePosts: GamePost[];
  gameSelectedPost?: GamePost;
}

export enum GameScreen {
  Start = 1,
  Card = 2,
  Over = 3,
}

export interface GamePost {
  userId: number,
  id: number,
  title: string,
  body: string,
}
