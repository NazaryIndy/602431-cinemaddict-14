const getUserStatus = (value) => {
  if (value === 0) {
    return '';
  }
  if (0 < value <= 10) {
    return 'novice';
  }
  if (10 < value <= 20) {
    return 'fan';
  }
  if (20 < value) {
    return 'movie buff';
  }
};

export const generateUserInfo = (films) => {
  const watchedListCount = films.filter((film) => film.isWatchlist).length;

  return {
    status: getUserStatus(watchedListCount),
  };
};
