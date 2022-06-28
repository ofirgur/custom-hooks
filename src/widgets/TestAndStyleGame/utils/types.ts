export interface GameStateContextInterface {
  gameState: GameState;
  setGameState: (gameState: Partial<GameState>) => void;
}

export interface GameState {
  gameScreen: GameScreen;
}

export enum GameScreen {
  game = 1,
  end = 2,
}
