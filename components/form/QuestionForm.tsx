"use client";
import React, { useRef } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { QuestionsSchema } from "@/lib/validation";
import { Editor } from "@tinymce/tinymce-react";

const QuestionForm = () => {
  const editorRef = useRef(null);
  // 1. Define your form.
  const form = useForm<z.infer<typeof QuestionsSchema>>({
    resolver: zodResolver(QuestionsSchema),
    defaultValues: {
      title: "",
      explanation: "",
      tags: [],
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof QuestionsSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 flex flex-col gap-10"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="w-full flex flex-col">
              <FormLabel className="text-base leading-[22.8px] font-semibold font-inter flex gap-[2px] text-dark400_light800">
                Question Title
                <span className="text-primary-500">*</span>
              </FormLabel>
              <FormControl className="min-h-[53px] rounded-md background-light800_dark300">
                <Input
                  {...field}
                  className=" no-focus outline-none  light-border-2 text-light-400 dark:text-light-500 "
                />
              </FormControl>
              <FormDescription className="text-light-500 text-sm font-inter font-normal leading-[19.6px]">
                Be specific and imagine you’re asking a question to another
                person.
              </FormDescription>
              <FormMessage className="text-[#FF2121]" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="explanation"
          render={({ field }) => (
            <FormItem className="w-full flex flex-col">
              <FormLabel className="text-base leading-[22.8px] font-semibold font-inter flex gap-[2px] text-dark400_light800">
                Detailed explanation of your problem?
                <span className="text-primary-500">*</span>
              </FormLabel>
              <FormControl className="min-h-[53px] rounded-md background-light800_dark300">
                <Editor
                  apiKey={process.env.NEXT_PUBLIC_TINY_EDITOR_KEY}
                  onInit={(evt, editor) =>
                    //@ts-ignore
                    (editorRef.current = editor)
                  }
                  initialValue=""
                  init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                      "advlist",
                      "autolink",
                      "lists",
                      "link",
                      "image",
                      "charmap",
                      "preview",
                      "anchor",
                      "searchreplace",
                      "visualblocks",
                      "code",
                      "fullscreen",
                      "insertdatetime",
                      "media",
                      "table",
                      "code",
                      "codesample",
                    ],
                    toolbar:
                      "undo redo | blocks " +
                      "codesample bold italic forecolor | alignleft aligncenter " +
                      "alignright alignjustify | bullist numlist outdent indent | ",
                    content_style: "body { font-family:Inter; font-size:14px }",
                  }}
                />
              </FormControl>
              <FormDescription className="text-light-500 text-sm font-inter font-normal leading-[19.6px]">
                Introduce the problem and expand on what you put in the title.
                Minimum 20 characters.
              </FormDescription>
              <FormMessage className="text-[#FF2121]" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem className="w-full flex flex-col">
              <FormLabel className="text-base leading-[22.8px] font-semibold font-inter flex gap-[2px] text-dark400_light800">
                Tags
                <span className="text-primary-500">*</span>
              </FormLabel>
              <FormControl className="min-h-[53px] rounded-md background-light800_dark300">
                <Input className=" no-focus   light-border-2 text-light-400 dark:text-light-500 " />
              </FormControl>
              <FormDescription className="text-light-500 text-sm font-inter font-normal leading-[19.6px]">
                Add up to 5 tags to describe what your question is about. Start
                typing to see suggestions.
              </FormDescription>
              <FormMessage className="text-[#FF2121]" />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="paragraph-medium px-4 py-3 min-h-[48px] w-fit mx-auto primary-gradient text-light-900"
        >
          Ask a Question
        </Button>
      </form>
    </Form>
  );
};

export default QuestionForm;
