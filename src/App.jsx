import { Route, Routes } from "react-router";
import Dashboard from "./pages/Dashbord";
import NotFound from "./pages/NotFound";
import Layout from "./layout/Layout";
import Login from "./pages/Login";
import "./App.css";
import Category from "./pages/Category";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="category" element={<Category />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
