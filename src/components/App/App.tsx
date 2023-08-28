import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import MainPage from "../MainPage/MainPage";
import FunctionalComponents from "../FunctionalComponents/FunctionalComponents";
import TypingEvents from "../TypingEvents/TypingEvents";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/fun-comp" element={<FunctionalComponents />} />
        <Route path="/typing-events" element={<TypingEvents />} />
      </Routes>
    </div>
  );
}

export default App;
