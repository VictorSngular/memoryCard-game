import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./pages/Login/Login";
import { Home } from "./pages/Home/Home";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import { useSelector } from "react-redux";
import { RootState } from "./store";

export default function RouterApp() {
  const { name: username } = useSelector((state: RootState) => state?.user);
  return (
    <>
      <Routes>
        <Route element={<Navigate to="/" replace />} path="*" />
        <Route element={<Login />} path="/" />
        <Route
          element={<ProtectedRoute user={username} children={<Home />} />}
          path="/game"
        />
      </Routes>
    </>
  );
}
