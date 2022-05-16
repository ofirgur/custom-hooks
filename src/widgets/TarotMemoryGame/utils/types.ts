export interface GameStateContextInterface {
  gameState: GameState;
  setGameState: (gameState: Partial<GameState>) => void;
}

export interface GameState {
  gameLevel: GameLevel;
  gameScreen: GameScreen;
  gameCards: GameCard[];
  gameMoves: number;
  gameMatches: number;
  gamePoints: number;
}

export enum GameLevel {
  Beginner = 1,
  Intermediate = 2,
  Advanced = 3,
}

export enum GameScreen {
  start = 1,
  game = 2,
  end = 3,
}

export interface GameCard {
  name: string;
  image: string;
  link: string;
}

export interface PacketCard {
  name: string;
  image: string;
  link: string;
  id: number;
  pairId: number;
}

export interface MetchCardInterface {
  card: PacketCard,
  setOpen: (open: boolean) => void,
  setStop: (stop: boolean) => void,
}
