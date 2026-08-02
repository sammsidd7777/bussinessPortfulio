export default function ArticleHeader({ title }) {
  return (
    <header className="mb-6">
      <h2 className="text-2xl font-semibold text-white">{title}</h2>
      <div className="w-14 h-1 bg-gold rounded-full mt-2" />
    </header>
  );
}
