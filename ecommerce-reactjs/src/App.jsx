import "./App.css";
import { Routes, Route } from "react-router-dom";
import { FirstPage } from "./Pages/FirstPage";
import { Navbar } from "./Components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <h1 className="text-3xl font-bold text-green-600">Hello world!</h1>
      <Routes>
        <Route path="/first" element={<FirstPage />} />
      </Routes>
    </div>
  );
}

export default App;
