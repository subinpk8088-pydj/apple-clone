import HeroButtons from "./HeroButtons";

export default function HeroContent() {
  return (
    <>
      <p className="mb-4 text-lg font-medium uppercase tracking-[0.35em] text-neutral-500">
        Introducing
      </p>

      <h1 className="text-6xl font-semibold tracking-tight text-black md:text-8xl">
        Lumina One
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600 md:text-xl">
        A beautifully crafted smartphone experience with exceptional
        performance, immersive visuals, and thoughtful design that feels
        effortless every day.
      </p>

      <HeroButtons />
    </>
  );
}