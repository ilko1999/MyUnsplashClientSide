import "../styles/globals.css";
import Filler from "../components/Filler/Filler";
import Header from "../components/Header/Header";
import { CardProvider } from "./api/context/CardProvider";

function MyApp() {
  return (
    <CardProvider>
      <Header />
      <Filler />
    </CardProvider>
  );
}

export default MyApp;
