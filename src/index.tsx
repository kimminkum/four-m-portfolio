import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { ThemeProviderWrapper } from ".//query/ThemeContext";
import GlobalStyle from "./style/GlobalStyles";
import GlobalFont from "./style/GlobalFonts";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeProviderWrapper>
          <GlobalStyle />
          <GlobalFont />
          <App />
        </ThemeProviderWrapper>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
