export interface GameStateContextInterface {
  gameState: GameState;
  setGameState: (gameState: Partial<GameState>) => void;
}

export interface GameState {
  gameScreen: GameScreen;
}

export enum GameScreen {
  Start = 1,
  Card = 2,
  Over = 3,
}
