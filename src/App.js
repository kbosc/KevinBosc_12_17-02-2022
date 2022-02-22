import './App.scss';
import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Dashboard from "./pages/Dashboard"
import Navigation from "./components/Navigation"
import VerticalLayout from "./components/VerticalLayout";


function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
          <VerticalLayout />
          <Routes>
            <Route path="/user/:id" element={<Dashboard />} />
            <Route path="/" element={<Navigation />} />
          </Routes>
      </div>
    </div>
  );
}

export default App;
