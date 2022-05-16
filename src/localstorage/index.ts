export const getGameStateLocalStorage = (localStorageName: string) => {
  const gameStateLocalStorage = localStorage.getItem(localStorageName);
  return gameStateLocalStorage && JSON.parse(gameStateLocalStorage);
};

export const setGameStateLocalStorage = (localStorageName: string, gameState: any, reload: any) => {
  localStorage.setItem(localStorageName, JSON.stringify(gameState));
  if (reload) {
    if (typeof reload === 'boolean') {
      window.location.reload();
    } else if (typeof reload === 'string') {
      window.location.href = reload;
    }
  }
};

export const removeGameStateLocalStorage = (localStorageName: string) => {
  localStorage.removeItem(localStorageName);
};
