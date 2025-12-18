import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import MovieDetail from "./pages/MovieDetail";
import BackButton from "./components/BackButton";

export const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </main>
  );
};
