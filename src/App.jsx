import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import StatusBadge from "./components/StatusBadge";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

const pages = {
  home: Home,
  services: Services,
  projects: Projects,
  about: About,
  contact: Contact,
  resume: Resume,
};

export default function App() {
  const [activePage, setActivePage] = useState("home");

  const handleNavigate = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const ActiveComponent = pages[activePage] ?? Home;

  return (
    <div className="min-h-screen bg-smoky-black">
      <main className="max-w-6xl mx-auto px-4 py-6 flex flex-col lg:flex-row gap-6">
        <Sidebar onNavigate={handleNavigate} />

        <div className="flex-1 min-w-0">
          <Navbar activePage={activePage} onNavigate={handleNavigate} />
          <div className="sm:hidden mb-4 flex justify-center">
            <StatusBadge />
          </div>
          <ActiveComponent onNavigate={handleNavigate} />
        </div>
      </main>
    </div>
  );
}
