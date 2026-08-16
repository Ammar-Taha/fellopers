"use client";

import AuthForm from "@/components/forms/AuthForm";
import ROUTES from "@/constants/routes";
import { SignInSchema, type SignInValues } from "@/lib/validations";

const SignIn = () => {
  async function handleSignIn(data: SignInValues) {
    console.log(data);
  }

  return (
    <AuthForm
      title="Sign in"
      schema={SignInSchema}
      defaultValues={{ email: "", password: "" }}
      formType="SIGN_IN"
      onSubmit={handleSignIn}
      forgotPasswordHref="/forgot-password"
      switchPrompt="Don't have an account?"
      switchHref={ROUTES.SIGN_UP}
      switchLabel="Sign up"
    />
  );
};

export default SignIn;
