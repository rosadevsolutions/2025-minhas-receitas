import z from "zod";

export const recipesSchema = z.object({
  title: z.string().min(5,"Título obrigatório"),
	description: z.string().max(500,"Máximo de 500 caracteres"),
	cookingTimeMinutes: z.string(),
	image: z.string(),
});
