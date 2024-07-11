import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Tags from './pages/Tags.tsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/tags" element={<Tags />} />
      </Routes>
    </Router>
  );
}

export default App;
