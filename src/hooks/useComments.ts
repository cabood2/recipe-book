import { useEffect, useState } from "react";
import { Category } from "../components/CategoryGrid";
import axios from "axios";
import useRecipeStore from "../state-management/store";
import db from "../../db.json";
import { Remark } from "../components/Form";

const useComments = () => {
  const { recipeQuery } = useRecipeStore();
  const [comments, setComments] = useState<Remark[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axios
      .get<Remark[]>(
        "https://my-json-server.typicode.com/cabood2/recipe-book/comments",
        {
          params: {
            recipe: recipeQuery.recipe?.slug,
          },
        }
      )
      .then((res) => setComments(res.data));
  }, [recipeQuery]);

  // useEffect(() => {
  //   setComments(db.comments);
  // });

  return { comments, error, isLoading };
};

export default useComments;
