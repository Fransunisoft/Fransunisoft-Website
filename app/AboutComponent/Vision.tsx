import React from "react";
import VisionMissionTabs from "./VMTabs";
import styles from "./AboutMobile.module.css";
export default function Vision() {
  return (
    <div className={`section-layout ${styles.vision}`}>
      <div className="flex items-center gap-4">
        <p className="font-body whitespace-nowrap text-primary-500">
          02 - OUR VISION & MISSION
        </p>

        <hr className="h-px flex-1 border-0 bg-neutral-border" /> <br />
      </div>
      <VisionMissionTabs />
    </div>
  );
}
