import EachLab from "./EachLab";
import ideaStage from "./images/idea-stage.png";
import organization from "./images/organization.png";
import preseed from "./images/pre-seed.png";
import lastscreen from "./images/lastscreen.png";

export default function WorkWith() {
  return (
    <div>
      <div className="p-8">
        <div className="flex items-center gap-4">
          <p className="font-body whitespace-nowrap text-primary-500">
            WHO WE WORK WITH
          </p>

          <hr className="h-px flex-1 border-0 bg-neutral-border" />
        </div>
        <h1>
          We work with founders &<br />
          Organization of all Stages
        </h1>
      </div>

      <div className="mt-8 mb-10 overflow-x-auto pl-12 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex w-max gap-8">
          <div className="w-72 shrink-0 sm:w-80">
            <EachLab image={ideaStage} title="Idea-Stage Founder" />
          </div>

          <div className="w-72 shrink-0 sm:w-80">
            <EachLab image={organization} title="Growth-Stage Founder" />
          </div>

          <div className="w-72 shrink-0 sm:w-80">
            <EachLab image={preseed} title="Venture Builder" />
          </div>

          <div className="w-72 shrink-0 sm:w-80">
            <EachLab image={lastscreen} title="Venture Builder" />
          </div>
        </div>
      </div>
    </div>
  );
}
