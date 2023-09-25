import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import RecipePage from "./pages/RecipePage";
import ErrorPage from "./pages/ErrorPage";
import RecipeDetails from "./pages/RecipeDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "recipes/:category", element: <RecipePage /> },
      { path: "recipe/:id", element: <RecipeDetails /> },
    ],
  },
]);

export default router;
