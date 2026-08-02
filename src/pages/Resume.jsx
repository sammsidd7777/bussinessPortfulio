import ArticleHeader from "../components/ArticleHeader";
import { education, experience, skills } from "../data/data";

function Timeline({ title, items }) {
  return (
    <section>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-9 h-9 rounded-lg bg-onyx flex items-center justify-center text-gold">
          <i className="fa-solid fa-book" />
        </div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      <ol className="space-y-6 border-l-2 border-jet pl-6">
        {items.map((item) => (
          <li key={item.title + item.period} className="relative">
            <span className="absolute -left-[29px] top-1.5 w-3 h-3 rounded-full bg-gold" />
            <h4 className="text-white font-semibold">{item.title}</h4>
            <span className="text-xs text-gold">{item.period}</span>
            <p className="text-sm text-light-gray leading-relaxed mt-1.5 max-w-2xl">
              {item.text}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default function Resume() {
  return (
    <article className="bg-eerie-black border border-jet rounded-[20px] p-5 sm:p-8 shadow-[-4px_8px_24px_rgba(0,0,0,0.25)] animate-fade space-y-10">
      <ArticleHeader title="Resume" />

      <Timeline title="Education" items={education} />
      <Timeline title="Experience" items={experience} />

      <section>
        <h3 className="text-lg font-semibold text-white mb-5">My Skills</h3>
        <ul className="bg-onyx border border-jet rounded-2xl p-6 space-y-5">
          {skills.map((s) => (
            <li key={s.name}>
              <div className="flex justify-between items-center mb-2">
                <h5 className="text-sm text-white font-medium">{s.name}</h5>
                <span className="text-xs text-gold">{s.value}%</span>
              </div>
              <div className="h-2 rounded-full bg-eerie-black overflow-hidden">
                <div
                  className="h-full rounded-full bg-gold"
                  style={{ width: `${s.value}%` }}
                />
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
