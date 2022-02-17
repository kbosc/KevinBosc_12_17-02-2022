import './App.scss';
import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Dashboard from "./pages/Dashboard"


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
      <Route path='/' element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
// {/* <Route path='/user/:id' element={<User />} /> */}
// {/* <Route path='/user/:id/activity' element={<Activity />} /> */}
// {/* <Route path='/user/:id/average-sessions' element={<Session />} /> */}
// {/* <Route path='/user/:id/today-score' element={<Today />} /> */}
// {/* <Route path='/user/:id/activities' element={<Activities />} /> */}
// {/* <Route path='/user/:id/key-data' element={<KeyData />} /> */}
