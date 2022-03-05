import "../styles/globals.css";
import { ToDoContextProvider } from "./api/toDo-context";

function MyApp({ Component, pageProps }) {
  return (
    <ToDoContextProvider>
      <Component {...pageProps} />
    </ToDoContextProvider>
  );
}

export default MyApp;
