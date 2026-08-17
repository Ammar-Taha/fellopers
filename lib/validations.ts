import { z } from "zod";

export const SignInSchema = z.object({
  email: z.email("Please provide a valid email address."),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters.")
    .max(100, "Password cannot exceed 100 characters."),
});

export const SignUpSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters.")
    .max(30, "Username cannot exceed 30 characters.")
    .regex(
      /^[a-zA-Z0-9_]+$/,
      "Username can only contain letters, numbers, and underscores.",
    ),
  email: z.email("Please provide a valid email address."),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters.")
    .max(100, "Password cannot exceed 100 characters.")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter.")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter.")
    .regex(/[0-9]/, "Password must contain at least one number.")
    .regex(
      /[^a-zA-Z0-9]/,
      "Password must contain at least one special character.",
    ),
});

export type SignInValues = z.infer<typeof SignInSchema>;
export type SignUpValues = z.infer<typeof SignUpSchema>;

export const AskQuestionSchema = z.object({
  title: z
    .string()
    .min(5, "Title must be at least 5 characters.")
    .max(130, "Title cannot exceed 130 characters."),
  content: z.string().min(20, "Content must be at least 20 characters."),
  tags: z
    .array(
      z
        .string()
        .min(1, "Tag cannot be empty.")
        .max(15, "Tag cannot exceed 15 characters."),
    )
    .min(1, "Please add at least one tag.")
    .max(5, "You can add a maximum of 5 tags."),
});

export type AskQuestionValues = z.infer<typeof AskQuestionSchema>;
