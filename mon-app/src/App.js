import React from "react";
import { Route, Routes } from "react-router-dom";
import Champions from "./components/Champions";

const Home = () => <h1>Home</h1>;
const MissingPage = () => <h1>404</h1>;

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/champions" element={<Champions />} />
    <Route element={<MissingPage />} />
  </Routes>
);

export default App;