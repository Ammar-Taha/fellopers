"use client";

import AuthForm from "@/components/forms/AuthForm";
import ROUTES from "@/constants/routes";
import { SignUpSchema, type SignUpValues } from "@/lib/validations";

const SignUp = () => {
  async function handleSignUp(data: SignUpValues) {
    console.log(data);
  }

  return (
    <AuthForm
      title="Create your account"
      schema={SignUpSchema}
      defaultValues={{ username: "", email: "", password: "" }}
      formType="SIGN_UP"
      onSubmit={handleSignUp}
      switchPrompt="Already have an account?"
      switchHref={ROUTES.SIGN_IN}
      switchLabel="Sign in"
    />
  );
};

export default SignUp;
