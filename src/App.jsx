import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetail from "./pages/MovieDetail";
import BackButton from "./components/BackButton";

export const App = () => {
  return (
    <BrowserRouter>
      <main>
        <div>Text</div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/button" element={<BackButton />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};
