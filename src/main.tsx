import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";

import App from "./App.tsx";
import "./index.css";

const theme = {
  color: {
    primary: "#e8ca0e",
    bg: "#060716",
    neutral2: "#060716",
    neutral: "white",
  },
  fontSize: {
    small: "0.8rem",
    medium: "1rem",
    large: "1.5rem",
    xlarge: "3.2rem",
  },
  spacing: {
    xsmall: "0.25rem",
    small: "0.375rem",
    medium: "0.5rem",
    large: "1rem",
    xlarge: "1.5rem",
  },
  animation: "0.3s ease",
  shadow: "0px 10px 15px -3px rgba(0, 0, 0, 0.1)",
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
