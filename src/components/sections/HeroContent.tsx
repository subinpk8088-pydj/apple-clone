import HeroButtons from "./HeroButtons";

export default function HeroContent() {
  return (
    <div className="max-w-xl text-center lg:text-left">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.5em] text-blue-600">
        NEW GENERATION
      </p>

      <h1 className="text-6xl font-bold text-gray-900 md:text-8xl">
        Lumina One
      </h1>

      <h2 className="mt-6 text-3xl font-medium text-gray-700">
        Beyond Imagination.
      </h2>

      <p className="mt-8 text-lg leading-8 text-gray-600">
        Crafted with precision, powered by next-generation performance, and
        designed to elevate every interaction.
      </p>

      <HeroButtons />
    </div>
  );
}