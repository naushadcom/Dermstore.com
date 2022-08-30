import "./App.css";
import Footer from "./Components/Footer";
import { Navbar } from "./Components/Navbar";
import MainRoutes from "./Router/MainRoutes";


function App() {
  return (
    <>
      <Navbar />
     <MainRoutes/>
     <Footer />
    </>
  );
}

export default App;
