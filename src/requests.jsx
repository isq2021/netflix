const API_KEY = "b476299faf4876eeee6c13a37ea60d0c";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumantaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};
export default requests;

//https://api.themoviedb.org/3/discover/tv?api_key=b476299faf4876eeee6c13a37ea60d0c&with_networks=213

//https://api.themoviedb.org/3/discover/tv?api_key=b476299faf4876eeee6c13a37ea60d0c&with_networks=213

//https://api.themoviedb.org/3/discover/movie?api_key=b476299faf4876eeee6c13a37ea60d0c&with_genres=28
//https://api.themoviedb.org/3/discover/movie?api_key=b476299faf4876eeee6c13a37ea60d0c&with_genres=99
