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
    <section className="overflow-hidden bg-[#131313]" aria-label="Salon gallery">
      <div className="gallery-marquee-track flex w-max will-change-transform gap-3">
        {[...GALLERY_IMAGES, ...GALLERY_IMAGES].map((src, i) => (
          <div
            key={i}
            className="h-[80vh] shrink-0"
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
