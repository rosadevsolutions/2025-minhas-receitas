// Criação de interface para tipos pai
// Forma da qual serão estendidos outros tipos
export type IRecipes = {
	id: number;
	title: string;
	description: string;
	cookingTimeMinutes: number;
	image: string;
};
