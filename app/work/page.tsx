import type { Metadata } from "next";
import Dispatches from "@/components/sections/Dispatches";
import FeaturedStory from "@/components/sections/FeaturedStory";
import FinalStatement from "@/components/sections/FinalStatement";
import SelectedWork from "@/components/sections/SelectedWork";

export const metadata: Metadata = {
  title: "Selected Work",
  description: "A collection of moments, people, places and stories — weddings, portraits, fashion, travel and commercial commissions.",
};

export default function WorkPage() {
  return (
    <>
      <SelectedWork />
      <FeaturedStory />
      <Dispatches />
      <FinalStatement />
    </>
  );
}
