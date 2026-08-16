"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import {
  Controller,
  type DefaultValues,
  type FieldValues,
  type Path,
  type Resolver,
  useForm,
} from "react-hook-form";
import type { z } from "zod";

import { SocialAuthForms } from "@/components/forms/SocialAuthForms";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

type AuthFormType = "SIGN_IN" | "SIGN_UP";

type AuthFormProps<T extends FieldValues> = {
  title: string;
  schema: z.ZodType<T>;
  defaultValues: T;
  formType: AuthFormType;
  onSubmit: (data: T) => Promise<void> | void;
  switchPrompt: string;
  switchHref: string;
  switchLabel: string;
  forgotPasswordHref?: string;
};

const AuthForm = <T extends FieldValues>({
  title,
  schema,
  defaultValues,
  formType,
  onSubmit,
  switchPrompt,
  switchHref,
  switchLabel,
  forgotPasswordHref,
}: AuthFormProps<T>) => {
  const form = useForm<T>({
    resolver: zodResolver(schema as never) as Resolver<T>,
    defaultValues: defaultValues as DefaultValues<T>,
  });

  const isSubmitting = form.formState.isSubmitting;

  return (
    <section className="w-full max-w-130 rounded-[10px] border light-border background-light800_dark200 px-4 py-10 shadow-light100_dark100 sm:px-8">
      <header className="mb-8 flex-between gap-4">
        <div>
          <h1 className="h2-bold text-dark100_light900">{title}</h1>
          <p className="mt-1 paragraph-regular text-dark500_light400">
            to continue to Fellopers
          </p>
        </div>
        <Image
          src="/images/site-logo.svg"
          width={40}
          height={40}
          alt="Fellopers"
        />
      </header>

      <form
        onSubmit={form.handleSubmit(onSubmit)}
        noValidate
        className="flex flex-col gap-5"
      >
        <FieldGroup>
          {(Object.keys(defaultValues) as Path<T>[]).map((name) => (
            <Controller
              key={name}
              name={name}
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className="gap-2">
                  <FieldLabel
                    htmlFor={field.name}
                    className="paragraph-medium text-dark400_light700"
                  >
                    {getFieldLabel(field.name)}
                  </FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    type={getFieldType(field.name)}
                    autoComplete={getAutoComplete(field.name, formType)}
                    aria-invalid={fieldState.invalid}
                    className="min-h-12 border-light-700 background-light900_dark300 paragraph-regular no-focus dark:border-transparent"
                  />
                  {fieldState.invalid ? (
                    <FieldError errors={[fieldState.error]} />
                  ) : null}
                </Field>
              )}
            />
          ))}
        </FieldGroup>

        {forgotPasswordHref ? (
          <Link
            href={forgotPasswordHref}
            className="self-end body-medium text-link"
          >
            Forgot password?
          </Link>
        ) : null}

        <Button
          type="submit"
          disabled={isSubmitting}
          className="min-h-12 w-full paragraph-semibold text-white primary-gradient hover:opacity-90"
        >
          {isSubmitting
            ? formType === "SIGN_IN"
              ? "Signing in..."
              : "Creating account..."
            : "Continue"}
        </Button>
      </form>

      <p className="mt-6 text-center body-regular text-dark500_light400">
        {switchPrompt}{" "}
        <Link href={switchHref} className="paragraph-semibold text-primary-500">
          {switchLabel}
        </Link>
      </p>

      <div className="mt-6">
        <SocialAuthForms />
      </div>
    </section>
  );
};

function getFieldLabel(name: string) {
  if (name === "email") return "Email address";
  return name.charAt(0).toUpperCase() + name.slice(1);
}

function getFieldType(name: string): React.HTMLInputTypeAttribute {
  if (name === "email") return "email";
  if (name === "password") return "password";
  return "text";
}

function getAutoComplete(name: string, formType: AuthFormType) {
  if (name === "email") return "email";
  if (name === "username") return "username";
  if (name === "password") {
    return formType === "SIGN_IN" ? "current-password" : "new-password";
  }
  return "on";
}

export default AuthForm;
