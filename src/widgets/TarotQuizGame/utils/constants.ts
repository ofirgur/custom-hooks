import { GameState, GameScreen } from './types';

export const INITIAL_GAME_STATE: GameState = {
  gameScreen: GameScreen.game,
  gameCards: [],
  gameMatches: [],
  gameMoves: 0,
  gamePoints: 0,
};
export const CARDS_NUMBER = 6;
export const QUIZ_CARDS_NUMBER = 3;
export const QUIZ_INDICATOR_ARRAY = [0, 1, 2, 3, 4, 5];
export const WAZIMO_ASSETS_URL = 'https://cdn.mmctsvc.com/email/tarot-memory-game.json';
export const YES_NO_TAROT_URL = 'https://all-tarot.com/readings/yes-or-no-tarot/';
export const GAME_LAST_MATCHE = QUIZ_INDICATOR_ARRAY.length - 1;

export const GAME_POINTS = {
  AMAIZING: 1200,
  WELL_DONE: 1000,
  WELL_DONE_2: 800,
  NOT_BAD: 600,
  NOT_BAD_2: 400,
  TRY_AGAIN: 200,
  TRY_AGAIN_2: 0,
};

export const GAME_STATE_LOCAL_STORAGE_NAME = 'tarrot-quiz-game-state';

export const SCORE_PAGE_URL = window.location.origin.concat(window.location.pathname).concat('/score').concat(window.location.search);
export const GAME_PAGE_URL = window.location.origin.concat(window.location.pathname).replace('/score', '');
