import { models } from "../constants";
export default function Models() {
  return (
    <section className="md:p-6 pb-2">
      <h2 className="text-black text-center text-2xl md:text-6xl font-bold">
        AirPods models
      </h2>
      <div className="flex flex-wrap md:flex-nowrap justify-center gap-8 mt-12">
        {models.map((model, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              className="h-50 object-contain"
              src={model.image}
              alt={model.name}
              loading="lazy"
            />
            <h3 className="text-black text-lg font-bold mt-8">{model.name}</h3>
            <p className="text-gray-600 md:text-center mt-2">
              {model.description}
            </p>
            <p className="font-bold mt-2">{model.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
