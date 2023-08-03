import { Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Model } from './Pages/Model';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/model" element={<Model />} />
      </Routes>
  );
}

export default App;