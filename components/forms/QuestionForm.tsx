"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, type Resolver, useForm } from "react-hook-form";

import TagCard from "@/components/cards/TagCard";
import Editor from "@/components/editor";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { POPULAR_TAGS } from "@/constants/right-sidebar";
import { AskQuestionSchema, type AskQuestionValues } from "@/lib/validations";

const QuestionForm = () => {
  const form = useForm<AskQuestionValues>({
    resolver: zodResolver(AskQuestionSchema) as Resolver<AskQuestionValues>,
    defaultValues: {
      title: "",
      content: "",
      tags: [],
    },
  });

  const isSubmitting = form.formState.isSubmitting;

  const handleSubmit = async (data: AskQuestionValues) => {
    console.log(data);
  };

  const handleTagKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
    tags: string[],
  ) => {
    if (event.key !== "Enter" && event.key !== ",") return;

    event.preventDefault();

    const value = event.currentTarget.value.trim().replace(/,$/, "");
    if (!value) return;

    if (tags.length >= 5) {
      form.setError("tags", {
        type: "manual",
        message: "You can add a maximum of 5 tags.",
      });
      return;
    }

    if (value.length > 15) {
      form.setError("tags", {
        type: "manual",
        message: "Tag cannot exceed 15 characters.",
      });
      return;
    }

    if (tags.includes(value)) {
      form.setError("tags", {
        type: "manual",
        message: "This tag has already been added.",
      });
      return;
    }

    form.setValue("tags", [...tags, value], { shouldValidate: true });
    form.clearErrors("tags");
    event.currentTarget.value = "";
  };

  return (
    <form
      onSubmit={form.handleSubmit(handleSubmit)}
      noValidate
      className="flex w-full flex-col gap-10 rounded-[10px] border light-border background-light900_dark200 p-6 sm:px-10"
    >
      <FieldGroup className="gap-10">
        <Controller
          name="title"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid} className="gap-3.5">
              <FieldLabel
                htmlFor={field.name}
                className="paragraph-semibold text-dark400_light800"
              >
                Question Title <span className="text-primary-500">*</span>
              </FieldLabel>
              <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                className="min-h-12 border-light-700 background-light900_dark300 paragraph-regular no-focus dark:border-transparent"
              />
              {fieldState.invalid ? (
                <FieldError errors={[fieldState.error]} />
              ) : (
                <FieldDescription className="body-regular text-light-500">
                  Be specific and imagine you&apos;re asking a question to
                  another person.
                </FieldDescription>
              )}
            </Field>
          )}
        />

        <Controller
          name="content"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid} className="gap-3.5">
              <FieldLabel className="paragraph-semibold text-dark400_light800">
                Detailed explanation of your problem?{" "}
                <span className="text-primary-500">*</span>
              </FieldLabel>
              <Editor value={field.value} fieldChange={field.onChange} />
              {fieldState.invalid ? (
                <FieldError errors={[fieldState.error]} />
              ) : (
                <FieldDescription className="body-regular text-light-500">
                  Introduce the problem and expand on what you put in the title.
                  Use a code block for syntax-highlighted snippets. Minimum 20
                  characters.
                </FieldDescription>
              )}
            </Field>
          )}
        />

        <Controller
          name="tags"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid} className="gap-3.5">
              <FieldLabel
                htmlFor={field.name}
                className="paragraph-semibold text-dark400_light800"
              >
                Tags <span className="text-primary-500">*</span>
              </FieldLabel>
              <Input
                id={field.name}
                aria-invalid={fieldState.invalid}
                onKeyDown={(event) => handleTagKeyDown(event, field.value)}
                className="min-h-12 border-light-700 background-light900_dark300 paragraph-regular no-focus dark:border-transparent"
              />
              {field.value.length > 0 ? (
                <div className="mt-2.5 flex-start flex-wrap gap-2.5">
                  {field.value.map((tag) => {
                    const popularTag = POPULAR_TAGS.find(
                      (item) => item.name.toLowerCase() === tag.toLowerCase(),
                    );

                    return (
                      <TagCard
                        key={tag}
                        _id={popularTag?._id ?? tag}
                        name={tag}
                        compact
                        mark={popularTag?.mark}
                        markClassName={popularTag?.markClassName}
                        onRemove={() =>
                          field.onChange(
                            field.value.filter((item) => item !== tag),
                          )
                        }
                      />
                    );
                  })}
                </div>
              ) : null}
              {fieldState.invalid ? (
                <FieldError errors={[fieldState.error]} />
              ) : (
                <FieldDescription className="body-regular text-light-500">
                  Add up to 5 tags to describe what your question is about.
                  Start typing to see suggestions.
                </FieldDescription>
              )}
            </Field>
          )}
        />
      </FieldGroup>

      <div className="flex justify-end">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="min-h-10 w-fit px-4 py-3 paragraph-medium text-light-900 primary-gradient"
        >
          {isSubmitting ? "Posting..." : "Ask a Question"}
        </Button>
      </div>
    </form>
  );
};

export default QuestionForm;
