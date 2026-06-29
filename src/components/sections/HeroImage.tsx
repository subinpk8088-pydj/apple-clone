import phone from "../../assets/images/hero/phone.jpg";

export default function HeroImage() {
  return (
    <div className="relative flex items-center justify-center">

      {/* Background Glow */}
      <div className="absolute h-[500px] w-[500px] rounded-full bg-blue-300/20 blur-[120px]" />

      <img
        src={phone}
        alt="iPhone"
        className="relative w-[320px] rounded-[30px] shadow-[0_50px_120px_rgba(0,0,0,0.25)] transition duration-500 hover:scale-[1.03] md:w-[420px]"
      />

    </div>
  );
}