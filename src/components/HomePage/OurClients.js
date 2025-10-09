"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from '@/styles/HomePage/OurStats.module.css';

// Organized clients by tier for better visual hierarchy
const premiumClients = [
  "Accenture.avif", "wipro.avif", "infosys.avif", "google.avif",
  "microsoft.avif", "cognizant.avif", "tcs.avif", "amdocs.avif",
  "ibm.avif", "paytm.avif", "capgemini.avif", "swiggy.avif",
  "dream11.avif", "hdfc.avif", "God.avif", "BAJAJ.avif",
  "bharatpe.avif", "pizza-hut.avif",
];

const enterpriseClients = [
  "exl.avif", "volkswagon.avif", "jindal.avif", "john-deere.avif",
  "bostonbyte.avif", "sharechat.avif", "leapfinance.avif", "moneytap.avif",
  "whitehat.avif", "cummins.avif",
];

const growingClients = [
  "airmeet.avif", "ask.avif", "bharatgri.avif", "capita.avif",
  "crisi.avif", "eatfit.avif", "genius.avif", "homelane.avif",
  "iss.avif", "kelly.avif",
];

const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const MarqueeRow = ({
  logos,
  direction = "left",
  speed = "normal",
  shuffle = false,
}) => {
  const [logosToUse, setLogosToUse] = useState(logos);

  useEffect(() => {
    if (shuffle) {
      setLogosToUse(shuffleArray(logos));
    } else {
      setLogosToUse(logos);
    }
  }, [logos, shuffle]);

  const getAnimationClass = () => {
    const baseAnimation =
      direction === "right" ? "animate-marquee-reverse" : "animate-marquee";
    const speedMultiplier = {
      slow: "40s",
      normal: "30s",
      fast: "20s",
    }[speed];

    return `${baseAnimation} [animation-duration:${speedMultiplier}]`;
  };

  return (
    <div className="relative overflow-hidden">
      <div
        className={`flex gap-5 sm:gap-7 md:gap-9 ${getAnimationClass()}`}
        style={{ width: "max-content" }}
      >
        {/* First set */}
        {logosToUse.map((logo, index) => (
          <div 
            key={`first-${index}`} 
            className="flex-shrink-0 group relative"
            style={{
              width: '155px',
              height: '130px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fb 100%)',
              borderRadius: '16px',
              padding: '16px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.8)',
              transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              backdropFilter: 'blur(10px)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0px) scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.06)';
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30 rounded-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Image
              src={`/Ourclients/${logo}`}
              alt={`Client logo`}
              width={170}
              height={145}
              className="object-contain max-w-full max-h-full transition-all duration-300 relative z-10 filter group-hover:brightness-110"
              loading="lazy"
              quality={85}
            />
          </div>
        ))}

        {/* Second set for seamless loop */}
        {logosToUse.map((logo, index) => (
          <div 
            key={`second-${index}`} 
            className="flex-shrink-0 group relative"
            style={{
              width: '155px',
              height: '130px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fb 100%)',
              borderRadius: '16px',
              padding: '16px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.8)',
              transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              backdropFilter: 'blur(10px)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0px) scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.06)';
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30 rounded-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Image
              src={`/Ourclients/${logo}`}
              alt={`Client logo`}
              width={170}
              height={145}
              className="object-contain max-w-full max-h-full transition-all duration-300 relative z-10 filter group-hover:brightness-110"
              loading="lazy"
              quality={85}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const OurClients = () => {
  return (
    <section 
      className="py-12 sm:py-20 lg:py-24 overflow-hidden relative"
      style={{
        background: 'linear-gradient(135deg, #fafbfc 0%, #f1f3f7 25%, #e8ecf4 50%, #f5f7fa 75%, #ffffff 100%)',
        minHeight: '500px',
      }}
    >
      {/* Enhanced decorative elements */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 11c4.5 0 8-3.5 8-8s-3.5-8-8-8-8 3.5-8 8 3.5 8 8 8zm50 30c4.5 0 8-3.5 8-8s-3.5-8-8-8-8 3.5-8 8 3.5 8 8 8zm-45-8c2 0 3.5-1.5 3.5-3.5s-1.5-3.5-3.5-3.5-3.5 1.5-3.5 3.5 1.5 3.5 3.5 3.5zm65 35c2 0 3.5-1.5 3.5-3.5s-1.5-3.5-3.5-3.5-3.5 1.5-3.5 3.5 1.5 3.5 3.5 3.5zM40 95c2 0 3.5-1.5 3.5-3.5s-1.5-3.5-3.5-3.5-3.5 1.5-3.5 3.5 1.5 3.5 3.5 3.5zm60-80c2 0 3.5-1.5 3.5-3.5s-1.5-3.5-3.5-3.5-3.5 1.5-3.5 3.5 1.5 3.5 3.5 3.5z' fill='%235f72bd' fill-opacity='0.15'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Floating gradient orbs */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-pink-200/20 to-orange-200/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-green-200/20 to-blue-200/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>

      <div className="container mx-auto relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className={`${styles.t2pTitle} relative`}>
            <div className="inline-block relative mb-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold relative pb-3" style={{
                background: 'linear-gradient(90deg, rgba(1, 1, 98, 1) 35%, rgb(3, 111, 133) 49%, rgba(2, 2, 85, 1) 62%)',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                marginBottom: '0.5rem',
                position: 'relative',
                zIndex: 1
              }}>
                Our Clients
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1" style={{
                  background: 'linear-gradient(90deg, #182848, #4776e6)',
                  borderRadius: '2px'
                }}></div>
              </h2>
            </div>
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
              Trusted by industry leaders worldwide to deliver exceptional results
            </p>
          </div>
        </div>

        {/* Client Marquees with improved fade effects */}
        <div className="space-y-8 sm:space-y-10">
          {/* First Row - Premium Clients */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none"></div>
            <MarqueeRow
              logos={premiumClients}
              direction="left"
              speed="slow"
              shuffle={true}
            />
          </div>

          {/* Second Row - Enterprise Clients */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none"></div>
            <MarqueeRow
              logos={enterpriseClients}
              direction="right"
              speed="normal"
              shuffle={false}
            />
          </div>

          {/* Third Row - Growing Clients */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none"></div>
            <MarqueeRow
              logos={growingClients}
              direction="left"
              speed="fast"
              shuffle={true}
            />
          </div>
        </div>

        {/* Trust indicators */}
        
      </div>
    </section>
  );
};

export default OurClients;
