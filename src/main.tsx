import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import Register from "./components/Register/Register.tsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
  },
  {
    path: "register",
    element: <Register />,
  },
]);

const RootComponent = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowWidth > 850 ? (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  ) : (
    <div className="desktop-warning">
      This website is currently not available for small screens. Please open or
      use it on a desktop.
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<RootComponent />);
