import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Navbar from "./pages/Navbar";
import Form from './pages/Form'
import { useState, createContext } from "react";
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'

export const AppContext = createContext();

function App() {
  const client = new QueryClient();
  const [userName, setUsername] = useState("defaultUserName");
  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <AppContext.Provider value={{ userName, setUsername }}>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/form" element={<Form/>}/>
              <Route path="*" element={<h1>404 - Page Not Found</h1>} />
            </Routes>
          </BrowserRouter>
        </AppContext.Provider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
