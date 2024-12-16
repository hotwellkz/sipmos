import React, { useState } from 'react';
import { Phone, MessageCircle, Home, CheckCircle, Clock, Package, Banknote } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Achievements from './components/Achievements';
import MobileTeam from './components/MobileTeam';
import Production from './components/Production';
import Design from './components/Design';
import Building from './components/Building';
import NewProjects from './components/NewProjects';
import Reviews from './components/Reviews';
import Savings from './components/Savings';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectPage from './components/ProjectPage';
import FrameHouses from './components/FrameHouses';
import ModularHouses from './components/ModularHouses';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header phone="+79195825668" />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Features />
              <Achievements />
              <Design />
              <Production />
              <Building />
              <Savings />
              <NewProjects />
              <Reviews />
              <MobileTeam />
              <Projects onProjectSelect={setSelectedProject} />
              <Contact phone="+79195825668" whatsapp="+79195825668" />
              {selectedProject && (
                <ProjectPage
                  id={selectedProject}
                  onClose={() => setSelectedProject(null)}
                />
              )}
            </>
          } />
          <Route path="/frame-houses" element={<FrameHouses />} />
          <Route path="/modular-houses" element={<ModularHouses />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
