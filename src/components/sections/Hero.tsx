import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f5f5f7]">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-32 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-blue-200/30 blur-[160px]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-16 px-6 pt-24 lg:flex-row">
        <HeroContent />
        <HeroImage />
      </div>
    </section>
  );
}