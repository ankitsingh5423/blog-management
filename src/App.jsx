import { Route, Routes } from "react-router";
import Dashboard from "./pages/Dashbord";
import NotFound from "./pages/NotFound";
import Layout from "./layout/Layout";
import Login from "./pages/Login";
import "./App.css";
import Category from "./pages/Category";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import GuestRoutes from "./routes/GuestRoutes";

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route element={<Layout />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="category" element={<Category />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Route>
          <Route element={<GuestRoutes />}>
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
