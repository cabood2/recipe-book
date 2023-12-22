import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Button,
} from "@chakra-ui/react";
import { FieldValues, useForm } from "react-hook-form";
import CommentList from "./CommentList";
import { useEffect, useState } from "react";
import useRecipes from "../hooks/useRecipes";
import useRecipeStore from "../state-management/store";
import useComments from "../hooks/useComments";
import axios from "axios";

export interface Remark {
  title: string;
  comment: string;
  recipe: string | undefined;
}

// interface Props {
//   commentLog: Remark[];
// }
// { commentLog }: Props

const Form = () => {
  const { comments } = useComments();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Remark>();

  const { recipeQuery } = useRecipeStore();

  const onSubmit = (data: Remark) => {
    data.recipe = recipeQuery.recipe?.slug;
    useEffect(() => {
      axios.post<Remark[]>(
        "https://my-json-server.typicode.com/cabood2/recipe-book/comments",
        data
      );
    }, [recipeQuery]);

    comments.push(data);
    console.log(comments);
  };

  return (
    <>
      <FormControl>
        <FormLabel>Title</FormLabel>
        <Input {...register("title", { required: true })} type="text"></Input>
        {errors.title?.type === "required" && (
          <FormHelperText>Title required</FormHelperText>
        )}
        <FormLabel>Comment</FormLabel>
        <Input {...register("comment", { required: true })} type="text"></Input>
        {errors.comment?.type === "required" && (
          <FormHelperText>Comment required</FormHelperText>
        )}
        <Button disabled={!isValid} onClick={handleSubmit(onSubmit)}>
          Post
        </Button>
      </FormControl>
      <CommentList commentLog={comments} />
    </>
  );
};

export default Form;
