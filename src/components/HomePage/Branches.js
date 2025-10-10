"use client";

import React, { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import {
  MapPin,
  Navigation,
  Phone,
  Clock,
  ChevronLeft,
  ChevronRight,
  Building,
  Map,
} from "lucide-react";

const BranchesMapView = dynamic(() => import("./BranchesMapView"), {
  ssr: false,
  loading: () => (
    <div className="flex justify-center items-center h-[320px] md:h-[390px] w-full">
      <div className="bg-white bg-opacity-10 p-6 rounded-xl shadow-lg backdrop-blur-sm">
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-blue-400 h-10 w-10"></div>
          <div className="flex-1 space-y-3 py-1">
            <div className="h-3 bg-blue-400 rounded w-3/4"></div>
            <div className="space-y-2">
              <div className="h-3 bg-blue-400 rounded"></div>
              <div className="h-3 bg-blue-400 rounded w-5/6"></div>
            </div>
          </div>
        </div>
        <p className="text-center mt-3 text-white font-medium">Loading Map..</p>
      </div>
    </div>
  ),
});

const branches = [
  {
    city: "Pune",
    headline: "Headquarters Office",
    phone: "+91 90040 02941",
    hours: "Mon-Sun: All hours",
    address:
      "1st Floor,101, Police, Wireless Colony, Vishal Nagar, Pimple Nilakh, Pune, Pimpri-Chinchwad, Maharashtra 411027",
    position: { lat: 18.588048051275003, lng: 73.78119014757031 },
    mapLink: "https://maps.app.goo.gl/DNwzKa2Yt1WB6zUB7",
    color: "#3b82f6",
    image: "/branches/Pune-Cover-Photo.png",
  },
  {
    city: "Mumbai",
    headline: "Office",
    phone: "+91 90040 01938",
    hours: "Mon-Sun: All hours",
    address:
      "4th Floor, Ram Niwas, B-404, Gokhale Rd, near McDonald's, Dada Patil Wadi, Naupada, Thane West, Thane, Maharashtra 400602",
    position: { lat: 19.259055941077712, lng: 72.96564544031934 },
    mapLink: "https://maps.app.goo.gl/i7W3baVVS1mDLmTJ9",
    color: "#10b981",
    image: "/branches/Mumbai-Cover-Photo.png",
  },
  {
    city: "Raipur",
    headline: "Office",
    phone: "+91 89560 01555",
    hours: "Mon-Sun: All hours",
    address: "New Panchsheel Nagar, Civil Lines, Raipur, Chhattisgarh 492001",
    position: { lat: 21.23944689267376, lng: 81.65363342070017 },
    mapLink: "https://maps.app.goo.gl/1KA1uhcyoF5Tu4Mg6",
    color: "#f97316",
    image: "/branches/Raipur-Cover-Photo.png",
  },
];

const BranchesComponent = () => {
  const [selectedBranch, setSelectedBranch] = useState(0);
  const [animationDirection, setAnimationDirection] = useState(null);
  const [activeView, setActiveView] = useState("cards");

  const changeBranch = (index, direction) => {
    setAnimationDirection(direction);
    setTimeout(() => {
      setSelectedBranch(index);
      setAnimationDirection(null);
    }, 300);
  };

  const InfoRow = ({ icon: Icon, label, children, color }) => (
    <div className="flex items-start">
      <div
        className="w-6 h-6 rounded-full flex items-center justify-center mr-2"
        style={{ backgroundColor: `${color}15` }}
      >
        <Icon size={12} color={color} />
      </div>
      <div>
        <p className="text-xs font-medium text-gray-500 mb-0.5">{label}</p>
        {children}
      </div>
    </div>
  );

  const BranchIndicator = ({ index, mobile = false }) => (
    <button
      onClick={() =>
        changeBranch(index, index > selectedBranch ? "right" : "left")
      }
      className={`w-2 h-2 rounded-full transition-all duration-300 ${
        selectedBranch === index
          ? mobile
            ? "scale-125"
            : "scale-150"
          : "bg-gray-300"
      }`}
      style={{
        backgroundColor:
          selectedBranch === index ? branches[index].color : undefined,
      }}
      aria-label={`Select ${branches[index].city} branch`}
    />
  );

  return (
    <div className="py-4 mb-8 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="branchesTitle mb-4">Find Us Across India</h2>
          <div className="flex justify-center mt-4 mb-6">
            <div className="bg-white rounded-full p-1 shadow-md inline-flex">
              <button
                onClick={() => setActiveView("map")}
                className={`px-4 py-1 rounded-full flex items-center gap-2 text-xs font-medium transition ${
                  activeView === "map"
                    ? "bg-blue-500 text-white shadow-sm"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                <Map size={14} />
                Map View
              </button>
              <button
                onClick={() => setActiveView("cards")}
                className={`px-4 py-1 rounded-full flex items-center gap-2 text-xs font-medium transition ${
                  activeView === "cards"
                    ? "bg-blue-500 text-white shadow-sm"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                <Building size={14} />
                Card View
              </button>
            </div>
          </div>
        </div>

        {activeView === "map" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
            <div className="lg:col-span-8 h-[320px] md:h-[390px] relative overflow-hidden rounded-xl shadow-lg border border-gray-200">
              <BranchesMapView
                branches={branches}
                selectedBranch={selectedBranch}
                onBranchChange={changeBranch}
              />
            </div>

            <div className="lg:col-span-4">
              <div
                className={`bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 h-full transition-all duration-300 ${
                  animationDirection === "left"
                    ? "-translate-x-full opacity-0"
                    : animationDirection === "right"
                      ? "translate-x-full opacity-0"
                      : "translate-x-0"
                }`}
              >
                <div className="h-32 relative overflow-hidden">
                  <Image
                    src={branches[selectedBranch].image}
                    alt={`${branches[selectedBranch].city} Office`}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-700 hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading="eager"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)",
                    }}
                  />
                  <div className="absolute bottom-3 left-3 text-white">
                    <h3 className="text-xl font-bold">
                      {branches[selectedBranch].city}
                    </h3>
                    <p className="text-xs opacity-90">
                      {branches[selectedBranch].headline}
                    </p>
                  </div>
                  <div
                    className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-white text-xs font-semibold"
                    style={{ backgroundColor: branches[selectedBranch].color }}
                  >
                    <MapPin size={10} className="inline mr-1" /> Location{" "}
                    {selectedBranch + 1}/{branches.length}
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex flex-col gap-3 mb-4">
                    <InfoRow
                      icon={MapPin}
                      label="ADDRESS"
                      color={branches[selectedBranch].color}
                    >
                      <p className="text-xs text-gray-700">
                        {branches[selectedBranch].address}
                      </p>
                    </InfoRow>
                    <InfoRow
                      icon={Phone}
                      label="PHONE"
                      color={branches[selectedBranch].color}
                    >
                      <a
                        href={`tel:${branches[selectedBranch].phone}`}
                        className="text-xs text-gray-700 no-underline hover:underline"
                      >
                        {branches[selectedBranch].phone}
                      </a>
                    </InfoRow>
                    <InfoRow
                      icon={Clock}
                      label="WORKING HOURS"
                      color={branches[selectedBranch].color}
                    >
                      <p className="text-xs text-gray-700">
                        {branches[selectedBranch].hours}
                      </p>
                    </InfoRow>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={branches[selectedBranch].mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="no-underline flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-3 rounded-lg text-xs transition"
                    >
                      <Navigation size={14} className="mr-1" /> Get Directions
                    </a>
                    <a
                      href={`tel:${branches[selectedBranch].phone.replace(/\s+/g, "")}`}
                      className="no-underline flex items-center justify-center text-white font-medium py-2 px-3 rounded-lg text-xs transition"
                      style={{
                        backgroundColor: branches[selectedBranch].color,
                      }}
                    >
                      <Phone size={14} className="mr-1" /> Call Now
                    </a>
                  </div>
                </div>

                <div className="flex justify-between p-3 border-t border-gray-100">
                  <button
                    onClick={() =>
                      changeBranch(
                        (selectedBranch - 1 + branches.length) %
                          branches.length,
                        "left"
                      )
                    }
                    className="flex items-center text-gray-600 hover:text-gray-900 text-xs font-medium transition"
                  >
                    <ChevronLeft size={16} className="mr-1" /> Previous
                  </button>
                  <div className="flex space-x-1">
                    {branches.map((_, index) => (
                      <BranchIndicator key={index} index={index} />
                    ))}
                  </div>
                  <button
                    onClick={() =>
                      changeBranch(
                        (selectedBranch + 1) % branches.length,
                        "right"
                      )
                    }
                    className="flex items-center text-gray-600 hover:text-gray-900 text-xs font-medium transition"
                  >
                    Next <ChevronRight size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeView === "cards" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {branches.map((branch, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="h-36 relative overflow-hidden">
                  <Image
                    src={branch.image}
                    alt={`${branch.city} Office Preview`}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-700 hover:scale-110"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent p-3 group-hover:from-black/90 transition-all duration-300">
                    <div
                      className="inline-block px-2 py-0.5 rounded-full text-white text-xs font-semibold self-start mb-1"
                      style={{ backgroundColor: branch.color }}
                    >
                      {branch.headline}
                    </div>
                    <h3 className="text-white text-lg font-bold">
                      {branch.city}
                    </h3>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                    <button
                      className="bg-white text-gray-800 hover:bg-gray-100 font-medium px-3 py-1 rounded-lg shadow-md flex items-center text-xs"
                      onClick={() => {
                        setSelectedBranch(index);
                        setActiveView("map");
                      }}
                    >
                      <Map size={14} className="mr-1" />
                      View on Map
                    </button>
                  </div>
                </div>

                <div className="p-4">
                  <div className="space-y-2 mb-4">
                    <div className="flex items-start">
                      <MapPin size={14} className="mr-2 mt-0.5 text-gray-500" />
                      <p className="text-gray-700 text-xs">{branch.address}</p>
                    </div>
                    <div className="flex items-center">
                      <Phone size={14} className="mr-2 text-gray-500" />
                      <a
                        href={`tel:${branch.phone}`}
                        className="text-gray-700 my-2 text-xs no-underline hover:underline"
                      >
                        {branch.phone}
                      </a>
                    </div>
                    <div className="flex">
                      <Clock size={14} className="mr-2 text-gray-500" />
                      <p className="text-gray-700 text-xs">{branch.hours}</p>
                    </div>
                  </div>
                  <a
                    href={branch.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full text-white font-medium py-2 px-3 rounded-lg text-xs transition-all duration-300 hover:scale-105 no-underline"
                    style={{ backgroundColor: branch.color }}
                  >
                    <Navigation size={14} className="mr-1" /> Get Directions →
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="lg:hidden flex justify-center mt-6">
          <div className="flex gap-2">
            {branches.map((_, index) => (
              <BranchIndicator key={index} index={index} mobile />
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .branchesTitle {
          font-size: 2.5rem;
          font-weight: 700;
          letter-spacing: 4px;
          text-shadow:
            0 0 0px #fff,
            0 0 10px #fff,
            0 0 10px #0073e6,
            0 0 20px #182e4a,
            0 0 20px #182e4a,
            0 0 30px #182e4a,
            0 0 30px #182e4a;
          background: linear-gradient(
            90deg,
            #fff 35%,
            rgba(3, 163, 196, 1) 49%,
            #fff 62%
          );
          -webkit-background-clip: text;
          color: transparent;
          text-align: center;
        }

        @media (max-width: 768px) {
          .branchesTitle {
            font-size: 2rem;
            letter-spacing: 2px;
          }
        }
      `}</style>
    </div>
  );
};

export default BranchesComponent;
