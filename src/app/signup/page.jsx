"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

import { FaGoogle } from "react-icons/fa";

const SignUpPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const { data: authData, error } = await authClient.signUp.email({
      name: data.name,
      email: data.email,
      password: data.password,
      image: data.image,
      callbackURL: "/",
    });

    if (authData) {
      alert("SignUp successful!");
    }

    if (error) {
      alert(error.message);
      return;
    }
  };

  return (
    <div className="my-15 md:my-25 flex justify-center items-center px-2">
      <Form
        className="p-10 rounded-md border bg-white space-y-5"
        onSubmit={onSubmit}
      >
        <h2 className="text-center font-bold text-2xl mb-5">Sign Up</h2>

        <TextField isRequired name="name" type="text">
          <Label>Name</Label>
          <Input placeholder="Enter Your Name." />
          <FieldError />
        </TextField>

        <TextField isRequired name="email" type="email">
          <Label>Email</Label>
          <Input placeholder="Enter Your Email." />
          <FieldError />
        </TextField>

        <TextField name="image" type="text">
          <Label>Image</Label>
          <Input placeholder="Enter Your Image URL." />
          <FieldError />
        </TextField>

        <TextField isRequired minLength={8} name="password" type="password">
          <Label>Password</Label>
          <Input placeholder="Enter your password" />
          <Description className="mt-1">
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>

        <div className="mt-4 flex flex-col gap-2">
          <Button className={"w-full"} type="submit">
            Sign Up
          </Button>

          <Button className={"w-full"}>
            <FaGoogle /> Sign Up with Google
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default SignUpPage;
