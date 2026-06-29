export default function HeroButtons() {
  return (
    <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
      <button className="rounded-full bg-blue-600 px-8 py-3 text-white transition hover:bg-blue-700">
        Learn More
      </button>

      <button className="rounded-full border border-blue-600 px-8 py-3 text-blue-600 transition hover:bg-blue-600 hover:text-white">
        Buy
      </button>
    </div>
  );
}