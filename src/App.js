import './App.css'
import './App.css';
import HomePage from './pages/HomePage.js'
import DiningPage from './pages/DiningPage.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dining" element={<DiningPage />} />
        </Routes>
      </div>
    </BrowserRouter>


  );
}

export default App;
