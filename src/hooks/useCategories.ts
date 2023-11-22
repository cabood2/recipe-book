import { useEffect, useState } from "react";
import { Category } from "../components/CategoryGrid";
import axios from "axios";
import useRecipeStore from "../state-management/store";

const useCategories = () => {
  const { recipeQuery } = useRecipeStore();
  const [categories, setCategories] = useState<Category[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axios
      .get<Category[]>(
        "https://my-json-server.typicode.com/cabood2/recipe-book/categories",
        {
          params: {
            slug: recipeQuery.searchText,
          },
          maxContentLength: 100,
        }
      )
      .then((res) => setCategories(res.data));
  }, [recipeQuery]);

  return { categories, error, isLoading };
};

export default useCategories;
