import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactContent from "@/components/pages/ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a project quote from NuraBuild Contracting — villa renovation, fit-out, approvals, and supervision across Dubai and Sharjah.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        title="Request a Project Quote"
        subtitle="Start with a clear enquiry and a structured project conversation."
      />
      <Breadcrumbs items={[{ label: "Contact" }]} />
      <ContactContent />
    </>
  );
}
