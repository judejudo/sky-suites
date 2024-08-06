
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { allRoutes } from "./Routes/All_routes";
import { ProtectedRoute } from "./Routes/protected";
import { SemiProtectedRoute } from "./Routes/semiProtected";
import Layout from "./Layout/Layout";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Layout>
      <ScrollToTop />
      <Routes>
      
        {allRoutes.map((route) => (
          <Route
          
            key={route.id}
            path={route.path}
            element={
              route.isprotected ? (
                <ProtectedRoute>{route.component}</ProtectedRoute>
              ) : route.issemiprotected ? (
                <SemiProtectedRoute>{route.component}</SemiProtectedRoute>
              ) : (
                route.component
              )
            }
          />
        ))}
      </Routes>
      </Layout>
    </>
  );
}

export default App;
