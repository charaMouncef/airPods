import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cardsList } from "../constants";
gsap.registerPlugin(ScrollTrigger);

export default function Features() {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const cards = cardsRef.current;
      if (!section || !cards) return;

      // Distance needed to bring the final card fully into view. The section's
      // horizontal padding must be excluded, otherwise the last card stays
      // clipped. Clamp to 0 so wide viewports can't produce a negative range.
      const getScrollAmount = () => {
        const styles = getComputedStyle(section);
        const padding =
          (parseFloat(styles.paddingLeft) || 0) +
          (parseFloat(styles.paddingRight) || 0);
        const visibleWidth = Math.max(1, section.clientWidth - padding);

        return Math.max(0, cards.scrollWidth - visibleWidth);
      };

      gsap.to(cards, {
        x: () => -getScrollAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top 10%",
          end: () => `+=${Math.max(getScrollAmount(), 1)}`,
          pin: true,
          anticipatePin: 1,
          scrub: 3,
          invalidateOnRefresh: true,
          // markers: true, // Debugging
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      className="bg-white w-full py-5 px-10 md:px-20 overflow-x-clip"
      ref={sectionRef}
    >
      <h2 className="text-xl md:text-4xl uppercase font-semibold text-black mt-5">
        Get to know AirPods.
      </h2>

      <div className=" w-max flex flex-nowrap  mt-10 px-20" ref={cardsRef}>
        {cardsList.map((card) => (
          <div
          key={card.id}
          className="w-80 h-100 relative shrink-0 bg-[#f5f5f7] rounded-xl mr-5 p-4 overflow-hidden">
            <div className="absolute top-4 left-4 right-4 z-10">
              <span className="text-lg font-semibold text-gray-600">
                {card.title}
              </span>
              <h3 className="text-lg md:text-xl font-semibold text-black">
                {card.description}
              </h3>
            </div>

            <img
              className="absolute bottom-0 left-0 w-full h-full object-contain"
              src={card.img}
              alt={card.alt}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
