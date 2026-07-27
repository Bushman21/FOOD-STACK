// src/App.tsx
import React, { FormEvent, useState } from "react";
import { searchRecipes } from "./API";

const App = () => {
  
  const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [recipes, setRecipes] = useState([]);

return (
const handleSearchSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const { results } = await searchRecipes(searchTerm, 1);
      setRecipes(results);
    } catch (error) {
      console.error(error);
);
};

export default App;