import Image from "next/image";
import Link from "next/link";

import heroImage from "./images/hero-image1.svg";
import { Button } from "./ui/Button";
import { Container } from "./ui/Container";

export default function Hero() {
  return (
    <div className="overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl w-full">
          <div className="flex flex-col space-y-4 lg:w-1/2 w-full">
            <h1 className="text-4xl font-bold">
              Deploy your SAAS ideas to validate in minutes
            </h1>
            <p className="text-gray-600 text-lg">
              Save days of work and use our Next.js marketing template to launch
              your SAAS ideas and validate them fast with your customers.
            </p>
            <div className="flex flex-col space-y-2">
              <Link href="/login">
                <Button className="px-4 py-4">Get It Now</Button>
              </Link>
              <p className="text-sm text-gray-500 italic">
                Trusted by indiehackers worldwide.
              </p>
            </div>
            <div className="mt-4 text-gray-500">
              <span>Already a member? </span>
              <Link className="text-blue-600 hover:underline" href="/login">
                Sign In
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 w-full mt-8 lg:mt-0">
            <Image
              src={heroImage}
              alt="AI Headshot Illustration"
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
