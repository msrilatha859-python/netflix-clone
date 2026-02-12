const API_TOKEN = "PASTE_YOUR_TMDB_READ_ACCESS_TOKEN";

export const fetchTrendingMovies = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/trending/movie/week",
    {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );

  const data = await res.json();
  return data.results;
};