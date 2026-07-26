import express, { Request, Response, Application } from "express";
import cors from "cors";
import * as RecipeAPI from "./recipe-api";

const app: Application = express();

app.use(express.json());
app.use(cors());

app.get("/api/recipes/search", async (req: Request, res: Response) => {
  try {
    const searchTerm = req.query.searchTerm as string;
    const page = parseInt(req.query.page as string) || 1;

    if (!searchTerm) {
      res.status(400).json({ error: "searchTerm is required" });
      return;
    }

    const results = await RecipeAPI.searchRecipes(searchTerm, page);
    res.json(results);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("🔥 ERROR:", error);
    res.status(500).json({ error: message });
  }
});

app.listen(5000, () => {
  console.log("Server running on localhost:5000");
});