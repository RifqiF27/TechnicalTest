import { createBrowserRouter, redirect } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CreateProduct from "../components/FormAdd";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/addProduct",
    element: <CreateProduct />,
  },
]);

export default router;
