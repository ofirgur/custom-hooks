import { GAME_POINTS } from './constants';

export const STRINGS = {
  GAME_SCREEN: {
    MATCHES: 'Matches',
    MOVES: 'Moves',
    FETCHING: 'Fetching...',
    NEXT: 'Next',
    GET_YOUR_SCORE: 'Get Your Score',
  },
  END_SCREEN: {
    START_OVER: 'Start Over',
    YES_NO_TAROT: 'Yes No Tarot',
    READ_MORE: 'Read more about the cards you were able to match',
    MOVES: 'Moves',
    POINTS: 'Points',
    STRING_PER_SCORE: (score: number) => {
      switch (score) {
        case GAME_POINTS.TRY_AGAIN_2: return 'Better luck next time! You got 0/6 answers correct﻿';
        case GAME_POINTS.TRY_AGAIN: return 'Better luck next time! You got 1/6 answers correct';
        case GAME_POINTS.NOT_BAD_2: return "You're getting there! You got 2/6 answers correct";
        case GAME_POINTS.NOT_BAD: return "You're getting there! You got 3/6 answers correct";
        case GAME_POINTS.WELL_DONE_2: return 'Look at you go! You got 4/6 answers correct';
        case GAME_POINTS.WELL_DONE: return 'Look at you go! You got 5/6 answers correct';
        case GAME_POINTS.AMAIZING: return "Wow! You're a tarot expert. 6/6 answers correct!";
        default: return '';
      }
    },
    EVENT_PER_SCORE: (score: number) => {
      switch (score) {
        case GAME_POINTS.TRY_AGAIN_2: return 'try-again';
        case GAME_POINTS.TRY_AGAIN: return 'try-again';
        case GAME_POINTS.NOT_BAD_2: return 'not-bad';
        case GAME_POINTS.NOT_BAD: return 'not-bad';
        case GAME_POINTS.WELL_DONE_2: return 'well-done';
        case GAME_POINTS.WELL_DONE: return 'well-done';
        case GAME_POINTS.AMAIZING: return 'amazing';
        default: return '';
      }
    },
  },
};
