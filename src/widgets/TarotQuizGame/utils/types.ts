export interface GameStateContextInterface {
  gameState: GameState;
  setGameState: (gameState: Partial<GameState>) => void;
}

export interface GameState {
  gameScreen: GameScreen;
  gameCards: GameCard[];
  gameMatches: GameMatch[];
  gameMoves: number;
  gamePoints: number;
}

export enum GameScreen {
  game = 1,
  end = 2,
}

export interface GameCard {
  name: string;
  image: string;
  link: string;
  quizCards: GameCard[];
}

export interface GameMatch {
  gameCard: GameCard;
  matchName: string;
}

export interface NameButtonProps {
  name: string;
  disabled: boolean;
  onClick?: () => void;
}

export interface SimpleCardProps {
  image: string;
  name?: string;
  correct?: boolean;
}
