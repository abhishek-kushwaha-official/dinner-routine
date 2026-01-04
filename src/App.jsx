import "./App.css";
import FormCompo from "./components/FormCompo";
import HomePage from "./components/HomePage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./components/Root";
import ErrorPage from "./components/ErrorPage";

function App() {

  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <RootLayout />,
        errorElement: <ErrorPage/>,
        children: [
          { path: '/', element: <HomePage /> },
          { path: '/form-page', element: <FormCompo /> }
        ],
      },
    ]
  );

  return (
    <RouterProvider router={router} />
    // <>
    //   <HomePage/>
    //   <FormCompo/>
    // </>
  );
}

export default App;