import { useEffect, useState } from "react";
import { Category } from "../components/CategoryGrid";
import useRecipeStore from "../state-management/store";
import db from "../data/data.json";

export interface Recipe {
  id: number;
  name: string;
  slug: string;
  category: string;
  subCat?: string;
  author: string;
  ingredients: string[];
  directions: string;
  tags?: string[]; // ADD THIS
}

const useRecipes = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [error, setError] = useState("");

  const { recipeQuery } = useRecipeStore();

  useEffect(() => {
    let results = db.recipes;

    // Step 1: filter by category
    if (recipeQuery.category?.name === "Desserts") {
      results = results.filter(
        (recipe) => recipe.subCat === recipeQuery.subCat?.name
      );
    } else if (recipeQuery.category?.name) {
      results = results.filter(
        (recipe) => recipe.category === recipeQuery.category?.name
      );
    }

    // Step 2: filter by tag (gluten_free, under_30_min, high_protein)
    if (recipeQuery.selectedFilter) {
      results = results.filter((recipe) =>
        (recipe as any).tags?.includes(recipeQuery.selectedFilter)
      );
    }

    setRecipes(results);
  }, [recipeQuery]); // ADD dependency array to prevent infinite re-renders

  return { recipes, error };
};

export default useRecipes;
