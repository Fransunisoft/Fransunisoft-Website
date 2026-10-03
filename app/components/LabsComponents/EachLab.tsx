import Image, { StaticImageData } from "next/image";

interface EachLabProps {
  image: StaticImageData;
  title: string;
}

export default function EachLab({ image, title }: EachLabProps) {
  return (
    <div className="relative h-110 w-full max-w-88.25 overflow-hidden rounded-[35px]">
      {/* Image */}
      <Image
        src={image}
        alt={title}
        fill
        sizes="(min-width: 640px) 320px, 288px"
        className="object-cover"
      />

      {/* Dark gradient */}
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent" />

      {/* Text */}
      <div className="absolute bottom-14 left-0 w-full px-4 text-center">
        <h5 className="font-serif text-2xl font-bold text-white">{title}</h5>
      </div>
    </div>
  );
}
