import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

const Header = lazy(() => import("./components/complex/header/header.jsx"));
const Home = lazy(() => import("./pages/home.jsx"));
const FourCeroFour = lazy(() => import("./pages/fourCeroFour.jsx"));
function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<FourCeroFour />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
