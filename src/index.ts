import express from "express";
import cors from "cors";
import * as RecipeAPI from "./recipe-api";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/api/recipes/search", async (req, res) => {
  try {
    const searchTerm = req.query.searchTerm as string;
    const page = parseInt(req.query.page as string) || 1;

    if (!searchTerm) {
      return res.status(400).json({ error: "searchTerm is required" });
    }

    const results = await RecipeAPI.searchRecipes(searchTerm, page);
    return res.json(results);
  } catch (error: any) {
    console.error("🔥 ERROR:", error);
    return res.status(500).json({ error: error.message });
  }
});

app.listen(5000, () => {
  console.log("Server running on localhost:5000");
});