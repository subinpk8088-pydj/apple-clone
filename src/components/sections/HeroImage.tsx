export default function HeroImage() {
  return (
    <div className="flex items-center justify-center">
      <div className="relative h-[650px] w-[320px] rounded-[60px] bg-black p-2 shadow-2xl">
        <div className="absolute left-1/2 top-3 h-6 w-32 -translate-x-1/2 rounded-full bg-neutral-900" />

        <div className="flex h-full items-center justify-center rounded-[50px] bg-gradient-to-b from-neutral-700 via-neutral-900 to-black">
          <div className="text-center">
            <h2 className="text-5xl font-bold text-white">
              Lumina
            </h2>

            <p className="mt-3 text-gray-400">
              One
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}