import React from "react";

export default function VMTabs() {
  return (
    <div className="rounded-[20px] bg-[#072D55] p-6">
      <div className="grid grid-cols-[1fr_auto_1fr] items-stretch gap-10">
        {/* Vision */}
        <div className="group rounded-[15px] border border-transparent bg-[#0D519A] p-7 transition-all duration-300 hover:border-accent-500 hover:bg-transparent">
          <p className="mb-5 font-body text-accent-500">VISION</p>

          <h3 className="text-3xl font-bold leading-[1.08] text-white">
            To become Africa's most trusted AI Transformation, Talent &
            Technology company — the partner organizations turn to when they are
            serious about building the future.
          </h3>
        </div>

        {/* Divider */}
        <div className="my-2 w-px bg-white/50" />

        {/* Mission */}
        <div className="group rounded-[15px] border border-transparent bg-[#0D519A] p-7 transition-all duration-300 hover:border-accent-500 hover:bg-transparent">
          <p className="mb-5 font-body text-accent-500">MISSION</p>

          <h3 className="text-3xl font-bold leading-[1.08] text-white">
            To help African organizations adopt AI, develop future-ready talent,
            and implement technology solutions that drive growth, efficiency,
            and lasting innovation.
          </h3>
        </div>
      </div>
    </div>
  );
}
