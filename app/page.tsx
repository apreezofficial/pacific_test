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
        className="relative w-full"
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

          <div className="relative z-20 container mx-auto px-5 md:px-6 pt-20 lg:pt-48 pb-20 lg:pb-48 flex items-center justify-center h-full">
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
      <section className="py-16">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 max-w-3xl">
            <h2 className="text-3xl font-bold mb-4">
              Your Trusted Partner in Safety Solutions
            </h2>
            <p className="text-base">
              At Pacific Safety Solution, based in the vibrant city of Lagos,
              Nigeria, we specialize in providing top-tier safety equipment and
              fiberglass services. Our dedication to quality and innovation
              ensures that each product meets stringent safety standards and
              client needs.
            </p>
          </div>
          <div className="flex-1">
            <div className="relative aspect-[3/2] w-full rounded-lg overflow-hidden">
              <Image
                src="https://cdn.durable.co/getty/9BfjXA2YUluml0DCPeiy3aKM1CxWY8gGRC7OfxNunJsHiaAVEKeu3Wz1nSYjMAuv.jpeg"
                alt="Technician adjusting safety glasses"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                img: "https://cdn.durable.co/getty/69UEvt8kSydw5ndhzGws5SW3bWZX9ycVgUTz8fGP51Cv2aIftZjudTUyaEwSBBZw.jpeg",
                alt: "Safety",
                title: "Comprehensive Safety Gear",
                desc: "A wide range of PPE tailored for various industries.",
              },
              {
                img: "https://cdn.durable.co/getty/12yaDDuDKunq8LglX5cl3XoxeF1tpy8uvyAVOqaVAeP68fyvDzLpumFt698Qagta.jpeg",
                alt: "Fiberglass worker",
                title: "Custom Fiberglass Fabrication",
                desc: "Expertly crafted solutions for client-specific needs.",
              },
              {
                img: "https://cdn.durable.co/getty/2365A921vhl4BTnax8B2IXXa1T3hQkO8VPAXaTSFRPGiTeONPGoXitTwYykajzza.jpeg",
                alt: "Work safety",
                title: "On-site Safety Assessments",
                desc: "Risk identification and workplace hazard mitigation.",
              },
              {
                img: "https://cdn.durable.co/getty/304091XtHsFriQD8DMXa1FDFRnGB7nYdRxc5Mm743WF47i2XaLH2K4bfuCx1Gkox.jpeg",
                alt: "Fire training dummy",
                title: "Emergency Response Training",
                desc: "Prepare teams to respond effectively to emergencies.",
              },
              {
                img: "https://cdn.durable.co/getty/12H5mT1ZeSnKWoqX2Y4i9cpbGHjUvAfu9FZKKPiif9kx5CDXUO9SPK2toSek1DMM.jpeg",
                alt: "Extinguisher",
                title: "Durable Equipment Supply",
                desc: "High-quality, long-lasting protective equipment.",
              },
              {
                img: "https://cdn.durable.co/getty/9RFSqoYan5ukTG0ZpmS0dxpDkq3cwdRGwm6UZsEUnbzONgXbOu6wCw8vw160YGnt.jpeg",
                alt: "Machine worker",
                title: "Maintenance & Repair",
                desc: "Regular upkeep to ensure safety gear effectiveness.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md"
              >
                <div className="relative aspect-square w-full">
                  <Image
                    src={service.img}
                    alt={service.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                  <p className="text-sm">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-black text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Protect your workforce with Pacific Safety Solutions
          </h2>
          <p className="text-base max-w-2xl mx-auto">
            Lagos’ premier provider of safety equipment, fiberglass
            installation, and emergency solutions.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Client Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                img: "https://cdn.durable.co/getty/2cQFrN4FQNcQxyKeYxdeBCTb3VivivTPkJwf5lsN4aTE2xEPjucNzAkW6m7FjYwJ.jpeg",
                name: "Adewale Johnson",
                quote:
                  "Top-notch equipment and fiberglass service. Highly recommended!",
              },
              {
                img: "https://cdn.durable.co/getty/4BTtFyncXAItYHV0Mv4aA0hYKRMYJ8QAh4lO8u11NCNTxfAH0H0xBe5It4HEpSOk.jpeg",
                name: "Ngozi Okafor",
                quote:
                  "Exceptional service and top-quality gear. Reliable and trustworthy.",
              },
              {
                img: "https://cdn.durable.co/getty/19JcE3FyW9oyMVK85U5pjH9JVBKyZmbBncQSZjjf68D535RSKHGIYjBffzDlG7nS.jpeg",
                name: "Chidi Nwosu",
                quote:
                  "The best safety company in Lagos. Excellent support and results.",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-gray-100 p-6 rounded-lg text-left shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={t.img}
                      alt={t.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <strong>{t.name}</strong>
                </div>
                <p className="text-sm text-gray-700">{t.quote}</p>
              </div>
            ))}
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
