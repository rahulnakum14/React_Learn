import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Navbar from "./pages/Navbar";
import { useState } from "react";

function App() {
  const [userName, setUsername] = useState("defaultUserName");

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={ <Home userName={userName} />} />
          <Route path="/contact" element={<Contact userName={userName}/>} />
          <Route path="/profile" element={<Profile userName={userName} setUsername={setUsername}/>} />
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
