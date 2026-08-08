import { useRef, useState, useEffect, lazy, Suspense } from 'react';
import gsap from 'gsap';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import VideoShowcase from '@/components/VideoShowcase';
import FloatingContact from '@/components/FloatingContact';

const HairGallery = lazy(() => import('@/components/HairGallery'));
const ServicesPricing = lazy(() => import('@/components/ServicesPricing'));
const Stylists = lazy(() => import('@/components/Stylists'));
const BookingCTA = lazy(() => import('@/components/BookingCTA'));
const Reviews = lazy(() => import('@/components/Reviews'));
const MapSection = lazy(() => import('@/components/MapSection'));
const Footer = lazy(() => import('@/components/Footer'));

export const HERO_CONTENT_DELAY_MS = 3000;

function App() {
  const heroRef = useRef<HTMLElement>(null);
  const floatingRef = useRef<HTMLDivElement>(null);
  const [heroContentVisible, setHeroContentVisible] = useState(false);

  useEffect(() => {
    const revealTimer = window.setTimeout(
      () => setHeroContentVisible(true),
      HERO_CONTENT_DELAY_MS,
    );

    return () => window.clearTimeout(revealTimer);
  }, []);

  useEffect(() => {
    if (!heroContentVisible || !floatingRef.current) return;

    const el = floatingRef.current;
    let revealed = false;

    const reveal = () => {
      if (revealed) return;
      revealed = true;
      gsap.to(el, {
        opacity: 1,
        pointerEvents: 'auto',
        duration: 0.4,
        ease: 'power2.out',
      });
      cleanup();
    };

    const cleanup = () => {
      window.removeEventListener('scroll', reveal);
      window.removeEventListener('mousemove', reveal);
      window.removeEventListener('click', reveal);
      window.removeEventListener('touchstart', reveal);
      window.removeEventListener('touchmove', reveal);
      window.removeEventListener('wheel', reveal);
      window.removeEventListener('keydown', reveal);
    };

    const opts: AddEventListenerOptions = { passive: true };

    window.addEventListener('scroll', reveal, opts);
    window.addEventListener('mousemove', reveal, opts);
    window.addEventListener('click', reveal, opts);
    window.addEventListener('touchstart', reveal, opts);
    window.addEventListener('touchmove', reveal, opts);
    window.addEventListener('wheel', reveal, opts);
    window.addEventListener('keydown', reveal, opts);

    return cleanup;
  }, [heroContentVisible]);

  return (
    <div className="min-h-screen bg-[#131313] text-[#e2e2e2]">
      <Nav heroRef={heroRef} visible={heroContentVisible} />

      <main>
        <Hero ref={heroRef} visible={heroContentVisible} />
        <VideoShowcase />
        <Suspense fallback={<div className="min-h-[50vh] bg-[#FAF8F5]" />}>
          <HairGallery />
          <ServicesPricing />
          <Stylists />
          <BookingCTA />
          <Reviews />
          <MapSection />
          <Footer />
        </Suspense>
      </main>

      <FloatingContact ref={floatingRef} />
    </div>
  );
}

export default App;
