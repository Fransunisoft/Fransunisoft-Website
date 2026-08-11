import Image from "next/image";
import challengeImage from "@/app/components/HomeComponent/images/challenge.png";
import ChallengeCard from "./ChallengeCard";
export default function Challenge() {
    
  return (
    <>
      <main className="p-10">
        <section className="grid grid-cols-2  items-center gap-10 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <div className="flex items-center gap-4">
              <p className="font-body whitespace-nowrap text-primary-500">
                01 - THE CHALLENGE
              </p>

              <hr className="h-px flex-1 border-0 bg-neutral-border" />
            </div>

            <div className="mt-6">
              <h2 className="font-heading text-2xl text-[#2c3e50]">
                Africa is at an AI Inflection <br />
                Point. Most Organizations <br />
                Aren't Ready.
              </h2>

              <p className="mt-6 font-heading leading-tight text-neutral-secondary">
                Artificial intelligence is reshaping industries globally.
                African organizations face a critical window — adopt now or fall
                further behind. The barriers are real but solvable.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full">
            <Image
              src={challengeImage}
              alt="Challenge"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </section>
        <section className="mt-10">
          <ChallengeCard />
        </section>
      </main>
    </>
  );
}
