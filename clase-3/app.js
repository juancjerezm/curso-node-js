const express = require("express");
const movies = require("./movies.json");
const crypto = require("node:crypto");
const z =require('zod')

const app = express();
app.use(express.json());

app.disable("x-powered-by");

app.get("/", (req, res) => {
  res.json({ message: "hola mundo" });
});

app.get("/movies", (req, res) => {
  const { genre } = req.query;
  if (genre) {
    const filterMovies = movies.filter((movie) =>
      movie.genre.some((g) => g.toLowerCase() === genre.toLowerCase())
    );
    return res.json(filterMovies);
  }
  res.json(movies);
});

app.post("/movies", (req, res) => {
  const movieSchema = z.object({
    title: z.string({
      invalid_type_error: 'Movie title must be a string',
      required_error: 'Movie title is requred'
    }),
    year : z.number().int().min(1900).max(2024),
    
  })
  movies.push(newMovie);
  res.status(201).json(newMovie);
});

app.get("/movies/:id", (req, res) => {
  const { id } = req.params;
  const movie = movies.find((movie) => movie.id === id);
  if (movie) return res.json(movie);
  res.status(404).json({ message: "movie not found" });
});

const PORT = process.env.PORT ?? 3001;

app.listen(PORT, () => {
  console.log(`server running on port http://localhost:${PORT}`);
});
