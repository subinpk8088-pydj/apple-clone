export default function HeroButtons() {
  return (
    <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
      <button className="rounded-full bg-black px-7 py-3 text-white transition-all duration-300 hover:scale-105 hover:bg-neutral-800">
        Learn More
      </button>

      <button className="rounded-full border border-black px-7 py-3 transition-all duration-300 hover:bg-black hover:text-white">
        Buy
      </button>
    </div>
  );
}