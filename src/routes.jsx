import { App } from "./App";
import Shop from "./pages/Shop";
import ErrorPage from "./pages/ErrorPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "shop",
    element: <Shop />, 
    children: [
      {
        path: ":name",
        element: <Shop />,
      },
    ],
  },
];

export default routes;
