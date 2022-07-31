import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./helpers/ProtectedRoute";
import Page404 from "./pages/404";
import Login from "./pages/Login";
import User from "./pages/User";
import Detail from "./pages/User/Detail";

function App() {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Login />} />
        <Route path="/users" element={<User />} />
        <Route path="/users/:id" element={<Detail />} />
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default App;
