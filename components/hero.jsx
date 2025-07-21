import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
const HeroSection = () => {
  return (
    <div className="pb-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title">
          Manage Your Budgets <br /> with Intelligence
        </h1>
        <p>
          An AI-Powered Finance Platform for Smart Budgeting, analyze and
          optimize your spending with real-time insights.
        </p>
        <div>
          <Link href="/dashboard">
            <Button size="lg" className="px-8" variant={"outline"}>
              Get Started
            </Button>
          </Link>
          <Link href="/dashboard">
            <Button size="lg" className="px-8">
              Watch Demo
            </Button>
          </Link>
        </div>
        <div>
          <div>
            <Image
              src="/banner.jpeg"
              alt="Dashboard Preview"
              width={1280}
              height={720}
              className="rounded-lg shadow-2xl border mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
