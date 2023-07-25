import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import ErrorPage from "./components/ErrorPage/404";
import MealDetails from "./components/Restaurant/MealDetails";
import Restaurant from "./components/Restaurant/Restaurant";
import Main from "./layout/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <div>This is home page</div>,
          errorElement: <ErrorPage></ErrorPage>,
        },
        {
          path: "/restaurant",
          loader: async () => {
            return fetch(
              "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
            );
          },
          element: <Restaurant></Restaurant>,
        },
        {
          path: "/restaurant/:mealId",
          loader: async ({ params }) => {
            return fetch(
              `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.mealId}`
            );
          },
          element: <MealDetails></MealDetails>,
        },
        {
          path: "/items",
          element: <div>This is items page</div>,
        },
      ],
    },
    {
      path: "*",
      element: <div>Data not found!</div>,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
