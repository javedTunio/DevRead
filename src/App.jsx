import {
  Routes,
  Route,
  BrowserRouter as Router,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import useCorrectScrollBehavior from "./hooks/useCorrectScrollBehavior";

// import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Blog from "./pages/Blog";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";

function ScrollToTopOnNavigation() {
  useCorrectScrollBehavior();
  return null;
}

// const MainLayout = ({ children }) => (
//   <>
//     <Navbar />
//     {children}
//     {/* <Footer /> */}
//   </>
// );

function App() {
  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <>
  //       {/* Group of Routes with Layout */}
  //       <Route
  //         path="/"
  //         element={<Layout />}>
  //         <Route
  //           index
  //           element={<Home />}
  //         />
  //         <Route
  //           path="about"
  //           element={<About />}
  //         />
  //         <Route
  //           path="blogs/:id"
  //           element={<Blog />}
  //         />
  //       </Route>

  //       {/* Routes without Layout */}
  //       <Route
  //         path="login"
  //         element={<Login />}
  //       />
  //       <Route
  //         path="signup"
  //         element={<Signup />}
  //       />
  //       {/* === error page === */}
  //       <Route
  //         path="*"
  //         element={<NotFound />}
  //       />
  //     </>
  //   )
  // );

  return (
    <ThemeProvider
      defaultTheme="dark"
      storageKey="vite-ui-theme">
      <Router>
      
        <ScrollToTopOnNavigation />
        <Routes>
          {/* Group of Routes with Layout */}
          <Route
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
          </Route>
          {/* routes without layout */}
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/signup"
            element={<Signup />}
          />
          {/* === error page === */}

          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </Router>

      {/* <RouterProvider router={router} /> */}
    </ThemeProvider>
  );
}

export default App;
