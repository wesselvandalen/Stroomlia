import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Mainview from './pages/mainview';
import Header from './components/header';
import TopAnnouncement from './components/top-announcement';

export default function App() {
  return (
    <div className="App">
      <Router>
        <div className="top-announcement-container">
          <TopAnnouncement/>
          <Header />
        </div>
        <div className="routes-container">
          <Routes>
            <Route path={"/"} element={<Mainview />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}