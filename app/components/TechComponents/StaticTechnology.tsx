import Image from "next/image";
import teaching from "./images/staticTechnology.png";
import EachTextForStaticTechnology from "./EachTextForStaticTechnology";
export default function StaticTechnology() {
  return (
    <div className="mx-auto p-8 grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
      {/* Image */}
      <div className="lg:sticky lg:top-20 lg:h-fit">
        <Image
          src={teaching}
          alt="Static Technology"
          className="h-auto w-full object-cover"
        />
      </div>

      {/* Text */}
      <div>
        <EachTextForStaticTechnology />
      </div>
    </div>
  );
}
