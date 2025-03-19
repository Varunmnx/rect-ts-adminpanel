import { BrowserRouter } from "react-router-dom";
import "./index.css";
import CustomRouter from "./route/route";
import { ThemeProvider } from "./context/theme-provider-context/theme-provider";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./config";
import { Toaster } from "sonner";
import { ErrorBoundary } from "react-error-boundary";

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary fallback={<>Error</>}>
        <ThemeProvider>
          <QueryClientProvider client={queryClient}>
            <Toaster richColors />
            <CustomRouter />
          </QueryClientProvider>
        </ThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
