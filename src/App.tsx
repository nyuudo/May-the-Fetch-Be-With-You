import { Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Starships from "./pages/Starships";
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";

function App() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        {isLoggedIn ? (
          <Route path="/starships/*" element={<Starships />} />
        ) : (
          <Route path="/starships/*" element={<Navigate to="/" />} />
        )}
      </Routes>
    </>
  );
}

export default App;
