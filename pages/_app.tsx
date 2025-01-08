import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QClient } from "@quorini/core";
import { QAuth } from "@quorini/ui-react";

QClient.configure({
  projectId: "67713ed7f97270ea61b74188",
  env: "development",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QAuth.Provider>
      <Component {...pageProps} />
    </QAuth.Provider>
  );
}
