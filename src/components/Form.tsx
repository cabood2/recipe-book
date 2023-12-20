import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Button,
} from "@chakra-ui/react";
import { FieldValues, useForm } from "react-hook-form";
import CommentList from "./CommentList";
import { useState } from "react";

export interface Remark {
  title: string;
  comment: string;
}

interface Props {
  commentLog: Remark[];
}

const Form = ({ commentLog }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Comment>();

  const onSubmit = (data: Comment) => {
    commentLog.push(data);
    console.log(commentLog);
  };

  //   const {commentLog} = useComments();

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
      <CommentList commentLog={commentLog} />
    </>
  );
};

export default Form;
