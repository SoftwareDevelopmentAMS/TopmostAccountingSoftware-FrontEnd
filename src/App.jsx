import { Route, Routes, Navigate } from "react-router-dom";
import InitialLogin from "./Pages/InitialLogin";
import InitialSignUp from "./Pages/InitialSignUp";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<InitialLogin />} />
        <Route path="/signup" element={<InitialSignUp />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </>
  );
}

export default App;
