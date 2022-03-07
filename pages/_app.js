import "../styles/globals.css";
import { ToDoContextProvider } from "./api/toDo-context";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <ToDoContextProvider>
        <Component {...pageProps} />
      </ToDoContextProvider>
    </SessionProvider>
  );
}

export default MyApp;
