import gsap from "../lib/gsap";

export function heroAnimation() {
  const tl = gsap.timeline();

  tl.from(".hero-tag", {
    y: 40,
    opacity: 0,
    duration: 0.6,
  });

  tl.from(
    ".hero-title",
    {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    },
    "-=0.2"
  );

  tl.from(
    ".hero-subtitle",
    {
      y: 30,
      opacity: 0,
      duration: 0.6,
    },
    "-=0.4"
  );

  tl.from(
    ".hero-description",
    {
      y: 30,
      opacity: 0,
      duration: 0.6,
    },
    "-=0.4"
  );

  tl.from(
    ".hero-buttons",
    {
      y: 30,
      opacity: 0,
      duration: 0.6,
    },
    "-=0.3"
  );

  tl.from(
    ".hero-phone",
    {
      y: 80,
      opacity: 0,
      scale: 0.85,
      duration: 1.2,
      ease: "power4.out",
    },
    "-=0.8"
  );
}