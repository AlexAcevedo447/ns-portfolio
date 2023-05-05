import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Home } from "./routes/Home";
import { NotFound } from "./routes/404";

const routes = createBrowserRouter([
  {
    path: "",
    element: <Home />,
    errorElement: <NotFound />,
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
