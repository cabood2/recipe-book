import { useEffect, useState } from "react";
import { Category } from "../components/CategoryGrid";
import axios from "axios";
import { GameQuery } from "../App";

const useCategories = (gameQuery: GameQuery) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get<Category[]>(
        "http://localhost:3000/categories",
        //  "https://my-json-server.typicode.com/cabood2/recipes1/categories",
        {
          params: {
            slug: gameQuery.searchText,
            // slug: gameQuery.searchText,
            //search: "pork",
            //slug: "chicken",
            // search: gameQuery.searchText,
          },
        }
      )
      .then((res) => setCategories(res.data));
  }, [gameQuery]);

  return { categories, error };
};

export default useCategories;
