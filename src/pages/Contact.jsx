import { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import ArticleHeader from "../components/ArticleHeader";
import { contactInfo } from "../data/data";

const icons = {
  mail: FaEnvelope,
  location: FaMapMarkerAlt,
  linkedin: FaLinkedin,
  github: FaGithub,
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", type: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hook this up to your backend / email service (e.g. Formspree, EmailJS) as needed.
    console.log("Contact form submitted:", form);
    setSent(true);
    setForm({ name: "", email: "", type: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <article className="bg-eerie-black border border-jet rounded-[20px] p-5 sm:p-8 shadow-[-4px_8px_24px_rgba(0,0,0,0.25)] animate-fade space-y-10">
      <ArticleHeader title="Contact" />

      <section className="space-y-3">
        <h3 className="text-xl font-semibold text-white">
          Let's Build Something Together
        </h3>
        <p className="text-light-gray leading-relaxed max-w-2xl">
          Have a website idea, business project, or need help converting your idea into a
          digital solution? Feel free to contact me.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-white mb-5">Contact Information</h3>
        <ul className="grid sm:grid-cols-2 gap-4">
          {contactInfo.map((c) => {
            const Icon = icons[c.icon];
            return (
              <li
                key={c.title}
                className="flex items-center gap-4 bg-onyx border border-jet rounded-2xl p-4"
              >
                <div className="w-10 h-10 rounded-xl bg-eerie-black flex items-center justify-center text-gold shrink-0">
                  <Icon size={16} />
                </div>
                <div className="min-w-0">
                  <h4 className="text-white font-medium text-sm">{c.title}</h4>
                  {c.href ? (
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="text-sm text-light-gray hover:text-gold transition-colors truncate block"
                    >
                      {c.value}
                    </a>
                  ) : (
                    <p className="text-sm text-light-gray">{c.value}</p>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-5">Send Me A Message</h3>
        <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-4 max-w-2xl">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="bg-onyx border border-jet rounded-xl px-4 py-3 text-white placeholder:text-light-gray/50 outline-none focus:border-gold transition-colors"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="bg-onyx border border-jet rounded-xl px-4 py-3 text-white placeholder:text-light-gray/50 outline-none focus:border-gold transition-colors"
          />
          <input
            type="text"
            name="type"
            value={form.type}
            onChange={handleChange}
            placeholder="Project Type"
            className="sm:col-span-2 bg-onyx border border-jet rounded-xl px-4 py-3 text-white placeholder:text-light-gray/50 outline-none focus:border-gold transition-colors"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={6}
            placeholder="Tell me about your project"
            className="sm:col-span-2 bg-onyx border border-jet rounded-xl px-4 py-3 text-white placeholder:text-light-gray/50 outline-none focus:border-gold transition-colors resize-none"
          />
          <button
            type="submit"
            className="sm:col-span-2 bg-gold text-smoky-black font-medium px-6 py-3 rounded-xl hover:bg-vegas-gold transition-colors w-fit"
          >
            {sent ? "Message Sent ✓" : "Send Message"}
          </button>
        </form>
      </section>

      <section className="text-center bg-onyx border border-jet rounded-2xl p-8 space-y-2">
        <h3 className="text-xl font-semibold text-white">
          Available For Freelance Projects
        </h3>
        <p className="text-light-gray max-w-xl mx-auto">
          I am open to working with businesses, startups, and individuals who need modern
          web solutions.
        </p>
      </section>
    </article>
  );
}
