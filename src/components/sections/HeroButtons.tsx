export default function HeroButtons() {
  return (
    <div className="mt-12 flex flex-wrap justify-center gap-5 lg:justify-start">
      <button className="rounded-full bg-[#0071e3] px-8 py-3 text-white transition-all duration-300 hover:scale-105 hover:bg-[#0062c3]">
        Learn More
      </button>

      <button className="rounded-full border border-[#0071e3] px-8 py-3 text-[#0071e3] transition-all duration-300 hover:bg-[#0071e3] hover:text-white">
        Buy
      </button>
    </div>
  );
}