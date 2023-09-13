import { Router } from "express";
import { randomUUID } from "node:crypto";
import { readJSON } from "../utils.js";
import { validateMovie, validatePartialMovie } from "../schemas/movies.js";
import { MovieModel } from "../models/movie.js";

// import { createRequire } from "node:module";
// const require = createRequire(import.meta.url);
// export const readJSON = (path) => require(path);

const movies = await readJSON("./movies.json");
export const moviesRouter = Router();
//------------------------------------------------
moviesRouter.get("/", async (req, res) => {
  const { genre } = req.query;
  const movies = await MovieModel.getAll({ genre });
  res.json(movies);
});
//-------------------------------------------------
moviesRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  const movie = await MovieModel.getById({ id });
  if (movie) return res.json(movie);
  res.status(404).json({ message: "Movie not found" });
});
//-----------------------------------------------
moviesRouter.post("/", async (req, res) => {
  const result = validateMovie(req.body);
  if (!result.success) {
    //422 Unprocesable Entity
    return res.status(400).json({ error: JSON.parse(result.error.message) });
  }
  const newMovie = await MovieModel.create(result.data);
  res.status(201).json(newMovie);
});
//-----------------------------------------------
moviesRouter.delete("/:id", (req, res) => {
  const { id } = req.params;
  const movieIndex = movies.findIndex((movie) => movie.id === id);

  if (movieIndex === -1) {
    return res.status(404).json({ message: "Movie not found" });
  }

  movies.splice(movieIndex, 1);

  return res.json({ message: "Movie deleted" });
});

moviesRouter.patch("/:id", (req, res) => {
  const result = validatePartialMovie(req.body);

  if (!result.success) {
    return res.status(400).json({ error: JSON.parse(result.error.message) });
  }

  const { id } = req.params;
  const movieIndex = findIndex((movie) => movie.id === id);

  if (movieIndex === -1) {
    return res.status(404).json({ message: "Movie not found" });
  }

  const updateMovie = {
    ...movies[movieIndex],
    ...result.data,
  };

  movies[movieIndex] = updateMovie;

  return res.json(updateMovie);
});
