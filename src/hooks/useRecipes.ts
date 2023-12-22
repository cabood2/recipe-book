import { useEffect, useState } from "react";
import { Category } from "../components/CategoryGrid";
import axios from "axios";
import useRecipeStore from "../state-management/store";
import db from "../data/data.json";
import RecipeDetails from "../pages/RecipeDetails";

export interface Recipe {
  id: number;
  name: string;
  slug: string;
  category: string; //Category;
  subCat?: string;
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
      recipeQuery.category?.name === "Desserts"
        ? db.recipes.filter(
            (recipe) => recipe.subCat === recipeQuery.subCat?.name
          )
        : db.recipes.filter(
            (recipe) => recipe.category === recipeQuery.category?.name
          )
    );
  });

  // useEffect(() => {
  //   if (recipeQuery.searchText !== null)
  //     setRecipes(
  //       db.recipes.filter((recipe) => recipeQuery.searchText == recipe.slug)
  //     );
  //   // {
  //   //   recipeQuery.searchText == "";
  //   // }
  // });
  return { recipes, error };
};

export default useRecipes;

//http://localhost:3000/recipes
