import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Components/layouts/HomePage/index";
import Sign_In from "./Components/layouts/authentication/sign_in/index";
import Sign_Up from "./Components/layouts/authentication/sign_up/index";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* eslint-disable-next-line */}
        <Route path="/Signup" element={<Sign_Up />} />
        {/* eslint-disable-next-line */}
        <Route path="/Signin" element={<Sign_In />} />
      </Routes>
    </BrowserRouter>
  );
}
