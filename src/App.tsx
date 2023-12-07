import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Footer from "./containers/footer/footer";
import Header from "./containers/header/header";
import { MainRoutes } from "./routes/routes";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="app">
      {!location.pathname.includes("admin") ? (
        <>
          <Header />
          <MainRoutes />
          <Footer />
        </>
      ) : (
        <MainRoutes />
      )}
    </div>
  );
}

export default App;
