import { useEffect, useState } from "react";
import { Category } from "../components/CategoryGrid";
import axios from "axios";
import useRecipeStore from "../state-management/store";
import db from "../data/db.json";

export interface Recipe {
  id: number;
  name: string;
  slug: string;
  category: string; //Category;
  author: string;
  ingredients: string[];
  directions: string;
}

const useRecipes = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [error, setError] = useState("");

  const { recipeQuery } = useRecipeStore();

  // useEffect(() => {
  //   axios
  //     .get<Recipe[]>(
  //       "../data/db.json",
  //       // "https://my-json-server.typicode.com/cabood2/recipe-book/recipes",
  //       {
  //         params: {
  //           name: recipeQuery.searchText,
  //           category: recipeQuery.category?.name,
  //         },
  //       }
  //     )
  //     .then((res) => setRecipes(res.data));
  // }, [recipeQuery]);

  useEffect(() => {
    setRecipes(
      db.recipes.filter(
        (recipe) => recipe.category === recipeQuery.category?.name
      )
    );
  });

  return { recipes, error };
};

export default useRecipes;

//http://localhost:3000/recipes
