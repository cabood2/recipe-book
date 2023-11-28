import { useEffect, useState } from "react";
import { Category } from "../components/CategoryGrid";
import axios from "axios";
import useRecipeStore from "../state-management/store";
import db from "../data/db.json";



const useCategories = () => {
  const { recipeQuery } = useRecipeStore();
  const [categories, setDessertCategories] = useState<Category[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setDessertCategories(db.dessertCategories);
  });

  return { categories, error, isLoading };
};

export default useCategories;
