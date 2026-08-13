import Image from "next/image";
import vectorImage from "./images/Vector.png";
export default function EcoSystem() {
  return (
    <div className="p-8">
      <div className="flex items-center gap-4">
        <p className="font-body whitespace-nowrap text-primary-500">
          01 - Ecosystem
        </p>

        <hr className="h-px flex-1 border-0 bg-neutral-border" />
      </div>
      <div>
        <h1 className="text-left">
          SIx Specialized Unit. One <br />
          Shared Mission.
        </h1>
        <p className="font-body text-[#7C8084]">
          Every unit inside Fransunisoft is designed to work independently <br />and
          together — so your engagement with any part of FSX connects <br />to the
          full power of our ecosystem.
        </p>
      </div>
    </div>
  );
}
