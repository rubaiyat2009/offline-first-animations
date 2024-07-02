// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AnimationManagement from './components/AnimationManagement';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/manage-animations" element={<AnimationManagement />} />
        {/* <Route path="/another-route" element={<AnotherComponent />} /> */}
        {/* More routes can be added here */}
      </Routes>
    </Router>
  );
}


export default App;