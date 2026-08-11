import mtt from "./images/3MTT.png";
import trevauty from "./images/trevauty.png";
import gdg from "./images/GDG.png";
import andela from "./images/andela.png";
import subtract from "./images/Subtract.png";
import Image from "next/image";

export default function TrustedPartners() {
  return (
    <div className="p-5 sm:p-6 lg:p-8">
      <div className="flex items-center gap-4">
        <p className="font-body whitespace-nowrap text-primary-500">
          05 - TRUSTED BY
        </p>

        <hr className="h-px flex-1 border-0 bg-neutral-border" />
      </div>
      <div>
        <h1 className="text-left mb-6 lg:mb-10">
          Organizations That Have Worked, <br />
          With Us
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 mt-5 lg:flex-nowrap lg:justify-between lg:gap-0">
          <Image src={mtt} alt="3mtt" className="w-28 sm:w-40 lg:w-70" />
          <Image src={trevauty} alt="3mtt" className="w-24 sm:w-36 lg:w-60" />
          <Image src={gdg} alt="3mtt" className="w-20 sm:w-28 lg:w-44.75" />
          <Image src={andela} alt="3mtt" className="w-16 sm:w-20 lg:w-30.5" />
          <Image src={subtract} alt="3mtt" className="w-14 sm:w-16 lg:w-24.5" />
        </div>
      </div>
    </div>
  );
}
