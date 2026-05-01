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
import Link from "next/link";
import { redirect } from "next/navigation";
import { FaGoogle } from "react-icons/fa";

const SignInPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();

    const fromData = new FormData(e.currentTarget);
    const data = Object.fromEntries(fromData.entries());

    const { data: authData, error } = await authClient.signIn.email({
      email: data.email,
      password: data.password,
      callbackURL: "/",
    });

    if (authData) {
      alert("SignIn Successful!");
    }

    if (error) {
      alert(error.message);
      return;
    }

    redirect("/");
  };

  const handleGoogleLogIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="my-15 md:my-25 flex justify-center items-center px-2">
      <Form
        className="p-10 rounded-md border bg-white space-y-5"
        onSubmit={onSubmit}
      >
        <h2 className="text-center font-bold text-2xl mb-5">Sign In</h2>

        <TextField isRequired name="email" type="email">
          <Label>Email</Label>
          <Input placeholder="Enter Your Email." />
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
            Sign In
          </Button>

          <Button onClick={handleGoogleLogIn} className={"w-full"}>
            <FaGoogle /> Sign In with Google
          </Button>
        </div>

        <div className="flex items-center gap-2 justify-center text-[14px]">
          <p>If you don't have Account |</p>
          <Link href={"/signup"}>
            <span className="text-[#FF653F] font-bold"> Sign Up</span>
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default SignInPage;
