import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './pages/home';
import A from './pages/designs/A';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/scroll-interaction1" element={<A />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
