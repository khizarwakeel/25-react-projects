import Header from './components/shared/header';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/routes/home';
import NotFound from './components/routes/notFount';
import Accordian from './projects/accordian';
import Footer from './components/shared/footer';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/accordian" element={<Accordian />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;