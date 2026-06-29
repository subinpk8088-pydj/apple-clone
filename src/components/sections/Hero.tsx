import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f5f5f7]">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-40 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-blue-300/20 blur-[140px]" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-16 px-6 pt-28 pb-16 lg:flex-row">

        <HeroContent />

        <HeroImage />

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <p className="text-xs uppercase tracking-[0.4em] text-gray-500">
          Scroll
        </p>
      </div>
    </section>
  );
}