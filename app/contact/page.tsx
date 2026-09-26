import type { Metadata } from "next";
import ContactInquiry from "@/components/sections/ContactInquiry";
import Testimonial from "@/components/sections/Testimonial";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "For wedding bookings, portrait appointments, editorial assignments, or print monograph licensing.",
};

export default function ContactPage() {
  return (
    <>
      <ContactInquiry />
      <Testimonial />
    </>
  );
}
