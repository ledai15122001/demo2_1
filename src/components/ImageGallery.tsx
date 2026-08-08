const GALLERY_IMAGES = [
  'https://res.cloudinary.com/ll6thxdy/image/upload/v1786151470/484978316_1808479776602735_1117950820531129718_n_1_mcrlev.jpg',
  'https://res.cloudinary.com/ll6thxdy/image/upload/v1786151471/0805_2_nyepub.jpg',
  'https://res.cloudinary.com/ll6thxdy/image/upload/v1786151471/94619370_242448817109689_6951844033924694016_n_t0fbnz.jpg',
  'https://res.cloudinary.com/ll6thxdy/image/upload/v1786151468/0805_10_dv55og.jpg',
  'https://res.cloudinary.com/ll6thxdy/image/upload/v1786151472/0805_5_ypjs5y.jpg',
  'https://res.cloudinary.com/ll6thxdy/image/upload/v1786151469/0805_9_wwjcj3.jpg',
  'https://res.cloudinary.com/ll6thxdy/image/upload/v1786151472/0805_4_ta4j30.jpg',
  'https://res.cloudinary.com/ll6thxdy/image/upload/v1786151355/0805_6_smoq0g.jpg',
  'https://res.cloudinary.com/ll6thxdy/image/upload/v1786151360/0805_7_hcftoe.jpg',
  'https://res.cloudinary.com/ll6thxdy/image/upload/v1786151476/0805_3_ffmbxh.jpg',
];

const ImageGallery = () => {
  return (
    <section className="overflow-hidden bg-[#FAF8F5] pb-20 pt-24 sm:pb-24 sm:pt-32" aria-labelledby="lookbook-heading">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16">
        <p className="mb-8 text-[10px] font-medium uppercase tracking-[0.38em] text-[#8b8178] sm:mb-10">
          Lookbook
        </p>

        <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1.55fr)_minmax(280px,0.9fr)] lg:gap-16">
          <h2
            id="lookbook-heading"
            className="max-w-[760px] text-[clamp(2.5rem,5vw,5rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-[#171513]"
          >
            <span className="block">Diện mạo mới, tự tin hơn mỗi ngày</span>
            <span className="mt-2 block font-display font-normal italic tracking-[-0.045em] text-[#4a433d]">
              Cùng Triệu Salon tại Lái Thiêu
            </span>
          </h2>

          <p className="max-w-[440px] pb-1 text-sm leading-7 text-[#6d655e] lg:text-[15px]">
            Khám phá những diện mạo mới tại Triệu Salon Lái Thiêu — nơi mỗi kiểu tóc được chăm chút theo cá tính, phong cách và đường nét riêng của bạn. Từ cắt, nhuộm đến tạo kiểu, chúng tôi giúp bạn tìm thấy mái tóc phù hợp và tự tin hơn mỗi ngày.
          </p>
        </div>
      </div>

      <div className="gallery-marquee-track mt-20 flex w-max will-change-transform gap-3 sm:mt-28">
        {[...GALLERY_IMAGES, ...GALLERY_IMAGES].map((src, i) => (
          <div
            key={i}
            className="h-[52vh] shrink-0"
            style={{ width: 'clamp(200px, 33vw, 480px)' }}
          >
            <img
              src={src}
              alt=""
              draggable={false}
              loading="lazy"
              className="h-full w-full select-none object-cover object-center"
              style={{ display: 'block' }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageGallery;
