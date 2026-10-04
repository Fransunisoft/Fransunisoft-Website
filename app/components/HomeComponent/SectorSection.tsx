import React from "react"
import Sector from "./Sector";

export default function SectorSection() {
  return (
    <div>
      <div className="section-layout">
        <div className="flex items-center gap-4">
          <p className="font-body whitespace-nowrap text-primary-500">
            04 - OUR PARTNERS
          </p>

          <hr className="h-px flex-1 border-0 bg-neutral-border" />
        </div>
        <div>
          <h2 className="text-left">
            Work Across Sectors, <br />
            Scales, and Stages
          </h2>
          <p className="font-body text-[#333]">
            Whether you are a government ministry modernizing public services,  <br /> a financial institution adopting AI, or a startup looking to build at speed —  <br /> Fransunisoft has a path for you
          </p>
        </div>
      </div>
      <Sector />
    </div>
  );
}
