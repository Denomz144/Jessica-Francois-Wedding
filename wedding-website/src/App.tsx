// src/App.tsx
import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingComponent from './components/LoadingComponent';
import HeroSection from './components/HeroSection';
import CeremonySection from './components/CeremonySection';
import ReceptionSection from './components/ReceptionSection';
import RSVPButtonSection from './components/RSVPButtonSection';
import FooterSection from './components/FooterSection';
// import OurStory from './pages/OurStory';
import Rsvp from './pages/Rsvp';
import Location from './pages/Location';
import Registry from './pages/Registry';
import FAQS from './pages/FAQs';
// import StorySection from "./components/StorySection";
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoadingComponent />}>
          <Route index element={
            <>
              <HeroSection />
              <CeremonySection />
              <ReceptionSection />
              {/* <StorySection /> */}
              <RSVPButtonSection />
              <FooterSection />
            </>
          } />
          {/* <Route path="our-story" element={<OurStory />} /> */}
          <Route path="rsvp" element={<Rsvp />} />
          <Route path="location" element={<Location />} />
          <Route path="Registry" element={<Registry />} />
          <Route path="FAQS" element={<FAQS />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
