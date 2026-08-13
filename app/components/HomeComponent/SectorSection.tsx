import React from "react"
import Sector from "./Sector";

export default function SectorSection() {
  return (
    <div>
      <div className="p-8">
        <div className="flex items-center gap-4">
          <p className="font-body whitespace-nowrap text-primary-500">
            04 - OUR PARTNERS
          </p>

          <hr className="h-px flex-1 border-0 bg-neutral-border" />
        </div>
        <div>
          <h1 className="text-left">
            Work Across Sectors, <br />
            Scales, and Stages
          </h1>
          <p className="font-body text-[#7C8084]">
            Whether you are a government ministry modernizing public{" "}
            <br />
            services, a financial institution adopting AI, or a startup looking{" "}
            <br />
            to build at speed — Fransunisoft has a path for you
          </p>
        </div>
      </div>
      <Sector />
    </div>
  );
}
