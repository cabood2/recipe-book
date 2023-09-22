import { useEffect, useState } from "react";
import { Category } from "../components/CategoryGrid";
import axios from "axios";
import useRecipeStore from "../state-management/store";

export interface Recipe {
  name: string;
  id: number;
  category: Category;
  ingredients: string[];
  directions: string;
  author: string;
}

const useRecipes = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [error, setError] = useState("");

  const { recipeQuery } = useRecipeStore();

  useEffect(() => {
    axios
      .get<Recipe[]>(
        "https://my-json-server.typicode.com/cabood2/recipe-book/recipes",
        {
          params: {
            slug: recipeQuery.searchText,
            category: recipeQuery.category?.name,
          },
        }
      )
      .then((res) => setRecipes(res.data));
  }, [recipeQuery]);

  return { recipes, error };
};

export default useRecipes;

//http://localhost:3000/recipes
