import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { History, HistoryXVIIW, List, Login } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Login />} />
        <Route path="/list" element={<List />} />
        <Route path="/history" element={<History />} />
        <Route path="/history/xviiw" element={<HistoryXVIIW />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
