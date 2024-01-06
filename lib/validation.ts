import { z } from "zod";

export const QuestionsSchema = z.object({
  title: z
    .string()
    .min(5, { message: "Title must contains atleast 5 characters" })
    .max(150),
  explanation: z
    .string()
    .min(30, { message: "Explanation must contain atleast 30 characters" }),
  tags: z
    .array(
      z
        .string()
        .min(2, { message: "Tag must contains atleast 2 characters" })
        .max(15)
    )
    .min(1, { message: "Must add atleast 1 tag" })
    .max(10),
});
