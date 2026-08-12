import React from "react";
import CoreValueMenu from "./CoreValueMenu";

export default function CoreValue() {
  return (
    <div className="p-8">
      <div className="flex items-center gap-4">
        <p className="font-body whitespace-nowrap text-primary-500">
          01 - OUR CORE VALUE
        </p>

        <hr className="h-px flex-1 border-0 bg-neutral-border" />
      </div>
      <h1 className="text-left">What We Stand For</h1>
      <CoreValueMenu />
    </div>
  );
}
