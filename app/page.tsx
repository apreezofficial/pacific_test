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
      alt: "Close up technician engineer wearing and adjust protective safety glasses.",
    },
    {
      src: "https://cdn.durable.co/getty/9gNM7vg62T4ZvtTcKfMkjGA4kFiyIbTCRqcx0kUbiYXALxicpVgvoMj6BnyKIWWV.jpeg",
      alt: "Fire extinguisher and a protective helmet.",
    },
    {
      src: "https://cdn.durable.co/getty/9B7dc7HFBO2b2Grnrt6TXVrbLB8FLBBUnaKoVKhpF17j6MxDVHKupN7r2z7dnU1e.jpeg",
      alt: "Selective focus at safety hardhat in the factory production line.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-black">
      {/* Hero Section */}
      <section
        className="relative lg:h-[780px] w-full"
        style={{
          clipPath:
            "polygon(0 0, 100% 0, 100% 90%, 75% 100%, 50% 90%, 25% 100%, 0 90%)",
          WebkitClipPath:
            "polygon(0 0, 100% 0, 100% 90%, 75% 100%, 50% 90%, 25% 100%, 0 90%)",
        }}
      >
        <div className="relative w-full h-full">
          <div
            className="absolute inset-0 z-0"
            style={{
              clipPath:
                "polygon(0 0, 100% 0, 100% 90%, 66.66% 100%, 33.33% 90%, 0 100%)",
              WebkitClipPath:
                "polygon(0 0, 100% 0, 100% 90%, 66.66% 100%, 33.33% 90%, 0 100%)",
            }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  decoding="async"
                  className="object-cover object-center"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>

          <div className="absolute inset-0 z-10 pointer-events-none">
            <div
              className="absolute inset-0"
              style={{ backgroundColor: "rgb(82, 0, 245)", opacity: "0.75" }}
            />
          </div>

          <div className="relative z-20 container mx-auto px-5 md:px-6 pt-20 lg:pt-48 pb-20 lg:pb-48 flex  h-full">
            <div className="flex flex-col gap-4 w-full max-w-2xl items-start">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-white">
                Reliable Protection, Exceptional Quality
              </h1>
              <p className="text-base text-white">
                Ensure your safety with our top-grade safety equipment and
                premier fiberglass solutions crafted for durability and
                excellence.
              </p>
              <div className="flex flex-col md:flex-row gap-4 mt-4">
                <button className="bg-white text-black px-6 py-2 rounded-lg font-semibold hover:bg-black hover:text-white transition">
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
                    style={{ backgroundColor: "white" }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-10 my-8">
        <div className="container mx-auto px-6 text-[#121212] flex items-center flex-col lg:flex-row gap-30 ">
          <div className="flex-1 ">
            <h2 className="text-4xl  lg:w-[70%] mb-1 leading-tight font-bold">
              Your Trusted Partner in Safety Solutions
            </h2>
            <p className="text-lg font-[lato]">
              At Pacific Safety Solution, based in the vibrant city of Lagos,
              Nigeria, we specialize in providing top-tier safety equipment and
              fiberglass services. Our dedication to quality and innovation
              ensures that each product meets stringent safety standards and
              client needs. We are committed to safeguarding your work
              environment with reliable solutions that offer peace of mind.
              Trust us to deliver excellence, as we continue our mission to
              enhance workplace safety across diverse industries.
            </p>
          </div>
          <div className="flex-1">
            <div className="relative  w-full rounded-lg overflow-hidden">
              <Image
                src="https://cdn.durable.co/getty/9BfjXA2YUluml0DCPeiy3aKM1CxWY8gGRC7OfxNunJsHiaAVEKeu3Wz1nSYjMAuv.jpeg"
                alt="Technician adjusting safety glasses"
                width={500}
                height={500}
                className="object-cover w-full h-[320px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        className="relative pb-14 z-10"
        style={{
          clipPath: "polygon(0 0%, 100% 10%, 100% 100%, 0% 100%)",
          WebkitClipPath: "polygon(0 0%, 100% 10%, 100% 100%, 0% 100%)",
        }}
      >
        <div className="container mx-auto px-6 pt-16 lg:pt-32 pb-0">
          <div className="absolute inset-0 z-10 pointer-events-none">
            <div className="absolute inset-0 bg-gray-200"></div>
          </div>
          <div className="relative z-20">
            <div className="flex flex-col gap-4 mb-6 items-start transition-all duration-500 ease-in-out">
              <p className="text-sm font-semibold font-[lato] text-[#5200F5]">
                Superior Protection
              </p>
              <h2 className="font-bold text-5xl text-gray-900">
                Advanced Safety Solutions Provider
              </h2>
              <p className="text-base font-[lato] text-[#121212]">
                Discover cutting-edge fiberglass services and comprehensive
                safety equipment solutions tailored to meet Lagos&apos; unique
                industrial needs.
              </p>
            </div>
            <div className="flex flex-wrap justify-start gap-10">
              {[
                {
                  img: "https://cdn.durable.co/getty/69UEvt8kSydw5ndhzGws5SW3bWZX9ycVgUTz8fGP51Cv2aIftZjudTUyaEwSBBZw.jpeg",
                  alt: "Safety",
                  title: "Comprehensive Safety Gear",
                  desc: "Offering a wide range of personal protective equipment tailored for various industries.",
                },
                {
                  img: "https://cdn.durable.co/getty/12yaDDuDKunq8LglX5cl3XoxeF1tpy8uvyAVOqaVAeP68fyvDzLpumFt698Qagta.jpeg",
                  alt: "Worker at fibreglass factory rolling solution through fibreglass sheets",
                  title: "Custom Fiberglass Fabrication",
                  desc: "Expertly crafted fiberglass solutions designed to meet specific client needs.",
                },
                {
                  img: "https://cdn.durable.co/getty/2365A921vhl4BTnax8B2IXXa1T3hQkO8VPAXaTSFRPGiTeONPGoXitTwYykajzza.jpeg",
                  alt: "Work safety protection equipment. Industrial protective gear on wooden table, red color background.",
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
                  alt: "Fire extinguisher and a protective helmet.",
                  title: "Durable Equipment Supply",
                  desc: "Providing high-quality, long-lasting safety equipment to ensure maximum protection.",
                },
                {
                  img: "https://cdn.durable.co/getty/9RFSqoYan5ukTG0ZpmS0dxpDkq3cwdRGwm6UZsEUnbzONgXbOu6wCw8vw160YGnt.jpeg",
                  alt: "Worker Adjusting Machine with Wrench",
                  title: "Maintenance and Repair Services",
                  desc: "Regular maintenance and repair of safety gear to ensure optimal performance.",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-sm md:rounded-md lg:rounded-lg transition-all duration-500 ease-in-out"
                  style={{ flex: "0 0 calc(33.3333% - 26.6667px)" }}
                >
                  <div
                    className={`transition-all duration-500 ease-in-out delay-${
                      (index + 1) * 100
                    } opacity-100 translate-y-0 h-full flex flex-col`}
                  >
                    <div className="relative aspect-square">
                      <Image
                        src={service.img}
                        alt={service.alt}
                        title={service.title}
                        fill
                        className="object-cover object-center rounded-sm md:rounded-md lg:rounded-lg"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <div className="flex flex-col items-start py-4 text-gray-900">
                      <h3 className="text-2xl font-semibold mb-1">
                        {service.title}
                      </h3>
                      <p className="text-base font-[lato]">{service.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div></div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white my-14 text-black text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Protect your workforce with Pacific Safety Solutions, Lagos&apos;
            premier choice for comprehensive safety equipment installation and
            maintenance. With unparalleled expertise, we ensure your safety
            systems are always up to standard. Choose us for reliable service
            and peace of mind in safeguarding your business environment from
            potential hazards.
          </h2>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative">
        <div
          className="relative flex items-center fix-safari-flickering"
          style={{
            minHeight: "0px",
            zIndex: 35,
            scrollMarginTop: "5rem",
            marginTop: "-89px",
            paddingTop: "89px",
            paddingBottom: "88px",
            clipPath: "polygon(0 10%, 100% 0%, 100% 100%, 0 100%)",
            WebkitClipPath: "polygon(0 10%, 100% 0%, 100% 100%, 0 100%)",
          }}
        >
          {/* Background */}
          <div className="absolute inset-0 z-10 pointer-events-none">
            <div className="absolute inset-0 bg-[#5200f5] z-10" />
          </div>

          {/* Content */}
          <div className="relative z-10 container mx-auto pt-16 lg:pt-32 pb-16 lg:pb-32">
            <div className="flex flex-col gap-4 max-w-5xl mb-12 text-left text-white">
              <p className="text-sm font-[lato] font-semibold">
                Trusted Feedback
              </p>
              <h2 className="text-3xl lg:text-5xl  font-bold">
                Proven Safety Solutions: Client Success Stories
              </h2>
              <pre className="text-base lg:w-[45%] font-[lato]">
                &quot;Excellent service and top-quality safety equipment. Their
                expertise in fiberglass solutions is unmatched in Lagos. Highly
                recommended!&quot; - Ada N.
              </pre>
            </div>

            {/* Testimonials Grid */}
            <div className="flex flex-row gap-4">
              {[
                {
                  name: "Adewale Johnson",
                  quote:
                    "Pacific Safety Solution exceeded my expectations with top-notch equipment and professional fiberglass services. Their team is incredibly knowledgeable and attentive to client needs. I highly recommend them to anyone seeking reliable safety solutions in Lagos.",
                  image:
                    "https://cdn.durable.co/getty/2cQFrN4FQNcQxyKeYxdeBCTb3VivivTPkJwf5lsN4aTE2xEPjucNzAkW6m7FjYwJ.jpeg",
                },
                {
                  name: "Ngozi Okafor",
                  quote:
                    "Pacific Safety Solution impressed me with their exceptional service and high-quality safety equipment. The team’s expertise in fiberglass services was evident, and they were always ready to assist. A trustworthy company for all safety needs in Lagos!",
                  image:
                    "https://cdn.durable.co/getty/4BTtFyncXAItYHV0Mv4aA0hYKRMYJ8QAh4lO8u11NCNTxfAH0H0xBe5It4HEpSOk.jpeg",
                },
                {
                  name: "Chidi Nwosu",
                  quote:
                    "I am thoroughly impressed by Pacific Safety Solution's dedication to providing top-tier safety equipment and fiberglass services. Their expertise and customer-focused approach set them apart in Lagos. It's always a pleasure working with such a reliable and professional team.",
                  image:
                    "https://cdn.durable.co/getty/19JcE3FyW9oyMVK85U5pjH9JVBKyZmbBncQSZjjf68D535RSKHGIYjBffzDlG7nS.jpeg",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-6 p-8 md:p-12 bg-[#7533f7] bg-opacity-20 rounded-lg font-[lato] text-[#fafafa] max-w-2xl"
                >
                  <div className="relative  w-24 h-24 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={`- ${testimonial.name}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-medium">{testimonial.quote}</h3>
                  <p className="text-base">- {testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
          <form className="grid gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded bg-white border border-gray-300"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded bg-white border border-gray-300"
            />
            <textarea
              rows={5}
              placeholder="Your Message"
              className="p-3 rounded bg-white border border-gray-300"
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
