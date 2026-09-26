import AboutArtist from "@/components/sections/AboutArtist";
import ClientExperience from "@/components/sections/ClientExperience";
import ContactInquiry from "@/components/sections/ContactInquiry";
import Dispatches from "@/components/sections/Dispatches";
import FeaturedStory from "@/components/sections/FeaturedStory";
import FinalStatement from "@/components/sections/FinalStatement";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import SelectedWork from "@/components/sections/SelectedWork";
import Services from "@/components/sections/Services";
import Testimonial from "@/components/sections/Testimonial";

// The home page carries the full monograph; inquiry links scroll to the form below.
export default function HomePage() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <AboutArtist inquiryHref="#contact-inquiry" />
      <FeaturedStory />
      <Marquee />
      <Services inquiryHref="#contact-inquiry" />
      <ClientExperience />
      <Testimonial />
      <Dispatches />
      <ContactInquiry />
      <FinalStatement href="#contact-inquiry" />
    </>
  );
}
