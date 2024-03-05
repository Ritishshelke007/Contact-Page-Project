import { Toaster } from "react-hot-toast";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Toaster />
      <Navbar />
      <Contact />
    </>
  );
}

export default App;
