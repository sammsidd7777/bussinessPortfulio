import { heroServices, whyWorkWithMe } from "../data/data";

const trustPoints = [
  { icon: "⭐", label: "5.0 Client Rating" },
  { icon: "⚡", label: "24h Response Time" },
  { icon: "📦", label: "10+ Projects Delivered" },
  { icon: "🔁", label: "Unlimited Revisions*" },
];

export default function Home({ onNavigate }) {
  return (
    <article className="relative bg-eerie-black border border-jet rounded-[20px] p-5 sm:p-8 shadow-[-4px_8px_24px_rgba(0,0,0,0.25)] animate-fade space-y-10 overflow-hidden">
      {/* decorative glow */}
      <div className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />

      <div className="relative">
        <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-gold bg-onyx px-4 py-1.5 rounded-full">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
          </span>
          Available for Freelance Projects
        </span>

        <section className="space-y-4 mt-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            Hi, I'm Siddarth 👋
          </h2>
          <h3 className="text-lg sm:text-2xl bg-gradient-to-r from-gold to-vegas-gold bg-clip-text text-transparent font-semibold">
            Freelance Full Stack MERN Developer
          </h3>
          <p className="text-light-gray leading-relaxed max-w-2xl">
            I build modern websites and full-stack applications for businesses, startups, and
            professionals.
          </p>
          <p className="text-light-gray leading-relaxed max-w-2xl">
            I help transform ideas into scalable digital solutions by creating responsive
            interfaces, powerful backend systems, APIs, and smart integrations.
          </p>

          {/* trust row */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2">
            {trustPoints.map((t) => (
              <div key={t.label} className="flex items-center gap-1.5 text-sm text-light-gray">
                <span>{t.icon}</span>
                <span>{t.label}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 pt-4">
            {heroServices.map((s) => (
              <div
                key={s.label}
                className="bg-onyx border border-jet rounded-xl px-3 py-3 flex items-center gap-2 text-sm text-light-gray hover:border-gold/50 hover:text-white transition-colors"
              >
                <span>{s.icon}</span>
                <span>{s.label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 pt-5">
            <button
              onClick={() => onNavigate("contact")}
              className="bg-gold text-smoky-black font-semibold px-7 py-3.5 rounded-xl hover:bg-vegas-gold hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_8px_24px_rgba(255,191,0,0.25)]"
            >
              🚀 Hire Me Now
            </button>
            <button
              onClick={() => onNavigate("projects")}
              className="border border-jet text-light-gray font-medium px-7 py-3.5 rounded-xl hover:border-gold hover:text-gold transition-colors"
            >
              View Projects
            </button>
          </div>
          <p className="text-xs text-light-gray/50 pt-1">
            *Fair-use revisions included on all project engagements.
          </p>
        </section>
      </div>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold text-white">Why Work With Me</h3>
        <p className="text-light-gray leading-relaxed max-w-2xl">
          I focus on creating digital products that are visually impressive, technically
          strong, and designed around real business requirements.
        </p>
        <ul className="grid sm:grid-cols-2 gap-3">
          {whyWorkWithMe.map((item) => (
            <li key={item} className="flex items-center gap-2 text-light-gray">
              <span className="text-gold">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold text-white">My Approach</h3>
        <p className="text-light-gray leading-relaxed max-w-2xl">
          Every project starts by understanding the goal, designing the right solution, and
          building a reliable product that delivers value.
        </p>
        <p className="text-light-gray leading-relaxed max-w-2xl">
          My aim is to create digital experiences that look premium, perform smoothly, and
          help businesses grow online.
        </p>
      </section>

      <section className="space-y-4 bg-onyx border border-jet rounded-2xl p-6">
        <h3 className="text-xl font-semibold text-white">Let's Build Something Amazing</h3>
        <p className="text-light-gray leading-relaxed max-w-2xl">
          Have a business idea, website, or application project? Let's turn it into a
          professional digital solution.
        </p>
        <button
          onClick={() => onNavigate("contact")}
          className="bg-gold text-smoky-black font-medium px-6 py-3 rounded-xl hover:bg-vegas-gold transition-colors"
        >
          Start Your Project
        </button>
      </section>
    </article>
  );
}
