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

  ({ data: null, isLoading: false, error: null });
  // useEffect(() => {
  //   axios
  //     .get<Recipe[]>("http://localhost:3000/recipes", {
  //       params: {
  //         slug: gameQuery.searchText,
  //         category: gameQuery.category?.name,
  //       },
  //     })
  //     .then((res) => setRecipes(res.data));
  // }, [gameQuery]);

  return { recipes, error };
};

export default useRecipes;
