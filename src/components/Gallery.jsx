import Image from "next/image";
import BlurFade from "./ui/blur-fade";

// const images = Array.from({ length: 10 }, (_, i) => {
//   const isLandscape = i % 2 === 0;
//   const width = isLandscape ? 800 : 600;
//   const height = isLandscape ? 600 : 800;
//   return `${gallery}/p${i + 1}`;
// });

const images = Array.from({ length: 9 }, (_, i) => `/gallery/p${i + 1}.jpg`);
export function Gallery() {
  return (
    <section id="photos" className="my-8">
      <div className="columns-2 gap-4 sm:columns-3">
      {images.map((imageUrl, idx) => (
          <BlurFade key={imageUrl} delay={0.25 + idx * 0.05} inView>
            <div className="mb-4 relative">
              <Image
                className="rounded-lg object-cover"
                src={imageUrl}
                alt={`Gallery image ${idx + 1}`}
                width={800}
                height={800}
                layout="responsive"
              />
            </div>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
