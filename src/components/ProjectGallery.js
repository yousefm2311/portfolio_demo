import Image from "next/image";

export default function ProjectGallery({ images, locale, strings }) {
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <section className="rounded-2xl border border-blue-100 bg-white/80 p-5 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-900">
        {strings.projectPage.galleryTitle}
      </h2>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {images.map((image) => {
          const alt =
            image.alt?.[locale] || image.alt?.ar || image.alt?.en || "";
          return (
            <div
              key={image.src}
              className="overflow-hidden rounded-xl border border-blue-100"
            >
              <Image
                src={image.src}
                alt={alt}
                width={1200}
                height={800}
                className="h-48 w-full object-cover"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
