const getUserStatus = (value) => {
  if (value === 0) {
    return '';
  }
  if (value > 0 && value <= 10) {
    return 'novice';
  }
  if (value > 10 && value <= 20) {
    return 'fan';
  }
  if (value > 20) {
    return 'movie buff';
  }
};

const getWatchedFilmsList = (films) => {
  return films.filter((film) => film.isWatchlist);
};

const getTotalDuration = (films) => {
  return films.reduce((accumulator, film) => accumulator + film.duration, 0);
};

const getTopGenre = (films) => {
  const counts = {};
  let compare = 0;
  let mostFrequent;

  for (let i = 0, len = films.length; i < len; i++){
    let genre;
    for (let j = 0; j < films[i].genres.length; j++) {
      genre = films[i].genres[j];
      if (counts[genre] === undefined){
        counts[genre] = 1;
      } else {
        counts[genre] = counts[genre] + 1;
      }
      if (counts[genre] > compare){
        compare = counts[genre];
        mostFrequent = films[i].genres[j];
      }
    }
  }

  return mostFrequent;
};


export const generateUserInfo = (films) => {
  const wathedList = getWatchedFilmsList(films);

  return {
    status: getUserStatus(wathedList.length),
    count: wathedList.length,
    duration: getTotalDuration(wathedList),
    genre: getTopGenre(films),
  };
};
