import './App.css';
import MainContent from '../src/components/MainContent.jsx';
import Header from './components/Header.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ResourceForm from './components/ResourceForm.jsx';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app-body">
          <Routes>
            <Route path="/add-resource" element={<ResourceForm />} />
            <Route path="/" element={<MainContent />} />
            <Route path="/nextwave-assignment/" element={<MainContent />} />

            
          </Routes>
        </div>
      </div>
    </Router>);
}

export default App;
