import { useRef } from 'react';

const GALLERY_IMAGES = [
'https://res.cloudinary.com/ll6thxdy/image/upload/f_auto,q_auto:eco,dpr_auto,c_fill,ar_3:4,w_400/v1786151471/0805_2_nyepub.jpg',

'https://res.cloudinary.com/ll6thxdy/image/upload/f_auto,q_auto:eco,dpr_auto,c_fill,ar_3:4,w_400/v1786151468/0805_10_dv55og.jpg',

'https://res.cloudinary.com/ll6thxdy/image/upload/f_auto,q_auto:eco,dpr_auto,c_fill,ar_3:4,w_400/v1786151472/0805_4_ta4j30.jpg',

'https://res.cloudinary.com/ll6thxdy/image/upload/f_auto,q_auto:eco,dpr_auto,c_fill,ar_3:4,w_400/v1786151472/0805_5_ypjs5y.jpg',

'https://res.cloudinary.com/ll6thxdy/image/upload/f_auto,q_auto:eco,dpr_auto,c_fill,ar_3:4,w_400/v1786151473/484824980_1808479793269400_7038359465863223345_n_s3euvn.jpg',

'https://res.cloudinary.com/ll6thxdy/image/upload/f_auto,q_auto:eco,dpr_auto,c_fill,ar_3:4,w_400/v1786151476/0805_3_ffmbxh.jpg',

'https://res.cloudinary.com/ll6thxdy/image/upload/f_auto,q_auto:eco,dpr_auto,c_fill,ar_3:4,w_400/v1786151469/0805_9_wwjcj3.jpg',

'https://res.cloudinary.com/ll6thxdy/image/upload/f_auto,q_auto:eco,dpr_auto,c_fill,ar_3:4,w_400/v1786151471/0805_1_jgro8k.jpg',

'https://res.cloudinary.com/ll6thxdy/image/upload/f_auto,q_auto:eco,dpr_auto,c_fill,ar_3:4,w_400/v1786151471/94619370_242448817109689_6951844033924694016_n_t0fbnz.jpg',

'https://res.cloudinary.com/ll6thxdy/image/upload/f_auto,q_auto:eco,dpr_auto,c_fill,ar_3:4,w_400/v1786151471/0805_ydc0j8.jpg',

'https://res.cloudinary.com/ll6thxdy/image/upload/f_auto,q_auto:eco,dpr_auto,c_fill,ar_3:4,w_400/v1786151470/0805_12_aqhdc3.jpg',

'https://res.cloudinary.com/ll6thxdy/image/upload/f_auto,q_auto:eco,dpr_auto,c_fill,ar_3:4,w_400/v1786151470/484978316_1808479776602735_1117950820531129718_n_1_mcrlev.jpg',

'https://res.cloudinary.com/ll6thxdy/image/upload/f_auto,q_auto:eco,dpr_auto,c_fill,ar_3:4,w_400/v1786151469/0805_11_jmaunb.jpg',

'https://res.cloudinary.com/ll6thxdy/image/upload/f_auto,q_auto:eco,dpr_auto,c_fill,ar_3:4,w_400/v1786151378/0805_8_tfyq3b.jpg',

'https://res.cloudinary.com/ll6thxdy/image/upload/f_auto,q_auto:eco,dpr_auto,c_fill,ar_3:4,w_400/v1786151360/0805_7_hcftoe.jpg',

'https://res.cloudinary.com/ll6thxdy/image/upload/f_auto,q_auto:eco,dpr_auto,c_fill,ar_3:4,w_400/v1786151355/0805_6_smoq0g.jpg',
];

export default function HairGallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sectionRef}
      id="lookbook"
      aria-label="Hair gallery"
      className="bg-[#FAF8F5] px-6 pt-12 pb-16 md:pt-16 md:pb-24"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-12 flex flex-col gap-3 md:mb-16">
          <span
            className="text-[11px] uppercase tracking-[0.3em] text-[#7a6b5d]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Lookbook
          </span>
          <h2
            className="text-[32px] leading-[1.1] tracking-tight text-[#2a221c] md:text-[44px]"
            style={{ fontFamily: "'Newsreader', serif", fontWeight: 400 }}
          >
            Bộ Sưu Tập Tóc Đẹp
          </h2>
          <p
            className="max-w-[480px] text-[14px] leading-[1.8] text-[#7a6b5d] md:text-[15px]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Tuyển tập các kiểu tóc nữ được thực hiện tại salon ở Lái Thiêu — từ những đường cắt tỉa tinh tế, kiểu uốn tự nhiên đến những phối màu nhuộm đa chiều, mỗi hình ảnh là một phong cách hoàn chỉnh.
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:gap-6"
        >
          {GALLERY_IMAGES.map((src, i) => (
            <div
              key={i}
              className="gallery-card group aspect-[3/4] overflow-hidden rounded-xl bg-[#f0ebe2] shadow-[0_2px_12px_rgba(42,34,28,0.06)] transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(42,34,28,0.12)]"
            >
              <img
                src={src}
                alt={`Mẫu tóc ${i + 1}`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
