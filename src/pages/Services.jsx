import ArticleHeader from "../components/ArticleHeader";
import { services } from "../data/data";

export default function Services() {
  return (
    <article className="bg-eerie-black border border-jet rounded-[20px] p-5 sm:p-8 shadow-[-4px_8px_24px_rgba(0,0,0,0.25)] animate-fade space-y-10">
      <ArticleHeader title="Services" />

      <section className="space-y-3">
        <h3 className="text-xl font-semibold text-white">
          Building Digital Solutions For Businesses
        </h3>
        <p className="text-light-gray leading-relaxed max-w-2xl">
          I help businesses, startups, and professionals build modern websites, web
          applications, and digital solutions that improve their online presence.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-white mb-5">What I Offer</h3>
        <ul className="grid sm:grid-cols-2 gap-5">
          {services.map((s) => (
            <li
              key={s.title}
              className="bg-onyx border border-jet rounded-2xl p-5 hover:border-gold/50 transition-colors"
            >
              <div className="w-11 h-11 rounded-xl bg-eerie-black flex items-center justify-center text-gold mb-4">
                <i className={s.icon} />
              </div>
              <span className="text-xs uppercase tracking-wide text-gold">{s.tag}</span>
              <h4 className="text-white font-semibold mt-1 mb-2">{s.title}</h4>
              <p className="text-sm text-light-gray leading-relaxed mb-4">{s.text}</p>
              <ul className="space-y-1.5">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-light-gray">
                    <i className="fa-solid fa-check text-gold text-xs" />
                    {f}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
