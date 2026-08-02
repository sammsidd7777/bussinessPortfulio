import ArticleHeader from "../components/ArticleHeader";
import { projects } from "../data/data";

export default function Projects({ onNavigate }) {
  return (
    <article className="bg-eerie-black border border-jet rounded-[20px] p-5 sm:p-8 shadow-[-4px_8px_24px_rgba(0,0,0,0.25)] animate-fade space-y-10">
      <ArticleHeader title="Projects" />

      <section className="space-y-3">
        <h3 className="text-xl font-semibold text-white">Featured Work</h3>
        <p className="text-light-gray leading-relaxed max-w-2xl">
          A collection of web applications and digital solutions I have built using modern
          technologies.
        </p>
      </section>

      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div
            key={p.title}
            className="bg-onyx border border-jet rounded-2xl overflow-hidden hover:border-gold/50 transition-colors flex flex-col"
          >
            <div className="aspect-video overflow-hidden bg-jet">
              <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-5 flex flex-col flex-1">
              <h4 className="text-white font-semibold mb-2">{p.title}</h4>
              <p className="text-sm text-light-gray leading-relaxed mb-4 flex-1">{p.text}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-eerie-black text-gold border border-jet rounded-full px-3 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 text-sm">
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gold hover:text-vegas-gold font-medium"
                >
                  Live Demo →
                </a>
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-light-gray hover:text-white font-medium"
                  >
                    Github
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="text-center bg-onyx border border-jet rounded-2xl p-8 space-y-3">
        <h3 className="text-xl font-semibold text-white">Have a Project Idea?</h3>
        <p className="text-light-gray">
          Let's create a modern digital solution for your business.
        </p>
        <button
          onClick={() => onNavigate("contact")}
          className="bg-gold text-smoky-black font-medium px-6 py-3 rounded-xl hover:bg-vegas-gold transition-colors"
        >
          Contact Me
        </button>
      </section>
    </article>
  );
}
