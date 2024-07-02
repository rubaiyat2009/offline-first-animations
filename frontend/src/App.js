// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import AnimationManagement from './components/AnimationManagement';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/manage-animations" element={<AnimationManagement />} />
      </Routes>
    </Router>
  
  );
}


export default App;