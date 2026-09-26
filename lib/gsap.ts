import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

// Every animation is gated behind this query so reduced-motion visitors get the static layout.
export const motionOK = "(prefers-reduced-motion: no-preference)";

// Slow, deliberate easing to match the "quiet, timeless" editorial posture in DESIGN.md
export const ease = "expo.out";

export { gsap, ScrollTrigger, SplitText, useGSAP };
