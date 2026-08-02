import { useEffect, useState } from "react";

const statuses = [
  { label: "Available for Freelance", icon: "🟢", color: "text-green-400" },
  { label: "Open to Full-Time Roles", icon: "💼", color: "text-gold" },
];

export default function StatusBadge({ className = "" }) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % statuses.length);
        setVisible(true);
      }, 250);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const current = statuses[index];

  return (
    <div
      className={`inline-flex items-center gap-2 bg-onyx border border-jet rounded-full px-3.5 py-1.5 text-xs font-medium overflow-hidden ${className}`}
    >
      <span className="relative flex h-2 w-2 shrink-0">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
      </span>
      <span
        className={`transition-all duration-300 whitespace-nowrap ${current.color} ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"
        }`}
      >
        {current.label}
      </span>
    </div>
  );
}
