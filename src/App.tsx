import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Starships from "./pages/Starships";

function App() {
  return (
    <>
      <AuthProvider>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/starships" element={<Starships />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
