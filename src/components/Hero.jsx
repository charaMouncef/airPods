export default function Hero() {
  return (
    <section className="bg-white flex flex-col mt-[9vh] p-6 m-6 rounded-2xl overflow-x-hidden">
      <video
        className="mx-auto w-full max-w-150 h-100"
        autoPlay
        muted
        playsInline
        preload="auto"
        poster="/videos/hero.jpg"
        loop
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      <h1 className="text-black text-2xl md:text-6xl font-bold">
        AirPods Pro 3
      </h1>
      <h3 className="text-md md:text-xl text-[#86868b] uppercase font-semibold">
        The world’s best in-ear Active Noise Cancellation.
      </h3>
      <div className="flex justify-between items-center">
        <p className="text-black text-lg">$249</p>
        <button className="bg-[#0071e3] text-lg text-white font-semibold cursor-pointer px-6 py-2 rounded-full hover:scale-105 transition-all duration-300 ease-in-out">
          Buy
        </button>
      </div>
    </section>
  );
}
