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

  // useEffect(() => {
  //   axios
  //     .get<Category[]>(
  //       "../data/categories.json",
  //       //  "https://my-json-server.typicode.com/cabood2/recipe-book/categories",
  //       {
  //         params: {
  //           slug: recipeQuery.searchText,
  //         },
  //       }
  //     )
  //     .then((res) => setCategories(res.data));
  // }, [recipeQuery]);
  useEffect(() => {
    setCategories(db.categories);
  });

  return { categories, error, isLoading };
};

export default useCategories;
