import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreateUserPage from './components/CreateUserPage';
import EventsPage from './pages/EventsPage';

const App = () => (
  <Router>
    <nav  id={"navbar"}>
      <div class={"item-section"}>
        <Link to="/" className='link-home'>Home</Link>
        <Link to="/create-user" className='link-create-user'>Criar Usuário</Link>
        <Link to="/events" className='link-events'>Eventos</Link>
      </div>
    </nav>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/create-user" element={<CreateUserPage />} />
      <Route path="/events" element={<EventsPage />} />
    </Routes>
  </Router>
);

export default App;