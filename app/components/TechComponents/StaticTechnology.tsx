import Image from "next/image";
import teaching from "./images/staticTechnology.png";
import EachTextForStaticTechnology from "./EachTextForStaticTechnology";

export default function StaticTechnology() {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 p-8 lg:grid-cols-2 lg:gap-14">
      {/* Image */}
      <div className="lg:relative">
        <div className="lg:sticky lg:top-20">
          <Image
            src={teaching}
            alt="Static Technology"
            className="h-auto w-full object-cover"
          />
        </div>
      </div>

      {/* Text */}
      <div>
        <EachTextForStaticTechnology />
      </div>
    </div>
  );
}