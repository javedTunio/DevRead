// import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Blog from "./pages/Blog";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Define a route that uses the Layout */}
          <Route element={<Layout />}>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/about"
              element={<About />}
            />
            <Route
              path="/blogs/:id"
              element={<Blog />}
            />
          </Route>
          {/* routes without Layout */}
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/signup"
            element={<Signup />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
