import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Projects from './pages/Projects'
import Experiences from './pages/Experiences'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectDisplay from "./pages/ProjectDisplay";
import Resume from './components/Resume';
import Blog from './components/Blog';
import Video from './components/Video';
import Podcast from './components/Podcast';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDisplay />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/video" element={<Video />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/podcast" element={<Podcast />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
