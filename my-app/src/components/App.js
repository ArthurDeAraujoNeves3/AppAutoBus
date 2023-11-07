import "./styles.css";

import Header from "./components/header";
import Infos from "./components/infos";
import Footer from "./components/footer";

export default function App() {
  return (
    <div className="App">
      {/*Header*/}
      <Header />
      {/*Infos*/}
      <Infos />
      {/*Footer*/}
      <Footer />
    </div>
  );
}
