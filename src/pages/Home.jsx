import Hero from '../components/sections/Hero';
import BeforeAfter from '../components/sections/BeforeAfter';
import Benefits from '../components/sections/Benefits';
import Technology from '../components/sections/Technology';
import VideoDemo from '../components/sections/VideoDemo';
import ProductOptions from '../components/sections/ProductOptions';
import HowItWorks from '../components/sections/HowItWorks';
import Testimonials from '../components/sections/Testimonials';
import AboutPreview from '../components/sections/AboutPreview';
import FAQPreview from '../components/sections/FAQPreview';
import CTAFinal from '../components/sections/CTAFinal';

export default function Home() {
  return (
    <>
      <Hero />
      <BeforeAfter />
      <Benefits />
      <Technology />
      <VideoDemo />
      <ProductOptions />
      <HowItWorks />
      <Testimonials />
      <AboutPreview />
      <FAQPreview />
      <CTAFinal />
    </>
  );
}
