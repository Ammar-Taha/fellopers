"use server";

import { signIn } from "@/auth";
import { isSocialProvider } from "@/constants/auth";
import ROUTES from "@/constants/routes";

export async function signInWithOAuth(formData: FormData) {
  const provider = formData.get("provider");

  if (!isSocialProvider(provider)) {
    throw new Error("Unsupported OAuth provider");
  }

  await signIn(provider, {
    redirectTo: ROUTES.HOME,
  });
}
