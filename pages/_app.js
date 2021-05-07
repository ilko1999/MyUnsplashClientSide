import "../styles/globals.css";
import { CardProvider } from "../context/CardProvider";

function MyApp({ Component, pageProps }) {
  return (
    <CardProvider>
      <Component {...pageProps} />
    </CardProvider>
  );
}

export default MyApp;
