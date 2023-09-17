import { Router } from "express";

import { MovieController } from "../controllers/movies.js";

// import { createRequire } from "node:module";
// const require = createRequire(import.meta.url);
// export const readJSON = (path) => require(path);

export const moviesRouter = Router();

moviesRouter.get("/", MovieController.getAll);

moviesRouter.get("/:id", MovieController.getById);

moviesRouter.post("/", MovieController.create);

moviesRouter.delete("/:id", MovieController.delete);

moviesRouter.patch("/:id", MovieController.update);
