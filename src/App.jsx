import { Route, Routes, Navigate } from "react-router-dom";
import InitialLogin from "./Pages/InitialLogin";
import InitialSignUp from "./Pages/InitialSignUp";
import UserLogin from "./Pages/userLogin";
import UserRegister from "./Pages/userRegister";
import HomePage from "./Pages/HomePage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<InitialLogin />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/user-register" element={<UserRegister />} />
        <Route path="/signup" element={<InitialSignUp />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </>
  );
}

export default App;
