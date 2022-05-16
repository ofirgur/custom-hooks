import { GameState, GameLevel, GameScreen } from './types';

export const INITIAL_GAME_STATE: GameState = {
  gameLevel: GameLevel.Beginner,
  gameScreen: GameScreen.start,
  gameCards: [],
  gameMoves: 0,
  gameMatches: 0,
  gamePoints: 0,
};

export const CARDS_PER_LEVEL = {
  [GameLevel.Beginner]: 4,
  [GameLevel.Intermediate]: 6,
  [GameLevel.Advanced]: 10,
};

export const STRING_PER_LEVEL = {
  [GameLevel.Beginner]: 'beginner',
  [GameLevel.Intermediate]: 'intermediate',
  [GameLevel.Advanced]: 'advanced',
};

export const GAME_POINTS = {
  AMAZING: 1000,
  WELL_DONE: 800,
  NOT_BAD: 600,
  ALMOST: 400,
  TRY_AGAIN: 200,
};

export const STRING_PER_POINTS = {
  [GAME_POINTS.AMAZING]: 'amazing',
  [GAME_POINTS.WELL_DONE]: 'well-done',
  [GAME_POINTS.NOT_BAD]: 'not-bad',
  [GAME_POINTS.ALMOST]: 'not-bad',
  [GAME_POINTS.TRY_AGAIN]: 'try-again',
};

export const WAZIMO_ASSETS_URL = './cards.json';
export const GAME_STATE_LOCAL_STORAGE_NAME = 'tarrot-memory-game-state';

export const SCORE_PAGE_URL = window.location.origin.concat(window.location.pathname).concat('/score').concat(window.location.search);
export const GAME_PAGE_URL = window.location.origin.concat(window.location.pathname).replace('/score', '');
