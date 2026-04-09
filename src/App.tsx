import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router";
import "./App.css";

const Header = lazy(() => import("./components/layout/header/header.tsx"));
const Home = lazy(() => import("./pages/home.tsx"));
const Footer = lazy(() => import("./components/layout/footer/footer.tsx"));

function App() {
  return (
    <>
      <Header />

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>

      <Footer />
    </>
  );
}

export default App;
