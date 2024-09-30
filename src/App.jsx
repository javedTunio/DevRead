import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import useCorrectScrollBehavior from "./hooks/useCorrectScrollBehavior";

// import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Blog from "./pages/Blog";
import Navbar from "./components/Navbar";

// function ScrollToTopOnNavigation() {
//   useCorrectScrollBehavior();
//   return null;
// }

const MainLayout = ({ children }) => (
  <>
    <Navbar />
    {children}
    {/* <Footer /> */}
  </>
);

function App() {
  return (
    <Router>
      {/* <ScrollToTopOnNavigation /> */}
      <Routes>
        {/* <Route
          path="/"
          element={<Layout />}>
          <Route
            index
            element={<Home />}
          />
          <Route
            path="about"
            element={<About />}
          />
          <Route
            path="blogs/:id"
            element={<Blog />}
          />
        </Route> */}
        <Route
          path="/"
          element={<MainLayout> <Home /> </MainLayout>}
        />
        <Route
          path="/about"
          element={<MainLayout> <About /> </MainLayout>}
        />
        <Route
          path="/blogs/:id"
          element={<MainLayout> <Blog /> </MainLayout>}
        />

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
  );
}

export default App;
