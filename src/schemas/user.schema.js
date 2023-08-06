import z, { object } from "zod";

const userSchema = z.object({
  name: z
    .string({
      required_error: "Name is required",
    })
    .max(20),
  profession: z.array(
    z.enum(["Programador", "Carpintero", "Doctor", "Electricista"], {
      required_error: "Profession is required",
    })
  ),
});

export const validateUser = (object) => {
  return userSchema.safeParse(object);
};

export const validatePartialUser = (object) => {
  return userSchema.partial().safeParse(object);
};
