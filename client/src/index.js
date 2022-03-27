import React from "react";
import ReactDOM from "react-dom";
import Routers from "./Components/Routers";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { GeistProvider, CssBaseline } from "@geist-ui/core";
import { QueryClient, QueryClientProvider } from "react-query";
import "inter-ui/inter.css";
import "./Style/global.scss";
import "./Style/utils.css";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      notifyOnChangePropsExclusions: ["isStale"],
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      retry: 0,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <GeistProvider>
        <CssBaseline />
        <Routers />
      </GeistProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
