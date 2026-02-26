import { Lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

const Home = Lazy(() => import("./pages/home"));

function App() {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <main>
            <Route path="/" element={<Home />} />
          </main>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
