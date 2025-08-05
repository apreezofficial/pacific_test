/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

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

    mapboxgl.accessToken =
      "pk.eyJ1IjoiZHVyYWJsZSIsImEiOiJjbGJjOHV1bHUwcjM5M3huOHdoZXdkdDRsIn0.geBkTZ4KBXWb669GQBr8rw";

    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [3.3792, 6.5244],
      zoom: 13, // Adjusted zoom level to be more zoomed in
    });

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="min-h-screen  overflow-x-hidden bg-white text-black">
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
                "polygon(0 0, 100% 0, 100% 90%, 40.66% 100%, 33.33% 90%, 0 100%)",
              WebkitClipPath:
                "polygon(0 0, 80% 0, 100% 90%, 40.66% 100%, 33.33% 90%, 0 100%)",
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

          <div className="relative z-20 container mx-auto px-5 md:px-6  lg:px-0 pt-20 lg:pt-48 pb-20 lg:pb-48 flex  h-full">
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
                <button className="bg-white text-black  px-6 lg:px-0 py-2 rounded-lg font-semibold hover:bg-black hover:text-white transition">
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
        <div className="container mx-auto  px-6 lg:px-0 text-[#121212] flex items-center flex-col lg:flex-row gap-4 lg:gap-30 ">
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
        id="services"
        className="relative pb-10 z-10"
        style={{
          clipPath: "polygon(0 0%, 100% 4%, 100% 100%, 0% 100%)",
          WebkitClipPath: "polygon(0 0%, 100% 4%, 100% 100%, 0% 100%)",
        }}
      >
        <div className="container mx-auto px-6 lg:px-0 pt-30 lg:pt-32 pb-0">
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
            <div className="grid grid-cols-1 lg:grid-cols-3 justify-start gap-10">
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
        <div className="container mx-auto px-6  lg:px-0">
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
      <section id="testimonials" className="relative">
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
          <div className="absolute  inset-0 z-10 pointer-events-none">
            <div className="absolute inset-0 bg-[#5200f5] z-10" />
          </div>

          {/* Content */}
          <div className="relative px-4 lg:px-0 z-10 container mx-auto  pt-30 lg:pt-32 pb-16 lg:pb-32">
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
            <div className="flex flex-col lg:flex-row gap-4">
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

      <section
        className="relative px-3 lg:px-0 pt-20 mb-14 sm:mb-10 bg-gray-200"
        id="values"
        style={{
          clipPath: "polygon(0 0%, 100% 10%, 100% 100%, 0% 100%)",
          WebkitClipPath: "polygon(0 0%, 100% 10%, 100% 100%, 0% 100%)",
        }}
      >
        <div id="688e568afa86f3be48523168">
          <div className="absolute inset-0 z-10 pointer-events-none">
            <div className="absolute inset-0 z-10 bg-[#f5f4f6]" />
          </div>

          <div className="relative z-10 container mx-auto pt-16 lg:pt-32 pb-16 lg:pb-32">
            <div>
              <div className="transition-all ease-in-out duration-500 opacity-100 translate-y-0 flex flex-col gap-4 mb-6 items-start">
                <p className="w-max max-w-full body-small !font-semibold text-[#0a001f]">
                  Assured Safety
                </p>
                <h2 className="text-5xl font-bold block w-full ml-0 mr-auto text-gray-900">
                  Delivering Trusted Safety Solutions
                </h2>
                <p className="font-[lato] text-lg lg:w-[80%] block  ml-0 mr-auto text-gray-900">
                  At Pacific Safety Solutions, we prioritize unwavering
                  integrity, innovation, and excellence to ensure ultimate
                  protection and client satisfaction.
                </p>
              </div>

              <div className="grid grid-col-1 lg:grid-cols-3 relative justify-start gap-[40px]">
                {[
                  {
                    title: "Commitment to Safety",
                    content:
                      "At Pacific safety solution, safety is not just a priority, it is our core mission. We are dedicated to providing top-notch safety equipment and services that ensure the well-being of our clients and their teams. Every product and service we offer is designed with the highest safety standards in mind.",
                  },
                  {
                    title: "Quality Assurance",
                    content:
                      "Quality is at the heart of everything we do. Our fiber glass services and safety equipment are crafted with precision and care, ensuring durability and reliability. We adhere to strict quality control measures to guarantee that our clients receive only the best.",
                  },
                  {
                    title: "Innovation",
                    content:
                      "We believe in the power of innovation to improve safety standards. Pacific safety solution is committed to staying at the forefront of technological advancements in the industry, constantly seeking new ways to enhance our products and services.",
                  },
                  {
                    title: "Customer Focus",
                    content:
                      "Our clients are at the center of our operations. We strive to understand their unique needs and provide tailored solutions that exceed expectations. Our dedicated team is always ready to offer support and guidance, ensuring a seamless experience.",
                  },
                  {
                    title: "Integrity",
                    content:
                      "Honesty and transparency are fundamental to our business practices. We build trust with our clients through open communication and by delivering on our promises. At Pacific safety solution, integrity is the foundation of our relationships.",
                  },
                ].map((card, index) => (
                  <div
                    key={index}
                    className="group w-full relative overflow-hidden rounded-sm md:rounded-md lg:rounded-lg"
                    style={{ flex: "0 0 calc(33.3333% - 26.6667px)" }}
                  >
                    <div
                      className={`transition-all ease-in-out duration-500 delay-[${
                        100 + index * 100
                      }ms] opacity-100 translate-y-0 h-full`}
                    >
                      <div className="flex flex-col lg:flex-wrap h-full rounded-sm md:rounded-md lg:rounded-lg">
                        <div className="flex flex-col lg:flex-wrap items-start py-6 text-gray-900">
                          <h2 className="text-2xl font-bold  mb-2 ml-0 mr-auto text-current">
                            {card.title}
                          </h2>
                          <div className="text-lg font-[lato] ml-0 mr-auto text-current">
                            {card.content}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SVG ClipPath */}
          <svg
            className="absolute bottom-0 left-0"
            width="1449"
            height="1206"
            viewBox="0 0 1449 1206"
          >
            <clipPath id="688e568afa86f3be48523168-slantLeft">
              <rect width="1449" height="1118" fill="transparent" />
              <path
                d="M1449 0L0 88V0H1449"
                transform="translate(0, 1118)"
                fill="transparent"
              />
            </clipPath>
          </svg>
        </div>
      </section>

      <section className="relative ">
        <div
          className="relative flex min-h-screen z-30 -mt-[89px] pt-[89px] pb-[88px]"
          style={{
            clipPath: "polygon(0 0%, 100% 10%, 100% 100%, 0% 100%)",
            WebkitClipPath: "polygon(0 0%, 100% 10%, 100% 100%, 0% 100%)",
          }}
        >
          {/* Map Container */}
          <div className="absolute inset-0 w-full">
            <div className="h-full w-full absolute inset-0 z-5" id="map"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 px-2 lg:px-0 container mx-auto py-12 lg:py-14 xl:py-20 flex items-center">
            <div className="flex flex-row w-full md:flex-row-reverse">
              <div className="relative z-10 w-full md:w-1/2 xl:w-2/5 flex flex-col gap-6 p-6 lg:p-10 shadow overflow-hidden rounded-sm md:rounded-md lg:rounded-lg">
                <div className="absolute inset-0 z-10  pointer-events-none">
                  <div className="absolute inset-0 z-10 bg-gray-100"></div>
                </div>
                <div className="relative z-10 flex flex-col gap-4">
                  <h2 className="text-2xl  font-bold text-gray-900 font-inter-tight">
                    Location
                  </h2>
                  <p className="text-gray-900 font-lato">Lagos, Nigeria</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative">
        <div
          className="flex relative items-center break-words z-30 -mt-[89px] pt-[89px] pb-0"
          style={{
            scrollMarginTop: "5rem",
            minHeight: "0px",
          }}
        >
          <div className="flex  px-6 justify-center w-full items-center break-words">
            {/* Background Overlay */}
            <div className="absolute inset-0 z-10 pointer-events-none">
              <div className="absolute inset-0 z-10 sm:w-fit bg-[#e0dde4]"></div>
            </div>

            {/* Content */}
            <div
              className="relative z-10 container mx-auto pt-16 lg:pt-32 pb-12 lg:pb-20"
              style={{
                clipPath:
                  "polygon(0 0, 100% 0, 100% 90%, 75% 100%, 50% 90%, 25% 100%, 0 90%)",
                WebkitClipPath:
                  "polygon(0 0, 100% 0, 100% 90%, 75% 100%, 50% 90%, 25% 100%, 0 90%)",
              }}
            >
              <div className="transition-all ease-in-out duration-500 opacity-100 translate-y-0 flex flex-col gap-4 max-w-3xl items-start ml-0 mr-auto text-left">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 font-inter-tight">
                  Ensure Your Safety Today
                </h2>
                <p className="text-base md:text-lg text-gray-900 font-lato">
                  Choose Pacific Safety Solution in Lagos for expert maintenance
                  of safety equipment and fiberglass services. Secure your
                  life-saving appliances with our reliable and professional
                  care.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <button
                    type="button"
                    className="px-6 py-3 border-2 shadow-none font-medium bg-[#5200f5] text-white rounded-lg border-[#5200f5]"
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative">
        <div
          id="688e5691fa86f3be4852316b"
          className="flex flex-none relative items-center fix-safari-flickering"
          style={{
            minHeight: "0px",
            zIndex: 31,
            scrollMarginTop: "5rem",
            paddingTop: "0px",
            paddingBottom: "88px",
            clipPath: "url(#688e5691fa86f3be4852316b-curveDown)",
          }}
        >
          {/* Purple Background Overlay */}
          <div className="absolute inset-0 z-10 pointer-events-none">
            <div
              className="absolute inset-0 z-10"
              style={{ backgroundColor: "rgb(82, 0, 245)" }}
            ></div>
          </div>

          {/* Image Content */}
          <div className="relative z-10 px-4 container pt-12 lg:pt-20 pb-12 lg:pb-20 mx-auto">
            <div className="transition-all ease-in-out duration-500 opacity-100 translate-y-0 relative z-10  mx-auto overflow-hidden flex justify-center items-center">
              <div className="relative overflow-hidden w-full aspect-[3/2] rounded-sm md:rounded-md lg:rounded-lg">
                <Image
                  alt="Lining process of coating tank and repair by resin and fiberglass"
                  title="Lining process of coating tank and repair by resin and fiberglass"
                  src="https://cdn.durable.co/getty/12e60MzVRJMlOoKWayW6ZTGeMGnzf5fdqOgjx7oi1piFsQNrvmI4DEQh6N5xCblx.jpeg"
                  fill
                  className="w-full h-[500px] object-cover object-center"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Clip Path SVG Definition (hidden) */}
          <svg
            className="absolute bottom-0 left-0"
            width="1449"
            height="1069"
            viewBox="0 0 1449 1069"
          >
            <clipPath id="688e5691fa86f3be4852316b-curveDown">
              <rect width="1449" height="981" fill="transparent" />
              <path
                d="M0 88 C724.5 0 724.5 0 1449 88 L1449 0 L0 0"
                transform="translate(0, 981)"
                fill="transparent"
              />
            </clipPath>
          </svg>
        </div>

        {/* White stroke curve */}
        <svg
          className="absolute bottom-0 left-0 z-50 overflow-visible"
          fill="transparent"
          width="1449"
          height="88"
          viewBox="0 0 1449 88"
        >
          <path
            d="M0 88 C724.5 0 724.5 0 1449 88"
            stroke="#FFFFFF"
            strokeWidth="2"
          />
        </svg>
      </section>

      {/* Contact Form */}
      <section id="contact" className="relative">
        <div
          id="688e5691fa86f3be4852316c"
          className="flex flex-none flex-shrink-0 relative items-center -mt-[89px] pt-[89px] pb-0 z-[30]"
        >
          {/* Background overlay */}
          <div className="absolute inset-0 z-10 pointer-events-none">
            <div className="absolute inset-0 z-10 bg-[#f5f4f6]"></div>
          </div>

          <div className="relative z-10 px-6 lg:px-0 container mx-auto pt-16 lg:pt-32 pb-16 lg:pb-32">
            <div className="transition-all duration-500 ease-in-out opacity-100 translate-y-0 flex flex-col w-full gap-10 max-w-3xl mx-auto">
              {/* Heading */}
              <div className="w-full text-center text-gray-900">
                <h3 className="text-2xl font-bold">Reach Out to Our Team</h3>
                <p className="mt-2">
                  Contact Pacific Safety Solution in Lagos for expert safety
                  equipment services.
                </p>
              </div>

              {/* Form */}
              <form className="w-full block" noValidate>
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 w-full mb-4">
                  {/* Name */}
                  <div>
                    <label className="mb-1 text-sm text-gray-900 block">
                      Name
                    </label>
                    <input
                      type="text"
                      autoComplete="name"
                      className="w-full px-4 py-2 rounded-full bg-black/10 text-gray-900 placeholder-current outline-none"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="mb-1 text-sm text-gray-900 block">
                      Email
                    </label>
                    <input
                      type="email"
                      autoComplete="email"
                      className="w-full px-4 py-2 rounded-full bg-black/10 text-gray-900 placeholder-current outline-none"
                    />
                  </div>

                  {/* Message */}
                  <div className="col-span-2">
                    <label className="mb-1 text-sm text-gray-900 block">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-2 rounded-full bg-black/10 text-gray-900 placeholder-current outline-none resize-none"
                    ></textarea>
                  </div>
                </div>

                {/* Submit */}
                <div className="flex flex-col justify-between gap-4 items-center text-center md:pt-4">
                  <button
                    type="submit"
                    className="min-w-[9rem] mt-2 md:mt-0 border-2 border-gray-900 text-gray-900 rounded-full px-6 py-2"
                  >
                    Send Message
                  </button>

                  <div className="text-xs max-w-sm text-gray-500">
                    This site is protected by reCAPTCHA and the Google{" "}
                    <a
                      href="https://policies.google.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-gray-900"
                    >
                      Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a
                      href="https://policies.google.com/terms"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-gray-900"
                    >
                      Terms of Service
                    </a>{" "}
                    apply.
                  </div>
                </div>

                {/* Invisible reCAPTCHA (can be moved to next.js middleware/backend) */}
                <div className="hidden">
                  <div>
                    <div className="grecaptcha-badge">
                      {/* Add reCAPTCHA script separately if needed */}
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
