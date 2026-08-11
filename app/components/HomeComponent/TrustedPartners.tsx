import mtt from "./images/3MTT.png";
import trevauty from "./images/trevauty.png";
import gdg from "./images/GDG.png"
import andela from "./images/andela.png"
import subtract from "./images/Subtract.png";
import Image from "next/image";

export default function TrustedPartners() {
  return (
    <div className="p-8">
      <div className="flex items-center gap-4">
        <p className="font-body whitespace-nowrap text-primary-500">
          05 - TRUSTED BY
        </p>

        <hr className="h-px flex-1 border-0 bg-neutral-border" />
      </div>
      <div>
        <h1 className="text-left">
          Organizations That Have Worked, <br />
          With Us
        </h1>
        <div className="flex justify-between mt-5">
            <Image src={mtt} alt="3mtt" className="w-79.5" />
            <Image src={trevauty} alt="3mtt" className="w-71.25"  />
            <Image src={gdg} alt="3mtt" className="w-44.75"  />
            <Image src={andela} alt="3mtt" className="w-30.5"  />
            <Image src={subtract} alt="3mtt" className="w-24.5"  />
        </div>
      </div>
    </div>
  );
}
