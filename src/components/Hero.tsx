import { forwardRef } from 'react';

const HERO_VIDEO = 'https://res.cloudinary.com/ll6thxdy/video/upload/v1786162888/hero_v1pofd.mp4';

interface HeroProps {
  visible: boolean;
}

const Hero = forwardRef<HTMLElement, HeroProps>(({ visible }, ref) => {
  return (
    <section
      ref={ref}
      className="relative h-screen w-full overflow-hidden bg-[#1c1612]"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-label="Không gian salon Triệu Tóc Đẹp"
        className="absolute inset-0 h-full w-full object-cover object-center"
      >
        <source src={HERO_VIDEO} type="video/mp4" />
      </video>

      <div
        id="hero-stack"
        className={`hero-stack pointer-events-none absolute inset-0 z-[90] flex flex-col justify-end transition-opacity duration-700 ease-out ${visible ? 'opacity-100' : 'opacity-0'}`}
        aria-hidden={!visible}
      >
        <div className="hero-stack-inner flex flex-col">
          <h1
            id="hero-title"
            className="hero-title text-white tracking-tight"
            style={{
              fontFamily: "'Newsreader', serif",
              lineHeight: 1,
              fontWeight: 300,
              letterSpacing: '-0.01em',
            }}
          >
            Triệu
            <br />
            Tóc Đẹp
          </h1>

          <div
            id="hero-review-badge"
            className="hero-review-badge mt-6 inline-flex w-max max-w-none flex-nowrap items-center gap-2 whitespace-nowrap rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[10px] text-white backdrop-blur-sm"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
            aria-label="Google 4.9 trên 5, 1278 đánh giá"
          >
            <span className="font-medium tracking-[0.08em]">GOOGLE</span>
            <span className="inline-flex flex-nowrap gap-0.5 text-[12px] text-[#c9a96e]" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, index) => (
                <span key={index}>★</span>
              ))}
            </span>
            <span className="font-medium">4.9</span>
            <span className="text-white/50">·</span>
            <span>1278 đánh giá</span>
          </div>

          <div id="hero-content" className="hero-content mt-10 flex flex-col">
            <p
              className="hero-content-item hero-description text-white/65"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Salon tóc nữ tại Lái Thiêu, Thuận An, chuyên cắt, uốn, nhuộm, duỗi và phục hồi tóc. Mỗi kiểu tóc được tư vấn dựa trên chất tóc, gương mặt và phong cách riêng để bạn có một mái tóc đẹp, dễ chăm sóc và phù hợp với mình.
            </p>

            <div className="hero-content-item hero-cta-row pointer-events-auto mt-10 flex items-center gap-2 md:gap-4">
              <a
                href="https://zalo.me/0942777009"
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap bg-white px-5 py-4 text-[11px] font-medium uppercase tracking-[0.12em] text-[#1c1612] transition-colors duration-300 hover:bg-white/90 active:scale-95 md:px-8 md:text-[12px] md:tracking-[0.15em]"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                Đặt Lịch Hẹn
              </a>
              <a
                href="#services-pricing"
                className="whitespace-nowrap border border-white/60 px-5 py-4 text-[11px] font-medium uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:border-white hover:bg-white/10 active:scale-95 md:px-8 md:text-[12px] md:tracking-[0.15em]"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                Dịch Vụ &amp; Giá
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        id="hero-scroll"
        className="absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
      >
        <span
          className="text-[10px] uppercase tracking-[0.3em] text-white/40"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          Cuộn Xuống
        </span>
        <div className="h-12 w-px overflow-hidden bg-white/20">
          <div className="scroll-line h-1/2 w-full bg-white" />
        </div>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;
