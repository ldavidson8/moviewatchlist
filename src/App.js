import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Watchlist } from "./components/Watchlist";
import { Watched } from "./components/Watched";
import { Add } from "./components/Add";
import "./App.css";
import { GlobalProvider } from "./context/GlobalState";
import { BottomNav } from "./components/BottomNavigation";

function App() {
  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Watchlist />} />
            <Route path="/watched" element={<Watched />} />
            <Route path="/add" element={<Add />} />
          </Routes>
          <BottomNav />
        </BrowserRouter>
      </GlobalProvider>
    </>
  );
}

export default App;
