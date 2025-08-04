/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface Slide {
  src: string;
  alt: string;
}

export default function Home() {
  const slides: Slide[] = [
    {
      src: "https://cdn.durable.co/getty/9qn7UCReFTR8LXRaMYwsrGLqSOxMDDjY8FngelWDs2ESH3SyEpGVEEyUZyiEcs9w.jpeg",
      alt: "Close up technician engineer wearing and adjust protective safety glasses. Safety equipment for industry factory. Safety at work concept.",
    },
    {
      src: "https://cdn.durable.co/getty/9gNM7vg62T4ZvtTcKfMkjGA4kFiyIbTCRqcx0kUbiYXALxicpVgvoMj6BnyKIWWV.jpeg",
      alt: "Fire extinguisher and a protective helmet.",
    },
    {
      src: "https://cdn.durable.co/getty/9B7dc7HFBO2b2Grnrt6TXVrbLB8FLBBUnaKoVKhpF17j6MxDVHKupN7r2z7dnU1e.jpeg",
      alt: "Selective focus at safety hardhat that put on the heavy machine inside of the factory production line. Safety and protection gear concept in industrial area to prevent injury of worker or accident.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-black">
      {/* Hero Section */}
      <section className="relative hero-section  w-full h-full">
        <div className="flex relative break-word items-center justify-center fix-safari-flickering w-full h-full">
          <div className="flex w-full break-word items-center min-w-full min-h-full">
            <div className="absolute inset-0 z-5 min-w-full min-h-full">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 z-0 ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <span>
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      decoding="async"
                      className="w-full h-full object-center object-cover"
                      sizes="100vw"
                      priority={index === 0}
                      onError={(e) => {
                        e.target.src = "/fallback-image.jpg";
                      }}
                    />
                  </span>
                </div>
              ))}
            </div>
            <div className="absolute inset-0 z-10 pointer-events-none">
              <div
                className="absolute inset-0 z-10"
                style={{ backgroundColor: "rgb(82, 0, 245)", opacity: "0.75" }}
              />
            </div>
            <div className="relative z-10 container mx-auto px-5 md:px-6 transition-all duration-300 pt-20 lg:pt-48 pb-20 lg:pb-48">
              <div className="transition-all ease-in-out duration-500 opacity-100 translate-y-0">
                <div className="flex flex-col gap-4 w-full max-w-2xl items-start">
                  <h1
                    className="break-word heading-xlarge"
                    style={{ color: "rgb(255, 255, 255)" }}
                  >
                    Reliable Protection, Exceptional Quality
                  </h1>
                  <pre
                    className="body-normal"
                    style={{ color: "rgb(255, 255, 255)" }}
                  >
                    Ensure your safety with our top-grade safety equipment and
                    premier fiberglass solutions crafted for durability and
                    excellence.
                  </pre>
                  <div className="flex md:inline-flex flex-col md:flex-row gap-4 w-full md:w-max mt-4">
                    <button type="button" className="button w-full md:w-max md">
                      Explore Our Services
                    </button>
                  </div>
                  <div className="flex items-center gap-2 mt-12">
                    {slides.map((_, index) => (
                      <div
                        key={index}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          index === currentSlide ? "w-6" : "w-2 opacity-20"
                        }`}
                        style={{ backgroundColor: "rgb(255, 255, 255)" }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <svg
            className="absolute bottom-0 left-0 w-full h-auto"
            width={1218}
            height={860}
            viewBox="0 0 1218 860"
          >
            <clipPath id="688e55bffa86f3be48523163-jaggedRight">
              <rect width={1218} height={786} fill="transparent" />
              <path
                d="M1218 0L812 74L406 0L0 74V0H1218"
                transform="translate(0, 786)"
                fill="transparent"
              />
            </clipPath>
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section className="relative z-10">
        <div className="container mx-auto px-6 pt-12 lg:pt-20 pb-12 lg:pb-20">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center transition-all duration-500 ease-in-out">
            <div className="flex-1 flex flex-col max-w-3xl">
              <h2 className="text-3xl font-bold mb-4">
                Your Trusted Partner in Safety Solutions
              </h2>
              <p className="text-base">
                At Pacific Safety Solution, based in the vibrant city of Lagos,
                Nigeria, we specialize in providing top-tier safety equipment
                and fiberglass services. Our dedication to quality and
                innovation ensures that each product meets stringent safety
                standards and client needs. We are committed to safeguarding
                your work environment with reliable solutions that offer peace
                of mind. Trust us to deliver excellence, as we continue our
                mission to enhance workplace safety across diverse industries.
              </p>
            </div>
            <div className="flex-1 w-full">
              <div className="relative aspect-[3/2] w-full">
                <Image
                  src="https://cdn.durable.co/getty/9BfjXA2YUluml0DCPeiy3aKM1CxWY8gGRC7OfxNunJsHiaAVEKeu3Wz1nSYjMAuv.jpeg"
                  alt="Technician adjusting safety glasses"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative z-10">
        <div className="container mx-auto px-6 pt-16 lg:pt-32 pb-0">
          <div className="flex flex-col gap-4 mb-6 items-start transition-all duration-500 ease-in-out">
            <p className="text-sm font-semibold">Superior Protection</p>
            <h2 className="text-3xl font-bold">
              Advanced Safety Solutions Provider
            </h2>
            <p className="text-base">
              Discover cutting-edge fiberglass services and comprehensive safety
              equipment solutions tailored to meet Lagos&apos; unique industrial
              needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                img: "https://cdn.durable.co/getty/69UEvt8kSydw5ndhzGws5SW3bWZX9ycVgUTz8fGP51Cv2aIftZjudTUyaEwSBBZw.jpeg",
                alt: "Safety",
                title: "Comprehensive Safety Gear",
                desc: "Offering a wide range of personal protective equipment tailored for various industries.",
              },
              {
                img: "https://cdn.durable.co/getty/12yaDDuDKunq8LglX5cl3XoxeF1tpy8uvyAVOqaVAeP68fyvDzLpumFt698Qagta.jpeg",
                alt: "Fiberglass factory worker",
                title: "Custom Fiberglass Fabrication",
                desc: "Expertly crafted fiberglass solutions designed to meet specific client needs.",
              },
              {
                img: "https://cdn.durable.co/getty/2365A921vhl4BTnax8B2IXXa1T3hQkO8VPAXaTSFRPGiTeONPGoXitTwYykajzza.jpeg",
                alt: "Work safety equipment",
                title: "On-site Safety Assessments",
                desc: "Professional evaluation of workplace safety to identify and mitigate risks.",
              },
              {
                img: "https://cdn.durable.co/getty/304091XtHsFriQD8DMXa1FDFRnGB7nYdRxc5Mm743WF47i2XaLH2K4bfuCx1Gkox.jpeg",
                alt: "Fire Fighter Rescue Training Dummy",
                title: "Emergency Response Training",
                desc: "Hands-on training sessions to prepare teams for emergency situations.",
              },
              {
                img: "https://cdn.durable.co/getty/12H5mT1ZeSnKWoqX2Y4i9cpbGHjUvAfu9FZKKPiif9kx5CDXUO9SPK2toSek1DMM.jpeg",
                alt: "Fire extinguisher and helmet",
                title: "Durable Equipment Supply",
                desc: "Providing high-quality, long-lasting safety equipment to ensure maximum protection.",
              },
              {
                img: "https://cdn.durable.co/getty/9RFSqoYan5ukTG0ZpmS0dxpDkq3cwdRGwm6UZsEUnbzONgXbOu6wCw8vw160YGnt.jpeg",
                alt: "Worker adjusting machine",
                title: "Maintenance and Repair Services",
                desc: "Regular maintenance and repair of safety gear to ensure optimal performance.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg transition-all duration-500 ease-in-out"
              >
                <div className="relative aspect-square">
                  <Image
                    src={service.img}
                    alt={service.alt}
                    fill
                    className="object-cover rounded-lg"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xl font-semibold mb-4">{service.title}</p>
                  <p className="text-base">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative z-10">
        <div className="container mx-auto px-6 pt-16 lg:pt-32 pb-16 lg:pb-32">
          <div className="max-w-5xl text-left transition-all duration-500 ease-in-out">
            <h3 className="text-2xl font-semibold">
              Protect your workforce with Pacific Safety Solutions, Lagos&apos;
              premier choice for comprehensive safety equipment installation and
              maintenance. With unparalleled expertise, we ensure your safety
              systems are always up to standard. Choose us for reliable service
              and peace of mind in safeguarding your business environment from
              potential hazards.
            </h3>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-10">
        <div className="container mx-auto px-6 pt-16 lg:pt-32 pb-16 lg:pb-32">
          <div className="flex flex-col gap-4 max-w-5xl mb-12 items-start text-left transition-all duration-500 ease-in-out">
            <p className="text-sm font-semibold">Trusted Feedback</p>
            <h2 className="text-3xl font-bold">
              Proven Safety Solutions: Client Success Stories
            </h2>
            <p className="text-base">
              &quot;Excellent service and top-quality safety equipment. Their
              expertise in fiberglass solutions is unmatched in Lagos. Highly
              recommended!&quot; - Ada N.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                img: "https://cdn.durable.co/getty/2cQFrN4FQNcQxyKeYxdeBCTb3VivivTPkJwf5lsN4aTE2xEPjucNzAkW6m7FjYwJ.jpeg",
                alt: "Adewale Johnson",
                name: "Adewale Johnson",
                quote:
                  "Pacific Safety Solution exceeded my expectations with top-notch equipment and professional fiberglass services. Their team is incredibly knowledgeable and attentive to client needs. I highly recommend them to anyone seeking reliable safety solutions in Lagos.",
              },
              {
                img: "https://cdn.durable.co/getty/4BTtFyncXAItYHV0Mv4aA0hYKRMYJ8QAh4lO8u11NCNTxfAH0H0xBe5It4HEpSOk.jpeg",
                alt: "Ngozi Okafor",
                name: "Ngozi Okafor",
                quote:
                  "Pacific Safety Solution impressed me with their exceptional service and high-quality safety equipment. The team’s expertise in fiberglass services was evident, and they were always ready to assist. A trustworthy company for all safety needs in Lagos!",
              },
              {
                img: "https://cdn.durable.co/getty/19JcE3FyW9oyMVK85U5pjH9JVBKyZmbBncQSZjjf68D535RSKHGIYjBffzDlG7nS.jpeg",
                alt: "Chidi Nwosu",
                name: "Chidi Nwosu",
                quote:
                  "I am thoroughly impressed by Pacific Safety Solution’s dedication to providing top-tier safety equipment and fiberglass services. Their expertise and customer-focused approach set them apart in Lagos. It’s always a pleasure working with such a reliable and professional team.",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="flex flex-col items-start p-4 md:p-12 bg-black bg-opacity-5 rounded-lg transition-all duration-500 ease-in-out"
              >
                <div className="relative w-24 h-24 rounded-full overflow-hidden mb-6">
                  <Image
                    src={testimonial.img}
                    alt={testimonial.alt}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {testimonial.quote}
                </h3>
                <p className="text-base">– {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative z-10">
        <div className="container mx-auto px-6 pt-16 lg:pt-32 pb-16 lg:pb-32">
          <div className="flex flex-col gap-4 mb-6 items-start transition-all duration-500 ease-in-out">
            <p className="text-sm font-semibold">Assured Safety</p>
            <h2 className="text-3xl font-bold">
              Delivering Trusted Safety Solutions
            </h2>
            <p className="text-base">
              At Pacific Safety Solutions, we prioritize unwavering integrity,
              innovation, and excellence to ensure ultimate protection and
              client satisfaction.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "Commitment to Safety",
                desc: "At Pacific Safety Solution, safety is not just a priority, it is our core mission. We are dedicated to providing top-notch safety equipment and services that ensure the well-being of our clients and their teams. Every product and service we offer is designed with the highest safety standards in mind.",
              },
              {
                title: "Quality Assurance",
                desc: "Quality is at the heart of everything we do. Our fiberglass services and safety equipment are crafted with precision and care, ensuring durability and reliability. We adhere to strict quality control measures to guarantee that our clients receive only the best.",
              },
              {
                title: "Innovation",
                desc: "We believe in the power of innovation to improve safety standards. Pacific Safety Solution is committed to staying at the forefront of technological advancements in the industry, constantly seeking new ways to enhance our products and services.",
              },
              {
                title: "Customer Focus",
                desc: "Our clients are at the center of our operations. We strive to understand their unique needs and provide tailored solutions that exceed expectations. Our dedicated team is always ready to offer support and guidance, ensuring a seamless experience.",
              },
              {
                title: "Integrity",
                desc: "Honesty and transparency are fundamental to our business practices. We build trust with our clients through open communication and by delivering on our promises. At Pacific Safety Solution, integrity is the foundation of our relationships.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="p-6 rounded-lg transition-all duration-500 ease-in-out"
              >
                <p className="text-xl font-semibold mb-4">{value.title}</p>
                <p className="text-base">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10">
        <div className="container mx-auto px-6 pt-16 lg:pt-32 pb-12 lg:pb-20">
          <div className="flex flex-col gap-4 max-w-3xl items-start text-left transition-all duration-500 ease-in-out">
            <h2 className="text-3xl font-bold">Ensure Your Safety Today</h2>
            <p className="text-base">
              Choose Pacific Safety Solution in Lagos for expert maintenance of
              safety equipment and fiberglass services. Secure your life-saving
              appliances with our reliable and professional care.
            </p>
            <button className="border-2 border-black px-6 py-2 text-base font-medium hover:bg-black hover:text-white transition">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative z-10">
        <div className="container mx-auto px-6 pt-16 lg:pt-32 pb-16 lg:pb-32">
          <div className="flex flex-col gap-10 max-w-3xl mx-auto transition-all duration-500 ease-in-out">
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-2">
                Reach Out to Our Team
              </h3>
              <p className="text-base">
                Contact Pacific Safety Solution in Lagos for expert safety
                equipment services.
              </p>
            </div>
            <form className="flex flex-col gap-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1">Name</label>
                  <input
                    type="text"
                    className="w-full p-2 rounded-lg bg-black bg-opacity-10 text-black placeholder-black"
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full p-2 rounded-lg bg-black bg-opacity-10 text-black placeholder-black"
                    autoComplete="email"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm mb-1">Message</label>
                  <textarea
                    rows={5}
                    className="w-full p-2 rounded-lg bg-black bg-opacity-10 text-black placeholder-black"
                  ></textarea>
                </div>
              </div>
              <div className="flex flex-col items-center text-center">
                <button
                  type="submit"
                  className="border-2 border-black px-6 py-2 text-base font-medium hover:bg-black hover:text-white transition min-w-[144px]"
                >
                  Send Message
                </button>
                <div className="text-xs text-gray-500 mt-4 max-w-sm">
                  This site is protected by reCAPTCHA and the Google{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    className="font-bold text-black"
                  >
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://policies.google.com/terms"
                    target="_blank"
                    className="font-bold text-black"
                  >
                    Terms of Service
                  </a>{" "}
                  apply.
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
