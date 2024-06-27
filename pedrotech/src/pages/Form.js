import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

export default function Form() {
  const schema = yup.object().shape({
    fullName: yup.string().required("Name is required"),
    email: yup.string().email("Email is required"),
    age: yup.number().positive().integer().min(18).required("age is required"),
    password: yup.string().min(4).max(12).required("password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null,"Password Dont Match"])
      .required("Should be same as password"),
  });

  const { register, handleSubmit,formState:{errors} } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Full Name." {...register("fullName")} />
      <p>{errors.fullName?.message}</p>
      <input type="text" placeholder="Email." {...register("email")} />
      <p>{errors.email?.message}</p>
      <input type="number" placeholder="Age." {...register("age")} />
      <p>{errors.age?.message}</p>

      <input
        type="password"
        placeholder="Password."
        {...register("password")}
      />
            <p>{errors.password?.message}</p>

      <input
        type="password"
        placeholder="Confirm Password"
        {...register("confirmPassword")}
      />
       <p>{errors.confirmPassword?.message}</p>
      <input type="submit" />
    </form>
  );
}
