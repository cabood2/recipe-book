import { useEffect, useState } from "react";
import { Category } from "../components/CategoryGrid";
import axios from "axios";
import useRecipeStore from "../state-management/store";
import db from "../data/data.json";

const useCategories = () => {
  const { recipeQuery } = useRecipeStore();
  const [categories, setCategories] = useState<Category[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (recipeQuery.selectedFilter) {
      // Only show categories that have at least one recipe matching the filter
      const matchingRecipes = db.recipes.filter((recipe) =>
        (recipe as any).tags?.includes(recipeQuery.selectedFilter)
      );
      const matchingCategoryNames = new Set(
        matchingRecipes.map((r) => r.category)
      );
      setCategories(
        db.categories.filter((c) => matchingCategoryNames.has(c.name))
      );
    } else {
      setCategories(db.categories);
    }
  }, [recipeQuery]); // ADD dependency array

  return { categories, error, isLoading };
};

export default useCategories;
