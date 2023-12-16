import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Button,
} from "@chakra-ui/react";
import { FieldValues, useForm } from "react-hook-form";

interface FormData {
  title: string;
  comment: string;
}

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>();

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
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
  );
};

export default Form;
