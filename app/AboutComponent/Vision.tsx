import React from "react";
import VisionMissionTabs from "./VMTabs";
export default function Vision() {
  return (
    <div className="p-8">
      <div className="flex items-center gap-4">
        <p className="font-body whitespace-nowrap text-primary-500">
          01 - OUR VISION & MISSION
        </p>

        <hr className="h-px flex-1 border-0 bg-neutral-border" />
      </div>
      <VisionMissionTabs />
    </div>
  );
}
