import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f5f5f7]">
      <div className="absolute left-1/2 top-32 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-blue-200/20 blur-[150px]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-20 px-6 pt-24 lg:flex-row">
        <HeroContent />
        <HeroImage />
      </div>
    </section>
  );
}