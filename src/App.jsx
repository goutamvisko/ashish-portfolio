import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicRoute from "./layouts/PublicRoute";
import LandingPage from "./pages/LandingPage";
import { ToastContainer } from "react-toastify";
import GradientCursor from "./animation/GradientCursor";

function App() {
  return (
    <>
      <ToastContainer />
      <GradientCursor />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PublicRoute />}>
            <Route index element={<LandingPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
