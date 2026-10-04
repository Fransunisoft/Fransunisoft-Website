import Image from "next/image";
import Button from "@/app/components/ui/Button";

export default function NotFound() {
  return (
    <main className="section-layout flex min-h-[55vh] flex-col items-center justify-center text-center text-[#2c3e50]">
      <Image
        src="/frans404.png"
        alt="404 page not found"
        width={380}
        height={300}
        sizes="(max-width: 480px) 90vw, 380px"
        className="h-auto w-full max-w-[380px]"
      />

      <div className="mt-8 flex flex-col items-center gap-4">
        <h1 className="font-heading text-3xl font-bold sm:text-4xl">
          Sorry! Page not found
        </h1>
        <p className="max-w-xl text-base text-neutral-secondary sm:text-lg">
          The page you are looking for does not exist or has been moved.
        </p>
      </div>

      <Button href="/" size="lg" className="mt-8 min-w-[200px] sm:min-w-[250px]">
        Back To Home
      </Button>
    </main>
  );
}
