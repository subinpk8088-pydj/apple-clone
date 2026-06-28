import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-6 pt-24">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-32 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-neutral-200 blur-[140px]" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-16 lg:flex-row">
        <div className="max-w-xl text-center lg:text-left">
          <HeroContent />
        </div>

        <HeroImage />
      </div>
    </section>
  );
}