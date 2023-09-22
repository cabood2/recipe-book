import { create } from "zustand";
import { Recipe } from "../hooks/useRecipes";
import { Category } from "../components/CategoryGrid";

interface RecipeQuery {
  category?: Category;
  recipe?: Recipe;
  searchText?: string;
}
interface RecipeQueryStore {
  recipeQuery: RecipeQuery;
  setCategory: (category: Category) => void;
  setRecipe: (recipe: Recipe) => void;
  setSearchText: (searchText: string) => void;
}

const useRecipeStore = create<RecipeQueryStore>((set) => ({
  recipeQuery: {},
  setCategory: (category) =>
    set((store) => ({ recipeQuery: { ...store.recipeQuery, category } })),
  setRecipe: (recipe) =>
    set((store) => ({ recipeQuery: { ...store.recipeQuery, recipe } })),
  setSearchText: (searchText) => set(() => ({ recipeQuery: { searchText } })),
}));

export default useRecipeStore;
