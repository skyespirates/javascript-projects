const displayPopular = document.querySelector(".popular");
const displayTopRated = document.querySelector(".top-rated");
const displayPopularMovies = async () => {
  const res = await axios(
    "https://api.themoviedb.org/3/movie/popular?api_key=42d3f8d886180928e42d0cabfb523b63&language=en-US"
  );
  const movies = res.data.results;
  for (let movie of movies) {
    const box = document.createElement("div");
    box.classList.add("box");
    const img = document.createElement("img");
    img.src = `https://image.tmdb.org/t/p/w200/${movie.poster_path}`;
    box.appendChild(img);
    const title = document.createElement("span");
    title.textContent = movie.title;
    box.append(title);
    displayPopular.appendChild(box);
  }
};

const displayTopRatedMovies = async () => {
  const res = await axios.get(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=42d3f8d886180928e42d0cabfb523b63&language=en-US"
  );
  const movies = res.data.results;
  for (let movie of movies) {
    const box = document.createElement("div");
    box.classList.add("box");
    const img = document.createElement("img");
    img.src = `https://image.tmdb.org/t/p/w200/${movie.poster_path}`;
    box.appendChild(img);
    const title = document.createElement("span");
    title.textContent = movie.title;
    box.append(title);
    displayTopRated.appendChild(box);
  }
};

displayPopularMovies();
displayTopRatedMovies();
