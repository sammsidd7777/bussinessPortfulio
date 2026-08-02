import StatusBadge from "./StatusBadge";

const navItems = ["home", "services", "projects", "about", "contact"];

export default function Navbar({ activePage, onNavigate }) {
  return (
    <nav className="bg-eerie-black border border-jet rounded-2xl px-2 py-2 shadow-[-4px_8px_24px_rgba(0,0,0,0.25)] sticky top-0 z-20 mb-6 flex items-center justify-between gap-2">
        <StatusBadge className="hidden sm:inline-flex mr-1 shrink-0" />
      <ul className="flex items-center gap-1 overflow-x-auto no-scrollbar">
        {navItems.map((item) => (
          <li key={item} className="shrink-0">
            <button
              onClick={() => onNavigate(item)}
              className={`px-4 py-2 text-sm font-medium rounded-xl capitalize transition-colors ${
                activePage === item
                  ? "bg-gold text-smoky-black"
                  : "text-light-gray hover:text-gold"
              }`}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>

    </nav>
  );
}
