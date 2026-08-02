import { useState } from "react";
import { FaLinkedin, FaGithub, FaWhatsapp, FaChevronDown } from "react-icons/fa";
import avatar from "../assets/images/siddpic.png";
import StatusBadge from "./StatusBadge";

export default function Sidebar({ onNavigate }) {
  const [open, setOpen] = useState(false);

  return (
<aside className="bg-eerie-black border border-jet rounded-[20px] p-6 shadow-[-4px_8px_24px_rgba(0,0,0,0.25)] w-full lg:w-[300px] lg:h-[95vh] lg:sticky lg:top-6 shrink-0 flex flex-col justify-between">

  {/* Top Section */}
  <div className="flex items-center gap-4 lg:flex-col lg:items-center">

    {/* Avatar */}
    <figure className="w-[70px] h-[70px] lg:w-[200px] lg:h-[200px] rounded-2xl overflow-hidden">
      <img
        src={avatar}
        alt="Siddarth"
        className="w-full h-full object-cover"
      />
    </figure>

    {/* Profile */}
    <div className="flex-1 lg:flex lg:flex-col lg:items-center lg:w-full">

      <h1 className="text-lg lg:text-2xl font-semibold text-white capitalize text-center mt-4">
        Siddarth
      </h1>

      <p className="text-sm text-gold mt-1 text-center">
        MERN Stack Developer
      </p>

      <div className="hidden lg:flex justify-center mt-5">
        <StatusBadge />
      </div>

      {/* Buttons */}
      <div className="hidden lg:grid grid-cols-2 gap-3 w-full max-w-[240px] mx-auto mt-6">

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="text-center text-sm font-medium bg-onyx text-light-gray border border-jet rounded-xl py-3 hover:text-gold transition-all duration-300"
        >
          📄 Resume
        </a>

        <button
          onClick={() => onNavigate("contact")}
          className="text-center text-sm font-medium bg-gold text-smoky-black rounded-xl py-3 hover:bg-vegas-gold transition-all duration-300"
        >
          🚀 Hire Me
        </button>

      </div>

    </div>

    {/* Mobile Contact Toggle */}
    <button
      onClick={() => setOpen(!open)}
      className="lg:hidden flex items-center gap-2 text-xs text-light-gray"
    >
      <span>Contacts</span>
      <FaChevronDown
        className={`transition-transform duration-300 ${
          open ? "rotate-180" : ""
        }`}
      />
    </button>

  </div>

  {/* Bottom Section */}
  <div className={`${open ? "block" : "hidden"} lg:block w-full mt-8`}>

    <div className="h-px bg-jet mb-6" />

    <ul className="space-y-6">

      <li className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-xl bg-onyx flex items-center justify-center text-gold">
          ✉️
        </div>

        <div className="min-w-0">
          <p className="text-[11px] uppercase text-light-gray/60">
            Email
          </p>

          <a
            href="mailto:siddarthg936@gmail.com"
            className="text-sm text-white hover:text-gold truncate block"
          >
            siddarthg936@gmail.com
          </a>
        </div>
      </li>

      <li className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-xl bg-onyx flex items-center justify-center text-gold">
          📱
        </div>

        <div>
          <p className="text-[11px] uppercase text-light-gray/60">
            Phone
          </p>

          <a
            href="tel:+919958234365"
            className="text-sm text-white hover:text-gold"
          >
            +91 9958234365
          </a>
        </div>
      </li>

      <li className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-xl bg-onyx flex items-center justify-center text-gold">
          📍
        </div>

        <div>
          <p className="text-[11px] uppercase text-light-gray/60">
            Location
          </p>

          <p className="text-sm text-white">
            Delhi, India
          </p>
        </div>
      </li>

    </ul>

    <div className="h-px bg-jet my-6" />

    {/* Social Icons */}
    <ul className="flex justify-center gap-4">

      <li>
        <a
          href="https://www.linkedin.com/in/sammcoder/"
          target="_blank"
          rel="noreferrer"
          className="w-10 h-10 rounded-xl bg-onyx flex items-center justify-center text-light-gray hover:text-gold hover:bg-jet transition-all duration-300"
        >
          <FaLinkedin size={18} />
        </a>
      </li>

      <li>
        <a
          href="https://github.com/sammsidd7777"
          target="_blank"
          rel="noreferrer"
          className="w-10 h-10 rounded-xl bg-onyx flex items-center justify-center text-light-gray hover:text-gold hover:bg-jet transition-all duration-300"
        >
          <FaGithub size={18} />
        </a>
      </li>

      <li>
        <a
          href="https://api.whatsapp.com/send?phone=919958234365"
          target="_blank"
          rel="noreferrer"
          className="w-10 h-10 rounded-xl bg-onyx flex items-center justify-center text-light-gray hover:text-gold hover:bg-jet transition-all duration-300"
        >
          <FaWhatsapp size={18} />
        </a>
      </li>

    </ul>

    {/* Mobile Resume Button */}
    <a
      href="/resume.pdf"
      target="_blank"
      rel="noreferrer"
      className="lg:hidden block mt-6 text-center bg-onyx border border-jet rounded-xl py-3 text-light-gray hover:text-gold transition-all"
    >
      📄 Resume
    </a>

  </div>

</aside>
  );
}
