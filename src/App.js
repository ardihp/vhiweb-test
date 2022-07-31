import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./helpers/ProtectedRoute";
import Page404 from "./pages/404";
import Login from "./pages/Login";
import User from "./pages/User";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/users" element={<User />} />
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default App;
