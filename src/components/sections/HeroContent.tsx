import HeroButtons from "./HeroButtons";

export default function HeroContent() {
  return (
    <div className="max-w-xl text-center lg:text-left">

      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.45em] text-blue-600">
        New
      </p>

      <h1 className="text-5xl font-semibold leading-none tracking-tight text-[#1d1d1f] md:text-7xl">
        iPhone Pro
      </h1>

      <h2 className="mt-5 text-2xl font-medium text-neutral-700">
        Titanium. Powerful. Beautiful.
      </h2>

      <p className="mt-8 text-lg leading-8 text-neutral-600">
        Experience incredible performance, an advanced camera system,
        and a design engineered to feel effortless every day.
      </p>

      <HeroButtons />

    </div>
  );
}