import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useScrollAnimation() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Corrected line: Explicitly cast the elements to HTMLElement
      gsap.utils.toArray("[data-gsap]").forEach((element: HTMLElement) => {
        gsap.fromTo(
          element, // TypeScript now knows 'element' is an HTMLElement
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);
}