
import { GameScreen } from './types';
import { GAME_POINTS } from './constants';

export const mockedGameState = {
  gameScreen: GameScreen.game,
  gameMatches: [],
  gameMoves: 0,
  gamePoints: 0,
  gameCards: [],
};

export const mockedNumbersArray = [0, 1, 2, 3, 4, 5];
export const mockedCardIndex = 2;
export const mockedPoints = GAME_POINTS.AMAIZING;

export const mockedGameCard = {
  "name": "The Fool",
  "image": "https://storage.googleapis.com/wz_email_media/images/the_fool_quiz.png",
  quizCards: [
    {
      "name": "The Fool",
      "image": "https://storage.googleapis.com/wz_email_media/images/the_fool_quiz.png",
    },
    {
      "name": "The Magician",
      "image": "https://storage.googleapis.com/wz_email_media/images/the_magician_quiz.png"
    },
    {
      "name": "The High Priestess",
      "image": "https://storage.googleapis.com/wz_email_media/images/the_high_priestess_quiz.png"
    },
    {
      "name": "The Empress",
      "image": "https://storage.googleapis.com/wz_email_media/images/the_empress_quiz.png"
    }
  ],
};

export const mockedGameCards = [
  {
    "name": "The Fool",
    "image": "https://storage.googleapis.com/wz_email_media/images/the_fool_quiz.png",
    quizCards: [
      {
        "name": "The Fool",
        "image": "https://storage.googleapis.com/wz_email_media/images/the_fool_quiz.png",
      },
      {
        "name": "The Magician",
        "image": "https://storage.googleapis.com/wz_email_media/images/the_magician_quiz.png"
      },
      {
        "name": "The High Priestess",
        "image": "https://storage.googleapis.com/wz_email_media/images/the_high_priestess_quiz.png"
      },
      {
        "name": "The Empress",
        "image": "https://storage.googleapis.com/wz_email_media/images/the_empress_quiz.png"
      }
    ],
  },
  {
    "name": "The Magician",
    "image": "https://storage.googleapis.com/wz_email_media/images/the_magician_quiz.png",
    quizCards: [
      {
        "name": "The Fool",
        "image": "https://storage.googleapis.com/wz_email_media/images/the_fool_quiz.png",
      },
      {
        "name": "The Magician",
        "image": "https://storage.googleapis.com/wz_email_media/images/the_magician_quiz.png"
      },
      {
        "name": "The High Priestess",
        "image": "https://storage.googleapis.com/wz_email_media/images/the_high_priestess_quiz.png"
      },
      {
        "name": "The Empress",
        "image": "https://storage.googleapis.com/wz_email_media/images/the_empress_quiz.png"
      }
    ],
  },
  {
    "name": "The High Priestess",
    "image": "https://storage.googleapis.com/wz_email_media/images/the_high_priestess_quiz.png",
    quizCards: [
      {
        "name": "The Fool",
        "image": "https://storage.googleapis.com/wz_email_media/images/the_fool_quiz.png",
      },
      {
        "name": "The Magician",
        "image": "https://storage.googleapis.com/wz_email_media/images/the_magician_quiz.png"
      },
      {
        "name": "The High Priestess",
        "image": "https://storage.googleapis.com/wz_email_media/images/the_high_priestess_quiz.png"
      },
      {
        "name": "The Empress",
        "image": "https://storage.googleapis.com/wz_email_media/images/the_empress_quiz.png"
      }
    ],
  },
  {
    "name": "The Empress",
    "image": "https://storage.googleapis.com/wz_email_media/images/the_empress_quiz.png",
    quizCards: [
      {
        "name": "The Fool",
        "image": "https://storage.googleapis.com/wz_email_media/images/the_fool_quiz.png",
      },
      {
        "name": "The Magician",
        "image": "https://storage.googleapis.com/wz_email_media/images/the_magician_quiz.png"
      },
      {
        "name": "The High Priestess",
        "image": "https://storage.googleapis.com/wz_email_media/images/the_high_priestess_quiz.png"
      },
      {
        "name": "The Empress",
        "image": "https://storage.googleapis.com/wz_email_media/images/the_empress_quiz.png"
      }
    ],
  },
  {
    "name": "The Empress",
    "image": "https://storage.googleapis.com/wz_email_media/images/the_empress_quiz.png",
    quizCards: [
      {
        "name": "The Fool",
        "image": "https://storage.googleapis.com/wz_email_media/images/the_fool_quiz.png",
      },
      {
        "name": "The Magician",
        "image": "https://storage.googleapis.com/wz_email_media/images/the_magician_quiz.png"
      },
      {
        "name": "The High Priestess",
        "image": "https://storage.googleapis.com/wz_email_media/images/the_high_priestess_quiz.png"
      },
      {
        "name": "The Empress",
        "image": "https://storage.googleapis.com/wz_email_media/images/the_empress_quiz.png"
      }
    ],
  }, {
    "name": "The Empress",
    "image": "https://storage.googleapis.com/wz_email_media/images/the_empress_quiz.png",
    quizCards: [
      {
        "name": "The Fool",
        "image": "https://storage.googleapis.com/wz_email_media/images/the_fool_quiz.png",
      },
      {
        "name": "The Magician",
        "image": "https://storage.googleapis.com/wz_email_media/images/the_magician_quiz.png"
      },
      {
        "name": "The High Priestess",
        "image": "https://storage.googleapis.com/wz_email_media/images/the_high_priestess_quiz.png"
      },
      {
        "name": "The Empress",
        "image": "https://storage.googleapis.com/wz_email_media/images/the_empress_quiz.png"
      }
    ],
  },
];

export const mockedMatches = [
  {
    gameCard: {
      "name": "The Fool",
      "image": "https://storage.googleapis.com/wz_email_media/images/the_fool_quiz.png",
    },
    matchName: "The Fool",
  },
  {
    gameCard: {
      "name": "The Magician",
      "image": "https://storage.googleapis.com/wz_email_media/images/the_fool_quiz.png",
    },
    matchName: "The Fool",
  },
  {
    gameCard: {
      "name": "The Fool",
      "image": "https://storage.googleapis.com/wz_email_media/images/the_fool_quiz.png",
    },
    matchName: "The Fool",
  },
  {
    gameCard: {
      "name": "The Fool",
      "image": "https://storage.googleapis.com/wz_email_media/images/the_fool_quiz.png",
    },
    matchName: "The Fool",
  },
  {
    gameCard: {
      "name": "The Fool",
      "image": "https://storage.googleapis.com/wz_email_media/images/the_fool_quiz.png",
    },
    matchName: "The Fool",
  },
  {
    gameCard: {
      "name": "The Fool",
      "image": "https://storage.googleapis.com/wz_email_media/images/the_fool_quiz.png",
    },
    matchName: "The Fool",
  },
];
