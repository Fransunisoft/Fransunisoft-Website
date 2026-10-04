import Image from "next/image";
import vectorImage from "./images/Vector.png";
export default function EcoSystem() {
  return (
    <div id="ecosystem" className=" section-layout">
      <div className="flex items-center gap-4">
        <p className="font-body whitespace-nowrap text-primary-500">
          03 - Ecosystem
        </p>

        <hr className="h-px flex-1 border-0 bg-neutral-border" />
      </div>
      <div>
        <h2 className="text-left">
          Six Specialized Unit. One <br />
          Shared Mission.
        </h2>
        <p className="font-body">
          Every unit inside Fransunisoft is designed to work independently <br />and
          together — so your engagement with any part of FSX connects <br />to the
          full power of our ecosystem.
        </p>
      </div>
    </div>
  );
}
