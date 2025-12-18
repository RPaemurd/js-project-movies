import { BrowserRouter, Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <BrowserRouter>
      {/* wraps the entire app in BrowserRouter */}
      <main>
        <Nav />
        <Routes>
          {" "}
          {/* //this element makes react to render one component at a time out of all components that are wrapped in it. When it gets first component that matches, it will stop looking for others */}{" "}
          <Route path="/" element={<Welcome />} />{" "}
          {/* slash forward makes the router route only forward, element sets which element is going to be rendered */}
          {/* / forward makes router to */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};
