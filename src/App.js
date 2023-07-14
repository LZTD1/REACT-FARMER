import './scss/app.scss';
import Header from './components/HeaderBlock/Header';
import Home from './screens/Home';
import NotFound from './screens/NotFound';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
