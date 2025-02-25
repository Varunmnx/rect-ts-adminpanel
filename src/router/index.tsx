import GlobalErrorHandlerContextProvider from "@/context/globalErrorHandlerContext/globalErrorHandlerContextProvider";
import ExampleLayout from "@/Layout/ExampleLayout";
import Login from "@/pages/Auth/Login";
import ErrorPage from "@/pages/Error";
import LandingPage from "@/pages/Landing";
import { RouteObject } from "react-router-dom";

export enum Path {
  ROOT = "/",
  ContextProvider = "/ContextProvider",
  LOGIN = "/auth/login",
  PRODUCTS = "/products",
}

export const Routes: RouteObject = {
  errorElement: <ErrorPage />,
  element: (
    <GlobalErrorHandlerContextProvider>
      <ExampleLayout />
    </GlobalErrorHandlerContextProvider>
  ),
  children: [
    {
      path: Path.ROOT,
      element: <LandingPage />,
    },
    {
      path: Path.LOGIN,
      element: <Login />,
    },
  ],
};
