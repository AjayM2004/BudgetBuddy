import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Divide } from "lucide-react";
import Link from "next/link";
import {
  featuresData,
  statsData,
  howItWorksData,
  testimonialsData,
} from "@/data/landing";
import HeroSection from "@/components/hero";
import { Card, CardContent } from "@/components/ui/card";
export default function Home() {
  return (
    <div className="mt-40">
      <HeroSection />

      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-24 ">
            Everything you need to manage your finances
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuresData.map((feature, index) => (
              <Card key={index}>
                <CardContent>
                  <p>{feature.icon}</p>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 ">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorksData.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {step.icon}
                </div>
                <div className="text-4xl font-semibold text-blue-600 mb-2">
                  {step.title}
                </div>

                <div className="text-gray-600">{step.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-24 ">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="pt-4">
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                  </div>
                  <p className="mt-4">{testimonial.quote}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-blue-500">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-center mb-6">
            Ready to Take control of your finances?
          </h2>
         <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
           Take the first step towards financial freedom and sign up today!
         </p>
         <Link href="/dashboard">
           <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-100 animate-bounce">
            Get Started
           </Button>
         </Link>
        </div>
      </section>
    </div>
  );
}
