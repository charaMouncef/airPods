import { colors } from "../constants";

export default function Hero2() {
  

  return (
    <section className="bg-white flex flex-col relative mt-[9vh] p-6 m-6 rounded-2xl overflow-x-hidden">
      <div 
      className="relative mx-auto w-full max-w-150 h-100"
      >
        {colors.map((color, index) => (
          <img
            key={color}
            className={`absolute inset-0 w-full h-full object-contain show-image image-${index + 1}`}
            src={`/${color}`}
            alt="AirPods Max"
            loading="lazy"
          />
        ))}
      </div>

      <h1 className="text-black text-4xl md:text-9xl font-bold whitespace-nowrap absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        AirPods Max 2
      </h1>

      <h3 className="text-xl text-[#86868b] uppercase font-semibold">
        Listening. Remastered.
      </h3>

      <div className="flex justify-between items-center">
        <p className="text-black text-lg">$549</p>
        <button className="bg-[#0071e3] text-lg text-white font-semibold cursor-pointer px-6 py-2 rounded-full hover:scale-105 transition-all duration-300 ease-in-out">
          Buy
        </button>
      </div>
    </section>
  );
}
