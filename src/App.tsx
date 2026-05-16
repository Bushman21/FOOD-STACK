import React, { useState, FormEvent } from "react";
import { searchRecipes } from "./API";

const App = () => {
  // ... previous state setup

  const handleSearchSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const { results } = await searchRecipes(searchTerm, 1);
      setRecipes(results);
    } catch (error) {
      console.error(error);
    }
  };

};