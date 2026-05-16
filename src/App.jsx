import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar } from "./components/landing/Navbar";
import { Hero } from "./components/landing/Hero";
import { About } from "./components/landing/About";
import { Features } from "./components/landing/Features";
import { Results } from "./components/landing/Results";
import { Community } from "./components/landing/Community";
import { Testimonials } from "./components/landing/Testimonials";
import { DiscordCTA } from "./components/landing/DiscordCTA";
import { Footer } from "./components/landing/Footer";

const Landing = () => {
  return (
    <div className="bg-[#050507] text-white min-h-screen overflow-x-hidden font-body ">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Results />
        <Community />
        <Testimonials />
        <DiscordCTA />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App ">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;