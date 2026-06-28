export default function HeroImage() {
  return (
    <div className="relative flex items-center justify-center">

      <div className="absolute h-[500px] w-[500px] rounded-full bg-blue-300/20 blur-[120px]" />

      <div className="relative h-[700px] w-[340px] rounded-[60px] bg-neutral-900 p-[10px] shadow-[0_50px_120px_rgba(0,0,0,0.25)]">

        <div className="absolute left-1/2 top-4 h-6 w-36 -translate-x-1/2 rounded-full bg-black" />

        <div className="h-full w-full overflow-hidden rounded-[52px] bg-gradient-to-b from-neutral-700 via-neutral-900 to-black">

          <div className="flex h-full items-center justify-center">

            <div className="text-center">

              <h1 className="text-5xl font-bold text-white">
                Lumina
              </h1>

              <p className="mt-2 text-neutral-400">
                One
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}