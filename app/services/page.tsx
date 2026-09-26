import type { Metadata } from "next";
import ClientExperience from "@/components/sections/ClientExperience";
import FeaturedStory from "@/components/sections/FeaturedStory";
import FinalStatement from "@/components/sections/FinalStatement";
import Services from "@/components/sections/Services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Wedding, portrait, fashion, event, commercial and book commissions — each tailored with archival print curation.",
};

export default function ServicesPage() {
  return (
    <>
      <Services />
      <ClientExperience />
      <FeaturedStory />
      <FinalStatement />
    </>
  );
}
