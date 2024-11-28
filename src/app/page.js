import HomePage from "@/components/HomePage";
import Special from "@/components/Special";

export default function Home() {
  return (
    <>
      <Special />
      <div className="flex items-center justify-center flex-col mx-5 md:mx-8 2xl:mx-auto 2xl:max-w-6xl">
        <HomePage />
      </div>
    </>
  );
}
