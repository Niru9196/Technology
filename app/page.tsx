import ContactUsForm from "@/components/ContactForm";
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Feature />
      <ContactUsForm />
      <Footer />
    </div>
  );
}
