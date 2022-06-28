import React, { Suspense } from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import WidgetsDashbord from '../WidgetsDashbord';
import { PATHNAMES } from './pathnames';
import { WIDGETS } from './widgets';

const TarotMemoryGame = React.lazy(() => import(/* webpackChunkName: "tarot-memory-game" */'../../widgets/TarotMemoryGame'));
const TarotQuizGame = React.lazy(() => import(/* webpackChunkName: "tarot-quiz-game" */'../../widgets/TarotQuizGame'));
const TestAndStyleGame = React.lazy(() => import(/* webpackChunkName: "test-and-style-game" */'../../widgets/TestAndStyleGame'));

const games = {
  [PATHNAMES.tarotMemoryGame]: TarotMemoryGame,
  [PATHNAMES.tarotQuizGame]: TarotQuizGame,
};

const WidgetsSelection = ({ widgetName }: { widgetName: string }) => {
  if (games[widgetName]) {
    const Widget = games[widgetName];
    return (
      <Suspense fallback={<>...</>}>
        <Widget />
      </Suspense>
    );
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<WidgetsDashbord widgets={WIDGETS} />} />
          <Route
            path={PATHNAMES.tarotMemoryGame}
            element={(
              <Suspense fallback={<>...</>}>
                <TarotMemoryGame />
              </Suspense>
            )}
          />
          <Route
            path={PATHNAMES.tarotQuizGame}
            element={(
              <Suspense fallback={<>...</>}>
                <TarotQuizGame />
              </Suspense>
            )}
          />
          <Route
            path={PATHNAMES.testandstylegame}
            element={(
              <Suspense fallback={<>...</>}>
                <TestAndStyleGame />
              </Suspense>
            )}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default WidgetsSelection;
