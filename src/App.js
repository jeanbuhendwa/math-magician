import { Routes, Route } from 'react-router-dom';
import HomePage from './routes/Home';
import MyCalc from './routes/CalcPage';
import Quote from './routes/quote';
import NotMatch from './routes/NotMatch';
import Layout from './components/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="calculator" element={<MyCalc />} />
        <Route path="quote" element={<Quote />} />
        <Route path="*" element={<NotMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
