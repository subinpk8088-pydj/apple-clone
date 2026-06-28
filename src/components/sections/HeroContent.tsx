import HeroButtons from "./HeroButtons";

export default function HeroContent() {
  return (
    <div className="max-w-xl text-center lg:text-left">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.45em] text-blue-600">
        New Generation
      </p>

      <h1 className="text-6xl font-semibold leading-none tracking-tight text-[#1d1d1f] md:text-8xl">
        Lumina One
      </h1>

      <h2 className="mt-5 text-2xl font-medium text-neutral-700">
        Designed for the future.
      </h2>

      <p className="mt-8 text-lg leading-8 text-neutral-600">
        Experience exceptional speed, a stunning display, and a beautifully
        crafted design that blends power with elegance.
      </p>

      <HeroButtons />
    </div>
  );
}