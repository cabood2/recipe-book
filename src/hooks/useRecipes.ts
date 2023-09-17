import { useEffect, useState } from "react";
import { Category } from "../components/CategoryGrid";
import axios from "axios";
import { GameQuery } from "../App";

export interface Recipe {
  name: string;
  id: number;
  category: Category;
  ingredients: string[];
  directions: string;
  author: string;
}

const useRecipes = (gameQuery: GameQuery) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get<Recipe[]>(
        "https://my-json-server.typicode.com/cabood2/recipe-book/recipes",
        {
          params: {
            slug: gameQuery.searchText,
            category: gameQuery.category?.name,
          },
        }
      )
      .then((res) => setRecipes(res.data));
  }, [gameQuery]);

  return { recipes, error };
};

export default useRecipes;

//http://localhost:3000/recipes
