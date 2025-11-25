import { configureStore } from "@reduxjs/toolkit";
import recipesSlice from "./features/recipes/recipesSlices";

//store recebe um objeto
export const store = configureStore({
  reducer: {
    recipes: recipesSlice,
  },
});

// Exportar os tipos do redux.
// Util no consumo dos dados da store.
// RootState - recebe ReturnType (o retorno dos tipos) dos estados armazenados na store
export type RootState = ReturnType<typeof store.getState>;

// Função pra disparar ações do redux
// Ex: É necessário disparar uma dispatch para Modificar um valor na store global
export type AppDispatch = typeof store.dispatch;
