import Image from "next/image";
import teaching from "./images/staticTechnology.webp";
import EachTextForStaticTechnology from "./EachTextForStaticTechnology";

export default function StaticTechnology() {
  return (
    <section className="section-layout">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
        {/* Image */}
        <div className="lg:relative">
          <div className="lg:sticky lg:top-20">
            <Image
              src={teaching}
              alt="Static Technology"
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="h-full md:h-135 rounded-xl w-full object-cover"
            />
          </div>
        </div>

        {/* Text */}
        <div>
          <EachTextForStaticTechnology />
        </div>
      </div>
    </section>
  );
}
