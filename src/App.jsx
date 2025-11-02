import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import { ThemeProvider } from "./contexts/ThemeContext";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import AskAI from "./pages/AskAI";
import Contact from "./pages/Contact";
import PortfolioForm from "./pages/PortfolioForm";

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/create-portfolio"
            element={
              <ProtectedRoute>
                <PortfolioForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/ask-ai"
            element={
              <ProtectedRoute>
                <AskAI />
              </ProtectedRoute>
            }
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
