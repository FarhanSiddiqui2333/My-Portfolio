import "./App.css";
import Hero from "./components/Hero";
import { Route, Routes } from "react-router-dom";
import Career from "./Pages/Career";
import AboutPage from "./Pages/AboutPage";
import Project from "./Pages/Project";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/career" element={<Career />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<Project />} />
      </Routes>
    </>
  );
}

export default App;

function Home() {
  return (
    <>
      <Hero />
    </>
  );
}
