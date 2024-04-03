import "./App.css";
import { Routes, Route } from "react-router-dom";
import { FirstPage } from "./Pages/FirstPage";
import { Navbar } from "./Components/Navbar";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <div className="App flex flex-col h-screen justify-between">
      <Navbar />
      <h1 className="text-3xl font-bold text-green-600"> </h1>
      <Routes>
        <Route path="/first" element={<FirstPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
