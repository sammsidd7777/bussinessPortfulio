import ArticleHeader from "../components/ArticleHeader";
import {
  aboutServices,
  aboutStats,
  journey,
  techStack,
  whyChooseMe,
} from "../data/data";

export default function About({ onNavigate }) {
  return (
    <article className="bg-eerie-black border border-jet rounded-[20px] p-5 sm:p-8 shadow-[-4px_8px_24px_rgba(0,0,0,0.25)] animate-fade space-y-10">
      <ArticleHeader title="About Me" />

      {/* Profile */}
      <section className="bg-onyx border border-jet rounded-2xl p-6 sm:p-8 space-y-4">
        <span className="inline-block text-xs font-medium text-gold bg-eerie-black px-4 py-1.5 rounded-full">
          🚀 Available for Freelance Projects
        </span>
        <h1 className="text-2xl sm:text-3xl font-bold text-white">Siddarth Kumar</h1>
        <h3 className="text-gold font-medium">Freelance Full Stack MERN Developer</h3>
        <p className="text-light-gray leading-relaxed max-w-2xl">
          I build modern, fast and scalable websites for businesses, startups and
          professionals. My goal is to help businesses create a strong online presence
          through clean design, responsive development and powerful web applications.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <button
            onClick={() => onNavigate("contact")}
            className="bg-gold text-smoky-black font-medium px-6 py-3 rounded-xl hover:bg-vegas-gold transition-colors"
          >
            Hire Me
          </button>
          <button
            onClick={() => onNavigate("projects")}
            className="border border-jet text-light-gray font-medium px-6 py-3 rounded-xl hover:border-gold hover:text-gold transition-colors"
          >
            View Projects
          </button>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {aboutStats.map((s) => (
          <div
            key={s.label}
            className="bg-onyx border border-jet rounded-2xl p-5 text-center"
          >
            <strong className="block text-2xl text-gold font-bold">{s.value}</strong>
            <span className="text-xs text-light-gray">{s.label}</span>
          </div>
        ))}
      </section>

      {/* Bio */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold text-white">
          Helping Businesses Build Better Websites
        </h3>
        <p className="text-light-gray leading-relaxed max-w-2xl">
          Hello! I'm <strong className="text-white">Siddarth</strong>, a passionate Full
          Stack MERN Developer with experience building modern business websites,
          dashboards, admin panels and custom web applications.
        </p>
        <p className="text-light-gray leading-relaxed max-w-2xl">
          I work with React.js, Node.js, Express.js and MongoDB to build complete digital
          solutions that are fast, secure and scalable. Every project is developed with
          clean code and responsive design.
        </p>
        <p className="text-light-gray leading-relaxed max-w-2xl">
          Whether you need a business website, portfolio, booking system or custom web
          application, I can help transform your idea into reality.
        </p>
      </section>

      {/* Services I offer */}
      <section>
        <h3 className="text-xl font-semibold text-white mb-5">Services I Offer</h3>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {aboutServices.map((s) => (
            <li key={s.title} className="bg-onyx border border-jet rounded-2xl p-5">
              <div className="w-10 h-10 rounded-xl bg-eerie-black flex items-center justify-center text-gold mb-3">
                <i className={s.icon} />
              </div>
              <h4 className="text-white font-semibold mb-1.5">{s.title}</h4>
              <p className="text-sm text-light-gray leading-relaxed">{s.text}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Journey */}
      <section>
        <h3 className="text-xl font-semibold text-white mb-6">My Journey</h3>
        <div className="space-y-6 border-l-2 border-jet pl-6">
          {journey.map((j) => (
            <div key={j.title} className="relative">
              <span className="absolute -left-[29px] top-1.5 w-3 h-3 rounded-full bg-gold" />
              <h4 className="text-white font-semibold mb-1">{j.title}</h4>
              <p className="text-sm text-light-gray leading-relaxed max-w-2xl">{j.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech stack */}
      <section>
        <h3 className="text-xl font-semibold text-white mb-5">Technologies I Use</h3>
        <div className="flex flex-wrap gap-2.5">
          {techStack.map((t) => (
            <span
              key={t}
              className="text-sm bg-onyx border border-jet text-light-gray rounded-full px-4 py-2 hover:border-gold hover:text-gold transition-colors"
            >
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* Why choose me */}
      <section>
        <h3 className="text-xl font-semibold text-white mb-5">Why Work With Me</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {whyChooseMe.map((w) => (
            <div key={w.title} className="bg-onyx border border-jet rounded-2xl p-5 text-center">
              <i className={`${w.icon} text-gold text-2xl mb-3`} />
              <h4 className="text-white font-semibold mb-1.5">{w.title}</h4>
              <p className="text-sm text-light-gray leading-relaxed">{w.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center bg-onyx border border-jet rounded-2xl p-8 space-y-4">
        <h2 className="text-2xl font-semibold text-white">Have a Project in Mind?</h2>
        <p className="text-light-gray max-w-xl mx-auto">
          Whether you need a business website, e-commerce store, portfolio website or
          custom MERN application, I'd love to help bring your idea to life.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <button
            onClick={() => onNavigate("contact")}
            className="bg-gold text-smoky-black font-medium px-6 py-3 rounded-xl hover:bg-vegas-gold transition-colors"
          >
            Let's Talk
          </button>
          <button
            onClick={() => onNavigate("projects")}
            className="border border-jet text-light-gray font-medium px-6 py-3 rounded-xl hover:border-gold hover:text-gold transition-colors"
          >
            View Portfolio
          </button>
        </div>
      </section>

      {/* Contact quick info */}
      <section className="bg-onyx border border-jet rounded-2xl p-6 space-y-2">
        <h3 className="text-lg font-semibold text-white mb-2">
          Let's Build Something Amazing 🚀
        </h3>
        <p className="text-light-gray leading-relaxed">
          I'm currently available for freelance projects, long-term collaborations and
          full-stack web development opportunities.
        </p>
        <p className="text-light-gray">📧 siddarthg936@gmail.com</p>
        <p className="text-light-gray">📍 Delhi NCR, India</p>
        <p className="text-light-gray">💼 MERN Stack Developer</p>
      </section>
    </article>
  );
}
