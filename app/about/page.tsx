import type { Metadata } from "next";
import AboutArtist from "@/components/sections/AboutArtist";
import ClientExperience from "@/components/sections/ClientExperience";
import FinalStatement from "@/components/sections/FinalStatement";
import Testimonial from "@/components/sections/Testimonial";

export const metadata: Metadata = {
  title: "About",
  description:
    "Twelve years of documentary and editorial practice. Based in Copenhagen and Paris, available worldwide.",
};

export default function AboutPage() {
  return (
    <>
      <AboutArtist />
      <Testimonial />
      <ClientExperience />
      <FinalStatement />
    </>
  );
}
