import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { StrictMode } from "react";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
// import { Toaster } from "sonner";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <Toaster />
      <App />
    </ThemeProvider>
  </StrictMode>
);
