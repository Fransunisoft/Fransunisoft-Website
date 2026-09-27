import mtt from "./images/3MTT.png";
import trevauty from "./images/trevauty.png";
import gdg from "./images/GDG.png";
import andela from "./images/andela.png";
import subtract from "./images/Subtract.png";
import paystack from "./images/paystack.png";
import Image from "next/image";

const partners = [
  { image: mtt, name: "3MTT", width: "w-28 sm:w-40 lg:w-70" },
  { image: trevauty, name: "Trevauty", width: "w-24 sm:w-36 lg:w-60" },
  { image: gdg, name: "Google Developer Groups", width: "w-20 sm:w-28 lg:w-44.75" },
  { image: andela, name: "Andela", width: "w-16 sm:w-20 lg:w-30.5" },
  { image: subtract, name: "Partner logo", width: "w-14 sm:w-16 lg:w-24.5" },
  { image: paystack, name: "Paystack", width: "w-14 sm:w-16 lg:w-24.5" },
];

export default function TrustedPartners() {
  return (
    <div className="section-layout">
      <div className="flex items-center gap-4">
        <p className="font-body whitespace-nowrap text-primary-500">
          06 - TRUSTED BY
        </p>

        <hr className="h-px flex-1 border-0 bg-neutral-border" />
      </div>
      <div>
        <h2 className="text-left mb-6 lg:mb-10">
          Organizations That Have Worked, <br />
          With Us
        </h2>
        <div className="mt-5 overflow-hidden">
          <div className="marquee-track flex w-max min-w-[200%]">
            {[0, 1].map((copy) => (
              <div
                key={copy}
                aria-hidden={copy === 1 ? true : undefined}
                className="flex flex-1 shrink-0 items-center justify-around gap-8 pr-8 sm:gap-12 sm:pr-12 lg:gap-16 lg:pr-16"
              >
                {partners.map((partner) => (
                  <Image
                    key={partner.name}
                    src={partner.image}
                    alt={copy === 0 ? partner.name : ""}
                    className={`h-auto shrink-0 object-contain ${partner.width}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
