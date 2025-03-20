import GlobalErrorHandlerContextProvider from "@/context/globalErrorHandlerContext/globalErrorHandlerContextProvider";
import RootLayout from "@/Layout/ExampleLayout";
import Login from "@/pages/Auth/Login";
import ErrorPage from "@/pages/Error";
import LandingPage from "@/pages/Landing";
import { Suspense } from "react";
import { RouteObject, useRoutes } from "react-router-dom";

enum Path {
  ROOT = "/",
  ContextProvider = "/ContextProvider",
  LOGIN = "/auth/login",
  PRODUCTS = "/products",
}

export const PublicRoutes = () => {
  const publicRoutes: RouteObject = {
    errorElement: <ErrorPage />,
    element: (
      <GlobalErrorHandlerContextProvider>
        <RootLayout />
      </GlobalErrorHandlerContextProvider>
    ),
    children: [
      {
        path: Path.ROOT,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <LandingPage />
          </Suspense>
        ),
      },
      {
        path: Path.LOGIN,
        element: <Login />,
      },
    ],
  };
  const routes = useRoutes([publicRoutes]);
  return <>{routes}</>;
};
