import { useState } from "react";
import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import AppLayout from "./components/layout/AppLayout";
import InitAuthContext from "./context/InitAuthContext";
import AuthContext from "./context/auth.context";
import { User } from "./interfaces";
import Login from "./views/login";
import PublicRoute from "./components/PublicRoute";
import Dashboard from "./views/dashboard";
import Profile from "./views/profile";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="auth" element={<PublicRoute />}>
        <Route index element={<Navigate to="/auth/login" />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Navigate to="/auth/login" />} />
      </Route>
      <Route path="/" element={<ProtectedRoute />}>
        <Route index element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
      <Route path="*" element={<Navigate to="/auth/login" />} />
    </Route>
  )
);

function App() {
  const [user, setUser] = useState<User | null>(null);

  const value = {
    user,
    setUser,
  };

  return (
    <AppLayout>
      <AuthContext.Provider value={value}>
        <InitAuthContext>
          <RouterProvider router={router} />
        </InitAuthContext>
      </AuthContext.Provider>
    </AppLayout>
  );
}

export default App;
