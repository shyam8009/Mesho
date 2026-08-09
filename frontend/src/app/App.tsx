import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GuardianExperiencePage } from '../pages/GuardianExperience/GuardianExperiencePage';
import { SahanaFpvProductPage } from '../pages/SahanaFpv/SahanaFpvProductPage';
import { FpvBuddyPage } from '../pages/FpvBuddy/FpvBuddyPage';
import { VarunaPage } from '../pages/Varuna/VarunaPage';
import { ProxyPage } from '../pages/Proxy/ProxyPage';
import { InfinitySpearPage } from '../pages/InfinitySpear/InfinitySpearPage';
import { InfinityRhinoPage } from '../pages/InfinityRhino/InfinityRhinoPage';
import { InfinityRhinoBlackPage } from '../pages/InfinityRhinoBlack/InfinityRhinoBlackPage';
import { ButterflyADGPage } from '../pages/ButterflyADG/ButterflyADGPage';
import { RhinoZ23Page } from '../pages/RhinoZ23/RhinoZ23Page';
import { DroneRadarPage } from '../pages/DroneRadar/DroneRadarPage';
import { RFDetectorPage } from '../pages/RFDetector/RFDetectorPage';
import { SurveillanceRadarPage } from '../pages/SurveillanceRadar/SurveillanceRadarPage';
import { OSINTPage } from '../pages/OSINT/OSINTPage';
import { QuantumSensingPage } from '../pages/QuantumSensing/QuantumSensingPage';
import QuantumCommunicationPage from '../pages/QuantumCommunication/QuantumCommunicationPage';
import IntelligenceSurveillancePage from '../pages/IntelligenceSurveillance/IntelligenceSurveillancePage';
import { CAPABILITIES_DATA } from './capabilities_data';
import { FpvCanvasHero } from '../components/FpvCanvasHero';
import { Interactive360Viewer } from './components/ui/Interactive360Viewer';
import infinitySpearVideo from '@/imports/Infinity_Spear.mp4';
import visionRobotVideo from '@/imports/Vision_Drone.mp4';
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.clearScrollMemory("manual");

import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { Routes, Route, Link, useNavigate, useLocation } from "react-router";
import svgPaths from "@/imports/1920WLight/svg-bymm5omek1";
import sahanaLogo from "@/imports/logo-sahana.png";
import makeInIndiaLogo from "@/imports/logo-make-in-india.png";
import heroVideo from "@/imports/Hero banner Video.mp4";

// New product images — all of the same tactical drone, different shots & environments
import heroImg from "@/imports/magnific_professional-outdoor-prod_y6xDQjJPW9.jpeg";
import sensorDomeImg from "@/imports/magnific_extreme-closeup-macro-pro_WMNENw4cXe.png";
import motorImg from "@/imports/magnific_extreme-closeup-macro-pro_8vcjnezIrU.png";
import fieldImg from "@/imports/magnific_professional-outdoor-prod_brmNd7p5Y2.png";
import sensorAngle2Img from "@/imports/magnific_extreme-closeup-macro-pro_LUQGHhOswO.png";
import flightImg from "@/imports/sahana_fpv_interceptor.jpg";
import jungleImg from "@/imports/magnific_professional-outdoor-prod_SObWxSiUb8.png";
import infinitySpearImg from "@/imports/infinity_spear.jpg";
import rfDetectorImg from "@/imports/rf_detector_d360.jpg";
import infinityRhinoImg from "@/imports/infinity_rhino.jpg";
import infinityRadarImg from "@/imports/infinity_radar.jpg";
import arsenalFacilityImg from "@/imports/sahana_facility.png";
import haleDroneImg from "@/imports/hale_drone.jpg";
import commandControlImg1 from "@/imports/command_control_1.jpeg";
import commandControlImg2 from "@/imports/command_control_2.jpeg";
import varunaHullImg from "@/imports/varuna/magnific_a-photorealistic-underwat_3G7XWY1REY.png";
import digitalTwinImg from "@/imports/digital_twin.jpg";
import newsCelImg from "@/imports/news_cel_agreement.png";
import corporateHouse1 from "@/imports/corporate_house_1.jpg";
import corporateHouse2 from "@/imports/corporate_house_2.jpg";
import corporateHouse3 from "@/imports/corporate_house_3.jpg";
import innovation1 from "@/imports/innovation_1.jpg";
import innovation2 from "@/imports/innovation_2.jpg";
import innovation3 from "@/imports/innovation_3.png";
import innovation4 from "@/imports/innovation_4.jpg";
import innovation5 from "@/imports/innovation_5.jpg";

import capsuleIcon from '../imports/capsule-icon.png';
import drone3d1 from "@/imports/drone_3d_1.gif";
import drone3d2 from "@/imports/drone_3d_2.gif";
import rfRadarGeneratedImg from "@/imports/rf_radar_generated.png";
import rfRadarHudImg from "@/imports/rf_radar_hud.png";
import droneRadarHeroImg from "@/imports/drone_radar_hero.png";
import c2DashboardUiImg from "@/imports/c2_dashboard_ui.png";
import surveillanceRadarHeroImg from "@/imports/surveillance_radar_hero.png";
import surveillanceBlueprintImg from "@/imports/surveillance_blueprint.png";
import spearCadBlueprintImg from "@/imports/spear_cad_blueprint.png";




const INTER = "'Inter', sans-serif";

const CARD_GRADIENT =
  "linear-gradient(rgba(1,1,1,0) 0%,rgba(1,1,1,0.004) 1.8%,rgba(1,1,1,0.008) 4.8%,rgba(1,1,1,0.02) 9%,rgba(1,1,1,0.043) 13.9%,rgba(1,1,1,0.075) 19.8%,rgba(1,1,1,0.125) 27%,rgba(1,1,1,0.192) 35%,rgba(1,1,1,0.28) 43.5%,rgba(1,1,1,0.38) 53%,rgba(1,1,1,0.54) 66%,rgba(1,1,1,0.737) 81%,rgb(1,1,1) 100%)";

// ——— SVG helpers ————————————————————————————————————————————————————————————————————————————

function AndurilLogo({ width = 210 }: { width?: number }) {
  return (
    <img src={sahanaLogo} alt="Sahana Defence" style={{ width: `${width}px`, height: 'auto' }} className="h-10 object-contain pointer-events-auto" />
  );
}

function SmallLogo({ width = 150 }: { width?: number }) {
  return (
    <img src={sahanaLogo} alt="Sahana Defence" style={{ width: `${width}px`, height: 'auto' }} className="h-9 object-contain" />
  );
}

function CardArrow() {
  return (
    <svg width="14.39" height="14.39" viewBox="0 0 14.3906 14.3906" fill="none">
      <path d={svgPaths.p1941c480} fill="white" />
    </svg>
  );
}

function MiniArrow({ color = "#010101" }: { color?: string }) {
  return (
    <svg width="9.89" height="9.89" viewBox="0 0 9.89062 9.89062" fill="none">
      <path d={svgPaths.pd0ac800} fill={color} />
    </svg>
  );
}

// ——— Reusable "text + underline + arrow" link ————————————————————————————————————————————————

function UnderlineLink({
  children,
  color = "#010101",
  opacity = 1,
  onClick,
}: {
  children: React.ReactNode;
  color?: string;
  opacity?: number;
  onClick?: () => void;
}) {
  return (
    <div className="flex items-center gap-2 cursor-pointer" style={{ opacity }} onClick={onClick}>
      <div className="relative">
        <span
          className="text-sm capitalize whitespace-nowrap"
          style={{ color, fontFamily: INTER, fontWeight: 400 }}
        >
          {children}
        </span>
        <div className="absolute -bottom-1.5 left-0 right-0 h-px" style={{ background: color }} />
      </div>
      <MiniArrow color={color} />
    </div>
  );
}





const INVESTORS_DATA = [
  {
    id: 'annual-reports',
    title: 'Annual Reports',
    description: 'Access annual reports, financial disclosures and company performance documents.',
    links: [
      { text: 'FY 2025-26', url: '#' },
      { text: 'FY 2024-25', url: '#' },
      { text: 'FY 2023-24', url: '#' },
    ],
    cta: 'View All →'
  },
  {
    id: 'general-meeting-notice',
    title: 'General Meeting Notice',
    description: 'Notices, agendas, and minutes for upcoming and past general meetings.',
    links: [
      { text: 'Upcoming AGM Notice', url: '#' },
      { text: 'EGM Minutes 2024', url: '#' },
      { text: 'Proxy Forms', url: '#' },
    ],
    cta: 'View All Notices →'
  },
  {
    id: 'code-of-conduct',
    title: 'Code of Conduct & Policies',
    description: 'Our commitment to ethical business practices and corporate integrity.',
    links: [
      { text: 'Code of Business Conduct', url: '#' },
      { text: 'Whistleblower Policy', url: '#' },
      { text: 'Anti-Bribery Guidelines', url: '#' },
    ],
    cta: 'View Policies →'
  },
  {
    id: 'annual-return',
    title: 'Annual Return',
    description: 'Statutory annual returns filed with regulatory authorities.',
    links: [
      { text: 'Form MGT-7 (2025)', url: '#' },
      { text: 'Form MGT-7 (2024)', url: '#' },
      { text: 'Archives', url: '#' },
    ],
    cta: 'View Returns →'
  },
  {
    id: 'policies',
    title: 'Policies of the Company',
    description: 'Operational and strategic policies governing our organization.',
    links: [
      { text: 'Dividend Distribution', url: '#' },
      { text: 'CSR Policy', url: '#' },
      { text: 'Risk Management', url: '#' },
    ],
    cta: 'View All Policies →'
  },
  {
    id: 'shareholder-info',
    title: 'Shareholder Information',
    description: 'Resources and updates for our valued shareholders and investors.',
    links: [
      { text: 'Shareholding Pattern', url: '#' },
      { text: 'Registrar Details', url: '#' },
      { text: 'Unpaid Dividend', url: '#' },
    ],
    cta: 'Investor Desk →'
  },
  {
    id: 'kmp',
    title: 'Key Managerial Personnel',
    description: "Executive leadership driving Sahana Defence's strategic vision.",
    links: [
      { text: 'CEO & Managing Director', url: '#' },
      { text: 'Chief Financial Officer', url: '#' },
      { text: 'Company Secretary', url: '#' },
    ],
    cta: 'View Leadership →'
  },
  {
    id: 'board-of-directors',
    title: 'Board of Directors',
    description: 'Company leadership and corporate governance framework.',
    links: [
      { text: 'Chairman', url: '#' },
      { text: 'Managing Director', url: '#' },
      { text: 'Independent Directors', url: '#' },
    ],
    cta: 'View Details →'
  },
  {
    id: 'committees',
    title: 'Composition of Committees',
    description: 'Details of various board committees and their current members.',
    links: [
      { text: 'Audit Committee', url: '#' },
      { text: 'Nomination & Remuneration', url: '#' },
      { text: 'CSR Committee', url: '#' },
    ],
    cta: 'View Committees →'
  },
  {
    id: 'key-contact',
    title: 'Key Contact',
    description: 'Direct contact points for investor relations and grievance redressal.',
    links: [
      { text: 'Nodal Officer', url: '#' },
      { text: 'Compliance Officer', url: '#' },
      { text: 'Investor Grievances', url: '#' },
    ],
    cta: 'Contact IR →'
  }
];

const TRUST_BAR_DATA = [
  {
    title: "Mission Ready",
    desc: "Built for the most demanding environments",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    )
  },
  {
    title: "Proven Technology",
    desc: "Field tested. Battle proven. Trusted globally.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    )
  },
  {
    title: "Indigenous Innovation",
    desc: "Designed and developed in India",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="4" width="16" height="16" rx="2" ry="2"/>
        <rect x="9" y="9" width="6" height="6"/>
        <line x1="9" y1="1" x2="9" y2="4"/>
        <line x1="15" y1="1" x2="15" y2="4"/>
        <line x1="9" y1="20" x2="9" y2="23"/>
        <line x1="15" y1="20" x2="15" y2="23"/>
        <line x1="20" y1="9" x2="23" y2="9"/>
        <line x1="20" y1="14" x2="23" y2="14"/>
        <line x1="1" y1="9" x2="4" y2="9"/>
        <line x1="1" y1="14" x2="4" y2="14"/>
      </svg>
    )
  },
  {
    title: "End-to-End Solutions",
    desc: "From concept to deployment and beyond",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="18" cy="5" r="3"/>
        <circle cx="6" cy="12" r="3"/>
        <circle cx="18" cy="19" r="3"/>
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
      </svg>
    )
  },
  {
    title: "Global Support",
    desc: "24/7 support and lifecycle services",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 18v-6a9 9 0 0 1 18 0v6"/>
        <path d="M21 19a2 2 0 0 1-2 2h-1v-6h3v4z"/>
        <path d="M3 19a2 2 0 0 0 2 2h1v-6H3v4z"/>
      </svg>
    )
  }
];

function Nav() {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredNav(null);
    }, 250);
  };

  const handleMouseEnter = (link: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setHoveredNav(link);
  };

  // For Capabilities Mega Menu specifically
  const [activeDomain, setActiveDomain] = useState(CAPABILITIES_DATA[0]);
  const [activeInvestorSection, setActiveInvestorSection] = useState(INVESTORS_DATA[0] || {} as any);
  const [activeSystem, setActiveSystem] = useState(CAPABILITIES_DATA[0].systems[0]);

  // For Mobile Accordion
  const [mobileDomainOpen, setMobileDomainOpen] = useState<string | null>(null);
  const [mobileSystemOpen, setMobileSystemOpen] = useState<string | null>(null);

  useEffect(() => {
    setActiveSystem(activeDomain.systems[0]);
  }, [activeDomain]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setHoveredNav(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header 
      className={`fixed left-1/2 -translate-x-1/2 z-50 flex flex-col justify-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        scrolled 
          ? "top-4 w-[95%] lg:w-[90%] max-w-[1200px] h-[64px] rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.5)] border border-white/20" 
          : "top-0 w-full max-w-none h-[86px] rounded-none border-b border-white/10"
      }`}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${scrolled ? "bg-[#05080D]/40 backdrop-blur-[16px] rounded-full" : "bg-[#05080D]/90 backdrop-blur-xl rounded-none"}`} />

      <div className={`relative flex items-center justify-between z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${scrolled ? "px-6 lg:px-8 h-[64px]" : "px-6 lg:px-9 h-[86px]"}`}>
        <a href="#" onClick={(e) => { e.preventDefault(); setHoveredNav(null); navigate('/'); }} 
           className="relative shrink-0 flex items-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" 
           style={{ width: scrolled ? '40px' : '210px', height: '40px' }}>
          
          {/* Full Logo */}
          <div className={`absolute left-0 top-1/2 -translate-y-1/2 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${scrolled ? 'opacity-0 scale-90 pointer-events-none' : 'opacity-100 scale-100'}`}>
            <AndurilLogo width={210} />
          </div>
          
          {/* Capsule Icon */}
          <div className={`absolute left-0 top-1/2 -translate-y-1/2 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${scrolled ? 'opacity-100 scale-100' : 'opacity-0 scale-50 pointer-events-none'}`}>
            <img src={capsuleIcon} alt="Icon Logo" className="w-[40px] h-auto object-contain" />
          </div>
        </a>

        {/* Desktop Links */}
        <nav className={`hidden lg:flex items-center absolute left-1/2 -translate-x-1/2 h-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${scrolled ? "gap-6 scale-[0.85]" : "gap-8 scale-100"}`}>
          {['Capabilities', 'Investors', 'Newsroom', 'About Us'].map((link) => (
            <div 
              key={link}
              className="h-full flex items-center"
              onMouseEnter={() => handleMouseEnter(link)}
            >
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className={`text-[15px] whitespace-nowrap transition-all duration-150 cursor-pointer flex items-center gap-1.5 ${
                  hoveredNav === link ? "text-white" : "text-white/70 hover:text-white"
                }`}
                style={{ fontFamily: INTER }}
              >
                {link}
                {(link === 'Capabilities' || link === 'About Us' || link === 'Investors' || link === 'Newsroom') && (
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`transition-transform duration-300 ${hoveredNav === link ? "rotate-180 text-[#84CC16]" : ""}`}>
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                )}
              </a>
            </div>
          ))}
        </nav>

        {/* Right Desktop Links */}
        <div className="hidden lg:flex items-center gap-6">
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); setHoveredNav(null); }}
            className={`font-bold tracking-[1px] uppercase border border-white/20 hover:border-[#84CC16] hover:text-[#84CC16] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] rounded-sm text-white ${scrolled ? "px-4 py-1.5 text-[12px]" : "px-6 py-2.5 text-[14px]"}`}
          >
            Contact Us
          </a>
        </div>

        {/* Mobile Hamburger (Only visible on mobile screens) */}
        <div className="flex lg:hidden items-center gap-4">
          <button
            className="text-white p-2 cursor-pointer"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span className="block w-6 h-px bg-white transition-transform" />
              <span className="block w-6 h-px bg-white transition-transform" />
              <span className="block w-4 h-px bg-white transition-transform" />
            </div>
          </button>
        </div>
      </div>

      {/* Capabilities Mega Menu Dropdown */}
      <div
        className={`hidden lg:block fixed left-0 w-[100vw] bg-[#05080D] transition-all duration-300 origin-top z-40 ${
          scrolled ? "top-[80px]" : "top-[86px]"
        } ${
          hoveredNav === 'Capabilities'
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
        style={{ borderTop: "1px solid rgba(0,229,255,0.15)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}
        onMouseEnter={() => handleMouseEnter('Capabilities')}
        onMouseLeave={handleMouseLeave}
      >
        <div className="max-w-[1400px] w-full mx-auto flex h-auto">
          
          {/* COLUMN 1: DOMAINS */}
          <div className="w-[340px] border-r border-white/5 flex flex-col p-6 gap-2">
            {CAPABILITIES_DATA.map((domain) => {
              const isActive = activeDomain.id === domain.id;
              return (
                <div 
                  key={domain.id}
                  onMouseEnter={() => setActiveDomain(domain)}
                  className={`group relative flex flex-col gap-1 py-4 px-5 rounded-md cursor-pointer transition-all duration-300 ${isActive ? "bg-gradient-to-r from-[rgba(0,229,255,0.1)] to-transparent border-l-2 border-[#84CC16]" : "border-l-2 border-transparent hover:bg-white/5"}`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`transition-colors ${isActive ? "text-[#84CC16]" : "text-white/50 group-hover:text-white/80"}`}>
                      {domain.icon}
                    </div>
                    <h3 className={`font-bold text-[15px] tracking-wide transition-colors ${isActive ? "text-white" : "text-white/70 group-hover:text-white"}`}>
                      {domain.title}
                    </h3>
                    {isActive && (
                      <div className="ml-auto text-[#84CC16] opacity-80">
                        <MiniArrow color="#84CC16" />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* COLUMN 2: SYSTEMS */}
          <div className="w-[340px] border-r border-white/5 p-6 bg-black/20 flex flex-col relative">
            <h4 className="text-[11px] font-bold tracking-[2px] uppercase text-[#84CC16] mb-4">SYSTEMS</h4>
            <div className="flex flex-col gap-1 flex-1">
              {activeDomain.systems.map((system: any) => {
                const isActive = activeSystem.id === system.id;
                return (
                  <div 
                    key={system.id}
                    onMouseEnter={() => setActiveSystem(system)}
                    onClick={(e) => {
                      if (system.slug && system.slug !== 'home') {
                        e.preventDefault();
                        setHoveredNav(null);
                        navigate(system.slug);
                      }
                    }}
                    className={`flex items-start gap-4 p-4 rounded-md cursor-pointer transition-all duration-300 ${isActive ? "bg-white/10" : "hover:bg-white/5"}`}
                  >
                    <div className="flex-1">
                      <h3 className={`font-bold text-[14px] ${!system.description ? 'mb-0' : 'mb-1'} ${isActive ? "text-[#84CC16]" : "text-white/80"}`}>{system.title}</h3>
                      {system.description && <p className="text-[12px] text-white/40 leading-snug line-clamp-1">{system.description}</p>}
                    </div>
                    {isActive && <div className="text-[#84CC16] mt-1"><MiniArrow color="#84CC16" /></div>}
                  </div>
                );
              })}
            </div>
            
            <a 
              href="#"
              onClick={(e) => { e.preventDefault(); setHoveredNav(null); navigate(activeDomain.systems[0].products[0]?.slug || 'home'); }}
              className="mt-6 flex items-center gap-2 text-[12px] font-bold uppercase tracking-wider text-[#84CC16] hover:text-white transition-colors"
            >
              View {activeDomain.title} <MiniArrow color="currentColor" />
            </a>
          </div>

          {/* COLUMN 3: PRODUCTS */}
          <div className="flex-1 border-r border-white/5 p-6 bg-black/40 flex flex-col relative">
            <h4 className="text-[11px] font-bold tracking-[2px] uppercase text-white/50 mb-4 flex items-center gap-2">
              <span className="text-[#84CC16]">{activeSystem.title}</span> Products
            </h4>
            
            {activeSystem.products.length > 5 ? (
              <div className="grid grid-cols-2 gap-x-6 gap-y-1 flex-1">
                <div className="flex flex-col gap-1">
                  {activeSystem.products.slice(0, Math.ceil(activeSystem.products.length / 2)).map((product: any) => (
                    <div 
                      key={product.id} 
                      className="group flex items-center gap-4 cursor-pointer p-3 rounded-md hover:bg-white/5 transition-all duration-300"
                      onClick={() => { setHoveredNav(null); if (navigate) navigate(product.slug); }}
                    >
                      <div className="w-[32px] h-[32px] rounded overflow-hidden border border-white/10 shrink-0 bg-[#05080d]">
                        <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <span className="text-[13px] font-bold text-white/70 group-hover:text-white transition-colors">{product.title}</span>
                      <div className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ml-auto">
                        <MiniArrow color="#84CC16" />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-1">
                  {activeSystem.products.slice(Math.ceil(activeSystem.products.length / 2)).map((product: any) => (
                    <div 
                      key={product.id} 
                      className="group flex items-center gap-4 cursor-pointer p-3 rounded-md hover:bg-white/5 transition-all duration-300"
                      onClick={() => { setHoveredNav(null); if (navigate) navigate(product.slug); }}
                    >
                      <div className="w-[32px] h-[32px] rounded overflow-hidden border border-white/10 shrink-0 bg-[#05080d]">
                        <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <span className="text-[13px] font-bold text-white/70 group-hover:text-white transition-colors">{product.title}</span>
                      <div className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ml-auto">
                        <MiniArrow color="#84CC16" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-1 flex-1">
                {activeSystem.products.map((product: any) => (
                  <div 
                    key={product.id} 
                    className="group flex items-center gap-4 cursor-pointer p-3 rounded-md hover:bg-white/5 transition-all duration-300"
                    onClick={() => { setHoveredNav(null); if (navigate) navigate(product.slug); }}
                  >
                    <div className="w-[32px] h-[32px] rounded overflow-hidden border border-white/10 shrink-0 bg-[#05080d]">
                      <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <span className="text-[13px] font-bold text-white/70 group-hover:text-white transition-colors">{product.title}</span>
                    <div className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ml-auto">
                      <MiniArrow color="#84CC16" />
                    </div>
                  </div>
                ))}
              </div>
            )}

            <a 
              href="#"
              onClick={(e) => { e.preventDefault(); setHoveredNav(null); navigate(activeSystem.products[0]?.slug || 'home'); }}
              className="mt-6 flex items-center gap-2 text-[12px] font-bold uppercase tracking-wider text-white/60 hover:text-white transition-colors"
            >
              View All Products <MiniArrow color="currentColor" />
            </a>
          </div>


        </div>
      </div>

      {/* Investors Mega Menu Dropdown */}
      <div
        className={`hidden lg:block fixed left-0 w-[100vw] bg-[#05080D] transition-all duration-300 origin-top overflow-hidden z-40 ${
          scrolled ? "top-[80px]" : "top-[86px]"
        } ${
          hoveredNav === 'Investors'
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
        style={{ borderTop: "1px solid rgba(0,229,255,0.15)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}
        onMouseEnter={() => handleMouseEnter('Investors')}
        onMouseLeave={handleMouseLeave}
      >
        <div className="max-w-[1400px] w-full mx-auto flex h-auto max-h-[600px]">
          
          {/* COLUMN 1: THE HUB INFO CARD */}
          <div className="w-[340px] border-r border-white/5 flex flex-col p-6 gap-2">
            <div className="flex flex-col gap-1 py-6 px-6 rounded-md border-l-2 border-[#84CC16] bg-gradient-to-r from-[rgba(0,229,255,0.1)] to-transparent">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-[#84CC16]">
                   <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                     <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                     <circle cx="9" cy="7" r="4"></circle>
                     <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                     <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                   </svg>
                </div>
              </div>
              <h4 className="text-[11px] font-bold tracking-[2px] uppercase text-[#84CC16] mb-1">THE HUB</h4>
              <h3 className="font-bold text-[18px] text-white mb-3">Investor Relations Center</h3>
              <p className="text-[13px] text-white/60 mb-6 leading-relaxed">All corporate governance, shareholder information, financial reports and disclosures.</p>
              
              <div className="flex items-center gap-3 text-[11px] font-bold tracking-wider uppercase mt-2">
                <span className="text-[#84CC16]">10 SECTIONS</span>
              </div>
            </div>
          </div>

          {/* COLUMN 2: THE HUB LINKS */}
          <div className="lg:w-[40%] xl:w-[500px] border-r border-white/5 p-6 bg-black/20 flex flex-col relative">
            <h4 className="text-[11px] font-bold tracking-[2px] uppercase text-[#84CC16] mb-4">THE HUB</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 flex-1 pr-2">
              {INVESTORS_DATA.map((section: any) => {
                const isActive = activeInvestorSection.id === section.id;
                return (
                  <div 
                    key={section.id}
                    onMouseEnter={() => setActiveInvestorSection(section)}
                    className={`flex items-start gap-2 p-3 rounded-md cursor-pointer transition-all duration-300 ${isActive ? "bg-white/10" : "hover:bg-white/5"}`}
                  >
                    <div className="flex-1">
                      <h3 className={`font-bold text-[12px] ${isActive ? "text-[#84CC16]" : "text-white/80"}`}>{section.title}</h3>
                    </div>
                    {isActive && <div className="text-[#84CC16] mt-0.5"><MiniArrow color="#84CC16" /></div>}
                  </div>
                );
              })}
            </div>
          </div>

          {/* COLUMN 3: DYNAMIC DETAILS */}
          <div className="flex-1 border-r border-white/5 p-6 bg-black/40 flex flex-col relative">
            <h4 className="text-[11px] font-bold tracking-[2px] uppercase text-white/50 mb-4 flex items-center gap-2">
              <span className="text-[#84CC16]">{activeInvestorSection.title.toUpperCase()}</span>
            </h4>
            
            <p className="text-[14px] text-white/70 leading-relaxed mb-8 max-w-[400px]">
              {activeInvestorSection.description}
            </p>

            <h5 className="text-[11px] font-bold tracking-[2px] uppercase text-white/40 mb-3">Recent Documents</h5>
            
            <div className="flex flex-col gap-1 flex-1 max-w-[400px]">
              {activeInvestorSection.links.map((link: any, idx: number) => (
                <div 
                  key={idx} 
                  className="group flex items-center gap-4 cursor-pointer p-3 rounded-md hover:bg-white/5 transition-all duration-300"
                  onClick={() => { setHoveredNav(null); if (navigate) navigate(link.url); }}
                >
                  <div className="w-[24px] h-[24px] shrink-0 text-white/20 group-hover:text-[#84CC16] transition-colors flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                  </div>
                  <span className="text-[13px] font-bold text-white/70 group-hover:text-white transition-colors">{link.text}</span>
                  <div className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ml-auto">
                    <MiniArrow color="#84CC16" />
                  </div>
                </div>
              ))}
            </div>

            <a 
              href="#"
              onClick={(e) => { e.preventDefault(); setHoveredNav(null); navigate('/'); }}
              className="mt-6 flex items-center gap-2 text-[12px] font-bold uppercase tracking-wider text-white/60 hover:text-white transition-colors"
            >
              View All →
            </a>
          </div>


        </div>
      </div>

      {/* Newsroom Small Dropdown */}
      <div
        className={`hidden lg:block fixed left-[50%] ml-[40px] w-[220px] bg-[#05080D] border border-white/10 rounded-b-md shadow-2xl transition-all duration-300 origin-top overflow-hidden z-40 ${
          scrolled ? "top-[80px]" : "top-[86px]"
        } ${
          hoveredNav === 'Newsroom'
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
        onMouseEnter={() => handleMouseEnter('Newsroom')}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex flex-col p-4 max-h-[500px] overflow-y-auto custom-scrollbar">
          <h4 className="text-[11px] font-bold tracking-[2px] uppercase text-[#84CC16] mb-3 px-2">Newsroom</h4>
          <div className="flex flex-col gap-1">
            {['Press Release', 'Events', 'Awards'].map(item => (
              <a key={item} href="#" onClick={(e) => { e.preventDefault(); setHoveredNav(null); navigate('/'); }} className="group flex items-center justify-between px-2 py-2 text-[13px] text-white/70 hover:text-white hover:bg-white/5 rounded-sm transition-all" style={{ fontFamily: 'Inter, sans-serif' }}>
                <span>{item}</span>
                <span className="text-[#84CC16] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">→</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* About Us Small Dropdown */}
      <div
        className={`hidden lg:block fixed left-[50%] ml-[160px] w-[200px] bg-[#05080D] border border-white/10 rounded-b-md shadow-2xl transition-all duration-300 origin-top overflow-hidden z-40 ${
          scrolled ? "top-[80px]" : "top-[86px]"
        } ${
          hoveredNav === 'About Us'
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
        onMouseEnter={() => handleMouseEnter('About Us')}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex flex-col p-2">
          {['Company', 'Leadership', 'Careers', 'Certifications', 'Contact'].map(item => (
            <a key={item} href="#" onClick={(e) => { e.preventDefault(); setHoveredNav(null); navigate('/'); }} className="px-4 py-2 text-[14px] text-white/70 hover:text-white hover:bg-white/5 rounded-sm transition-colors" style={{ fontFamily: INTER }}>
              {item}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Menu Drawer (Stacked Accordion) */}
      <div className={`lg:hidden fixed inset-0 top-[86px] bg-[#05080D] z-40 overflow-y-auto transition-transform duration-300 ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex flex-col p-6 gap-2">
          
          <a href="#" className="py-4 border-b border-white/10 text-[18px] font-bold text-white uppercase tracking-wider" onClick={() => { navigate('/'); setMobileOpen(false); }}>Home</a>
          
          {/* Capabilities Accordion */}
          <div className="py-4 border-b border-white/10">
            <h3 className="text-[18px] font-bold text-[#84CC16] uppercase tracking-wider mb-4">Capabilities</h3>
            <div className="flex flex-col gap-2 pl-4 border-l border-white/10">
              {CAPABILITIES_DATA.map((domain: any) => (
                <div key={domain.id} className="flex flex-col">
                  <div 
                    className="flex items-center justify-between py-3 text-white cursor-pointer"
                    onClick={() => setMobileDomainOpen(mobileDomainOpen === domain.id ? null : domain.id)}
                  >
                    <span className="font-bold text-[15px]">{domain.title}</span>
                    <span className="text-[#84CC16]">{mobileDomainOpen === domain.id ? "-" : "+"}</span>
                  </div>
                  {mobileDomainOpen === domain.id && (
                    <div className="flex flex-col gap-2 pl-4 py-2 border-l border-white/10">
                      {domain.systems.map((sys: any) => (
                        <div key={sys.id} className="flex flex-col">
                          <div 
                            className="flex items-center justify-between py-2 text-white/80 cursor-pointer text-[14px]"
                            onClick={() => setMobileSystemOpen(mobileSystemOpen === sys.id ? null : sys.id)}
                          >
                            <span>{sys.title}</span>
                            <span className="text-white/50 text-xs">{mobileSystemOpen === sys.id ? "▼" : "▶"}</span>
                          </div>
                          {mobileSystemOpen === sys.id && (
                            <div className="flex flex-col gap-2 pl-4 py-2">
                              {sys.products.map((prod: any) => (
                                <a 
                                  key={prod.id} 
                                  href="#" 
                                  className="text-[13px] text-[#84CC16] py-1"
                                  onClick={(e) => { e.preventDefault(); navigate(prod.slug); setMobileOpen(false); }}
                                >
                                  {prod.title}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <a href="#" className="py-4 border-b border-white/10 text-[18px] font-bold text-white uppercase tracking-wider">Investors</a>
          <a href="#" className="py-4 border-b border-white/10 text-[18px] font-bold text-white uppercase tracking-wider">Newsroom</a>
          <a href="#" className="py-4 border-b border-white/10 text-[18px] font-bold text-white uppercase tracking-wider">About Us</a>
          <a href="#" className="py-4 text-[18px] font-bold text-[#84CC16] uppercase tracking-wider mt-4 border border-[#84CC16]/30 text-center rounded-sm bg-[#84CC16]/5">Contact Us</a>

        </div>
      </div>

    </header>
  );
}
// ——— HERO ————————————————————————————————————————————————————————————————————————————————————

import { VideoScrollHero } from '../components/VideoScrollHero';
import heroVideoNew from '@/imports/hero_banner_video_new.mp4';

function Hero() {
  return <VideoScrollHero videoSrc={heroVideoNew} />;
}


function ProductCard({
  image,
  name,
  subtitle,
  description,
  className = "",
  showArrow = false,
  onClick,
  has360 = false,
  on360Click,
}: {
  image: string | string[];
  name: string;
  subtitle?: string;
  description?: string;
  className?: string;
  showArrow?: boolean;
  onClick?: () => void;
  has360?: boolean;
  on360Click?: (e: React.MouseEvent) => void;
}) {
  const isArray = Array.isArray(image);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isArray || isHovered) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % image.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [isArray, image, isHovered]);

  return (
    <div 
      className={`relative overflow-hidden rounded-sm cursor-pointer group ${className}`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isArray ? (
        image.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${name} slide ${idx + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:blur-[3px] ${
              idx === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))
      ) : (
        <img
          src={image as string}
          alt={name}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:blur-[3px]"
        />
      )}
      {/* gradient overlay */}
      <div
        className="absolute inset-0 mix-blend-multiply opacity-50"
        style={{ backgroundImage: CARD_GRADIENT }}
      />
      {/* text */}
      <div className="absolute bottom-9 left-5 right-5">
        <div className="flex items-center justify-between gap-4">
          <a
            onClick={(e) => {
              if (onClick) {
                e.preventDefault();
                onClick();
              }
            }}
            href="#"
            className="text-white text-2xl tracking-tight leading-tight hover:underline cursor-pointer"
            style={{ fontFamily: INTER, fontWeight: 700 }}
          >
            {name}
          </a>
          <div
            className={`transition-opacity duration-300 shrink-0 ${
              showArrow ? "opacity-100" : "opacity-0 group-hover:opacity-100"
            }`}
          >
            <CardArrow />
          </div>
        </div>
        {subtitle && (
          <p
            className="text-white text-base mt-2 opacity-90"
            style={{ fontFamily: INTER, fontWeight: 400 }}
          >
            {subtitle}
          </p>
        )}
        {description && (
          <p
            className="text-white/80 text-[13px] md:text-sm mt-3 opacity-0 max-h-0 translate-y-2 group-hover:opacity-100 group-hover:max-h-[120px] group-hover:translate-y-0 transition-all duration-500 ease-out leading-relaxed overflow-hidden"
            style={{ fontFamily: INTER, fontWeight: 400 }}
          >
            {description}
          </p>
        )}
        {has360 && (
          <button
            onClick={(e) => { e.stopPropagation(); if(on360Click) on360Click(e); }}
            className="mt-4 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-md text-white text-sm font-semibold tracking-wider transition-all z-20 relative shadow-lg"
            style={{ fontFamily: INTER }}
          >
            VIEW 360 DEGREE
          </button>
        )}
      </div>
    </div>
  );
}

// ——— PRODUCTS SECTION ————————————————————————————————————————————————————————————————————————

const PRODUCTS_DATA = [
  {
    image: sensorDomeImg,
    name: "Infinity Optics",
    subtitle: "Eyes on the Mission.",
    description: "A precision sensing payload designed to deliver real-time visual intelligence in dynamic operational environments. Engineered for reconnaissance, target observation, and mission awareness, Infinity Optics enhances decision-making with reliable surveillance and persistent situational visibility.",
    desktopGridClass: "[grid-column:1/span_4] [grid-row:1]",
    showArrow: true,
    target: '/',
  },
  {
    image: flightImg,
    name: "FPV Bullseye & Interceptor",
    subtitle: "Tactical FPV Strike Platform",
    description: "Built for high-speed reconnaissance and precision engagement, the FPV Bullseye & Interceptor combines agile maneuverability, real-time situational awareness, and mission-ready reliability. Engineered for rapid deployment, it enables forces to operate effectively across dynamic and contested environments.",
    desktopGridClass: "[grid-column:5/span_4] [grid-row:1]",
    showArrow: true,
    target: '/fpv-drone',
  },
  {
    image: infinitySpearImg,
    name: "Infinity Spear",
    subtitle: "Portable Counter-UAS System",
    has360: true,
    video360: infinitySpearVideo,
    description: "Neutralize hostile drones with high-power multi-band jamming technology. Designed for rapid deployment, Infinity Spear delivers effective drone disruption at ranges up to 2.5 km while maintaining lightweight, one-person operation.",
    desktopGridClass: "[grid-column:9/span_4] [grid-row:1]",
    showArrow: true,
    target: '/handheld-jammer',
  },
  {
    image: rfDetectorImg,
    name: "RF Detector D360",
    subtitle: "Detect the Invisible.",
    description: "Engineered to uncover signal activity across a broad frequency spectrum, RF Detector D360 provides operators with reliable electronic awareness for defense, intelligence, and security operations.",
    desktopGridClass: "[grid-column:1/span_4] [grid-row:2/span_2]",
    showArrow: true,
    target: '/rf-detector',
  },
  {
    image: [commandControlImg1, commandControlImg2],
    name: "Command & Control",
    subtitle: "Tactical Operations Hub.",
    description: "A centralized, multi-operator platform designed to streamline military and defense operations with real-time situational awareness and secure communications.",
    desktopGridClass: "[grid-column:5/span_8] [grid-row:2]",
    showArrow: true,
    target: '/proxy',
  },
  {
    image: infinityRhinoImg,
    name: "Infinity Rhino",
    subtitle: "Defend Critical Airspace.",
    description: "A mission-ready anti-drone platform built to disrupt unauthorized UAV activity with precision and reliability. Combining portability, endurance, and operational flexibility, Infinity Rhino empowers teams to maintain control in contested environments.",
    desktopGridClass: "[grid-column:5/span_4] [grid-row:3]",
    showArrow: false,
    target: '/infinity-rhino',
  },
  {
    image: digitalTwinImg,
    name: "Digital Twin",
    subtitle: "Engineering Ports and Marine Intelligence",
    description: "Protecting Borders, Assets and Strategic Infrastructure",
    desktopGridClass: "[grid-column:9/span_4] [grid-row:3]",
    showArrow: false,
    target: '/',
  },
];


function VisionSection() {
  return (
    <section className="sticky top-0 z-0 h-screen w-full bg-black flex overflow-hidden">
      {/* The animation video */}
      <video
        src={visionRobotVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-screen"
      />
      {/* Dark fade on top */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />

      {/* Content wrapper for the vision text */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center px-9 max-w-[1400px] mx-auto">
        <h2 className="text-white text-5xl md:text-6xl tracking-tight leading-[1.1] max-w-[800px]" style={{ fontFamily: INTER, fontWeight: 400 }}>
          Securing the Future<br />Through Uncompromised<br />Defence Innovation.
        </h2>
        <div className="mt-8 flex gap-8">
          <div className="flex flex-col gap-1">
            <span className="text-[#84CC16] text-[10px] font-bold tracking-[2px] uppercase">DEPLOYMENT</span>
            <span className="text-white font-medium text-lg">Multi-Domain Integration</span>
          </div>
          <div className="w-px h-12 bg-white/20" />
          <div className="flex flex-col gap-1">
            <span className="text-[#84CC16] text-[10px] font-bold tracking-[2px] uppercase">ARCHITECTURE</span>
            <span className="text-white font-medium text-lg">AI-First Infrastructure</span>
          </div>
        </div>
        {/* Soft bottom fade to blend with next section if needed */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
}

function ProductsSection() {
  const navigate = useNavigate();
  const [viewer360, setViewer360] = useState<string | null>(null);
  return (
    <section className="relative z-10 w-full px-9 pt-12 pb-16 bg-black/60 backdrop-blur-md">
      {/* Section header */}
      <div className="flex items-end justify-between mb-5 w-full">
        <h2
          className="text-white text-3xl md:text-4xl tracking-tight"
          style={{ fontFamily: INTER, fontWeight: 400 }}
        >
          Electronic Warfare
        </h2>
        <UnderlineLink color="white" opacity={0.6}>
          Mission Critical Facility
        </UnderlineLink>
      </div>

      {/* ——— Desktop 12-col grid ——— */}
      <div
        className="hidden lg:grid grid-cols-12 gap-5 w-full"
        style={{ gridTemplateRows: "repeat(3, clamp(220px, 31vw, 598px))" }}
      >
        {PRODUCTS_DATA.map((product) => (
          <ProductCard
            key={product.name}
            image={product.image}
            name={product.name}
            subtitle={product.subtitle}
            description={product.description}
            className={product.desktopGridClass}
            showArrow={product.showArrow}
            has360={(product as any).has360}
            on360Click={(e) => {
              if ((product as any).video360) {
                setViewer360((product as any).video360);
              }
            }}
            onClick={() => {
              if (product.target) {
                navigate(product.target);
              }
            }}
          />
        ))}
      </div>

      {/* ——— Mobile / tablet stacked grid ——— */}
      <div className="grid lg:hidden grid-cols-1 sm:grid-cols-2 gap-5 w-full">
        {PRODUCTS_DATA.map((product) => (
          <ProductCard
            key={product.name}
            image={product.image}
            name={product.name}
            subtitle={product.subtitle}
            description={product.description}
            className="aspect-square"
            showArrow={product.showArrow}
            onClick={() => {
              if (product.target) {
                navigate(product.target);
              }
            }}
          />
        ))}
      </div>
      {viewer360 && <Interactive360Viewer videoSrc={viewer360} onClose={() => setViewer360(null)} />}
    </section>
  );
}

// ——— ARSENAL-1 FEATURE SECTION ———————————————————————————————————————————————————————————————

function Arsenal1Section() {
  return (
    <section className="relative z-10 w-full py-20 flex flex-col gap-9 bg-neutral-900/60 backdrop-blur-md">
      {/* header */}
      <div className="px-9 flex items-end justify-between">
        <h2
          className="text-white text-3xl md:text-4xl tracking-tight"
          style={{ fontFamily: INTER, fontWeight: 400 }}
        >
          Our Facility
        </h2>
        <UnderlineLink color="white" opacity={0.6}>
          Mission Critical Facility
        </UnderlineLink>
      </div>

      {/* featured image */}
      <div className="px-9">
        <div className="relative w-full overflow-hidden rounded-sm" style={{ aspectRatio: "3 / 1" }}>
          <img
            src={arsenalFacilityImg}
            alt="Sahana Defence manufacturing facility"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>

      {/* removed caption row */}
    </section>
  );
}

// ——— NEWS & INSIGHTS —————————————————————————————————————————————————————————————————————————

function NewsSection() {
  return (
    <section className="w-full py-14 flex flex-col gap-9" style={{ background: "#f1f0ea" }}>
      {/* header */}
      <div className="px-9">
        <div className="flex items-end justify-between pb-4 border-b border-black/60">
          <h2
            className="text-[#010101] text-4xl md:text-5xl tracking-[-0.9px] capitalize"
            style={{ fontFamily: INTER, fontWeight: 400 }}
          >
            News &amp; Insights
          </h2>
          <UnderlineLink color="#010101">All articles</UnderlineLink>
        </div>
      </div>

      {/* article layout */}
      <div className="px-9 grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* text */}
        <div className="lg:col-span-5 flex flex-col gap-9">
          <div className="flex flex-col gap-2">
            <p
              className="text-[#010101] text-xs uppercase tracking-[0.54px]"
              style={{ fontFamily: INTER, fontWeight: 500 }}
            >
              06/26/2026
            </p>
            <h3
              className="text-[#010101] text-3xl md:text-4xl tracking-[-0.36px] capitalize leading-tight"
              style={{ fontFamily: INTER, fontWeight: 400 }}
            >
              Sahana Defence Signs Strategic Manufacturing Agreement with CEL
            </h3>
          </div>
          <p
            className="text-[#010101] text-base leading-relaxed"
            style={{ fontFamily: INTER, fontWeight: 400 }}
          >
            Sahana Defence has entered into a Contract Agreement with Central Electronics Limited (CEL) to expand India's indigenous defence manufacturing capabilities. The partnership will support the establishment of a dedicated facility focused on Electronic Warfare systems, weapon systems, defence peripherals, and advanced DefenceTech solutions, reinforcing the nation's vision for self-reliance in defence production.
          </p>
          <UnderlineLink color="#010101">Read more</UnderlineLink>
        </div>

        {/* image */}
        <div className="lg:col-start-7 lg:col-span-6">
          <div className="relative w-full overflow-hidden rounded-sm" style={{ aspectRatio: "16/9" }}>
            <img
              src={newsCelImg}
              alt="Sahana Defence signs agreement with CEL"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ——— EDITORIAL PANEL —————————————————————————————————————————————————————————————————————————

type SlideData = { src: string; label?: string; target?: string };
type EditorialImage = string | (string | SlideData)[];

function EditorialPanel({
  title,
  image,
  label,
  bg,
  textColor = "white",
  dividerColor = "white",
  counter,
}: {
  title: string;
  image: EditorialImage;
  label: string;
  bg: string;
  textColor?: string;
  dividerColor?: string;
  counter: string;
}) {
  const isArray = Array.isArray(image);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isArray || isHovered) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % image.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [isArray, image, isHovered]);

  const currentItem = isArray ? image[currentIndex] : image;
  const currentLabel = typeof currentItem === 'object' && currentItem.label ? currentItem.label : label;
  const currentTarget = typeof currentItem === 'object' && currentItem.target ? currentItem.target : undefined;

  return (
    <div
      className="flex-1 flex flex-col gap-9 py-16 px-9 min-h-[640px] relative"
      style={{ background: bg }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* header */}
      <div className="flex items-end justify-between">
        <h3
          className="text-3xl md:text-4xl tracking-[-0.36px]"
          style={{ fontFamily: INTER, fontWeight: 400, color: textColor }}
        >
          {title}
        </h3>
        <UnderlineLink color={textColor} onClick={() => currentTarget ? navigate(currentTarget) : undefined}>
          {currentLabel}
        </UnderlineLink>
      </div>

      {/* divider */}
      <div className="h-px opacity-60" style={{ background: dividerColor }} />

      {/* image */}
      <div className="relative w-full flex-1 overflow-hidden rounded-sm min-h-[320px] group">
        {isArray ? (
          <>
            {image.map((img, idx) => {
              const imgSrc = typeof img === 'object' ? img.src : img;
              return (
                <img
                  key={idx}
                  src={imgSrc}
                  alt={`${title} slide ${idx + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                    idx === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                  }`}
                />
              );
            })}
            
            {/* Slider controls */}
            <div className="absolute inset-y-0 left-0 flex items-center px-4 opacity-0 group-hover:opacity-100 transition-opacity z-20">
              <button 
                onClick={() => setCurrentIndex((prev) => (prev - 1 + image.length) % image.length)}
                className="w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/80 transition-colors backdrop-blur-sm"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center px-4 opacity-0 group-hover:opacity-100 transition-opacity z-20">
              <button 
                onClick={() => setCurrentIndex((prev) => (prev + 1) % image.length)}
                className="w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/80 transition-colors backdrop-blur-sm"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </>
        ) : (
          <img
            src={typeof image === 'object' ? (image as SlideData).src : image as string}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
      </div>
    </div>
  );
}

function EditorialSection() {
  const corporateHouseImages = [corporateHouse1, corporateHouse2, corporateHouse3];
  const innovationImages = [
    innovation1,
    innovation4,
    innovation5,
    { src: varunaHullImg, label: "Know more", target: "/varuna" }
  ];
  return (
    <section className="w-full flex flex-col lg:flex-row">
      <EditorialPanel
        title="Sahana Corporate House"
        image={corporateHouseImages}
        label="Read More"
        bg="#505544"
        textColor="white"
        dividerColor="white"
        counter="PT — 01 / 02"
      />
      <EditorialPanel
        title="Innovation"
        image={innovationImages}
        label="Read More"
        bg="#8e9291"
        textColor="#010101"
        dividerColor="#010101"
        counter="PT — 02 / 02"
      />
    </section>
  );
}

// ——— FOOTER ——————————————————————————————————————————————————————————————————————————————————

const FOOTER_COMPANY = ["Mission", "Newsroom", "Leadership", "Gear Store"];
const FOOTER_WORK = ["Careers", "Early Career", "Veteran Careers", "Open Roles"];
const FOOTER_SOCIAL = ["X", "YouTube", "Instagram", "Facebook", "LinkedIn"];

function FooterCol({ label, links }: { label: string; links: string[] }) {
  return (
    <div className="flex flex-col gap-5">
      <p
        className="text-white/60 text-xs uppercase tracking-[0.54px]"
        style={{ fontFamily: INTER, fontWeight: 500 }}
      >
        {label}
      </p>
      <ul className="flex flex-col gap-2">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="text-white text-lg hover:text-white/80 transition-colors"
              style={{ fontFamily: INTER, fontWeight: 400 }}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Footer() {
  return (
    <footer className="w-full bg-black pt-16 pb-16 flex flex-col gap-20">
      {/* top nav columns */}
      <div className="px-9 flex flex-col md:flex-row flex-wrap justify-between gap-10">
        {/* logo & contact */}
        <div className="flex flex-col gap-6 items-start">
          <SmallLogo />
          <img 
            src={makeInIndiaLogo} 
            alt="Make in India" 
            className="h-10 w-auto object-contain invert opacity-70 hover:opacity-100 transition-opacity duration-200" 
          />
          <div className="flex flex-col gap-2 mt-2">
            <p
              className="text-white/60 text-xs uppercase tracking-[0.54px]"
              style={{ fontFamily: INTER, fontWeight: 500 }}
            >
              Contact
            </p>
            <a
              href="mailto:contact@sahanadefence.com"
              className="text-white text-sm hover:text-white/80 transition-colors"
              style={{ fontFamily: INTER, fontWeight: 400 }}
            >
              contact@sahanadefence.com
            </a>
          </div>
        </div>

        {/* Company */}
        <div className="min-w-[120px]">
          <FooterCol label="Company" links={FOOTER_COMPANY} />
        </div>
        {/* Work with us */}
        <div className="min-w-[120px]">
          <FooterCol label="Work with us" links={FOOTER_WORK} />
        </div>
        {/* Social */}
        <div className="min-w-[120px]">
          <FooterCol label="Social" links={FOOTER_SOCIAL} />
        </div>
      </div>

            {/* bottom legal */}
      <div className="px-9 flex flex-col gap-3 border-t border-white/10 pt-8">
        <p
          className="text-white text-xs uppercase tracking-[0.54px]"
          style={{ fontFamily: INTER, fontWeight: 500 }}
        >
          Copyright © 2026 Sahana Defence
        </p>
        <div className="flex flex-row flex-wrap gap-x-6 gap-y-2">
          {["Privacy Policy", "Terms of Use", "Modern Anti-Slavery Policy", "Investor Relations"].map(
            (item) => (
              <a
                key={item}
                href="#"
                className="text-white/60 text-xs uppercase tracking-[0.54px] capitalize hover:text-white/90 transition-colors"
                style={{ fontFamily: INTER, fontWeight: 500 }}
              >
                {item}
              </a>
            )
          )}
        </div>
      </div>
    </footer>
  );
}

// ——— ELECTRONIC WARFARE PAGE —————————————————————————————————————————————————————————————————
function ElectronicWarfarePage() {
  const [activePillar, setActivePillar] = useState(0);

  const pillars = [
    {
      title: "Electronic Support (ES)",
      subtitle: "Passive Signal Intelligence & Emitter Tracking",
      desc: "Our electronic support systems continuously monitor the electromagnetic environment to search, intercept, identify, and locate sources of intentional and unintentional radiated electromagnetic energy. By auditing the spectrum in real-time, our passive sensors establish threat profiles, identify radar signatures, and map hostile air defense positions without emitting detectable signals of their own.",
      metrics: ["360° Passive Emitter Auditing", "Real-Time Signature Deconfliction", "High-Accuracy TDOA Geolocation"]
    },
    {
      title: "Electronic Attack (EA)",
      subtitle: "Active RF Suppression & Targeted Interference",
      desc: "Sahana's electronic attack capabilities utilize targeted electromagnetic energy and directed countermeasures to degrade, neutralize, or destroy adversary combat capabilities. We focus on non-destructive RF suppression, including multi-band communications jamming, GPS spoofing protection, radar deception, and counter-UAS frequency disruption. These capabilities deny the enemy communication channels and sensor inputs, rendering their guidance systems ineffective.",
      metrics: ["Targeted Directed-Energy Jamming", "Coherent Radar Deception", "Automated Counter-UAS RF Denial"]
    },
    {
      title: "Electronic Protection (EP)",
      subtitle: "Spectrum Hardening & Friendly Protection",
      desc: "To counter enemy jamming and electronic attacks, Sahana engineers robust electronic protection systems to safeguard friendly forces, communications networks, and sensors. Through advanced software-defined waveforming, dynamic frequency-hopping, and cognitive anti-jamming filters, our communications links and GPS receivers maintain high throughput and positioning accuracy even in contested, high-interference environments.",
      metrics: ["Cognitive Frequency-Hopping Arrays", "M-Code GPS Anti-Jamming Hardening", "Low-RCS Waveform Masking"]
    }
  ];

  return (
    <div className="w-full bg-[#0b0c0d] text-white flex flex-col relative z-10 overflow-hidden">
      {/* Decorative vertical grid lines */}
      <div className="absolute inset-y-0 left-12 w-[1px] bg-white/5 pointer-events-none hidden md:block" />
      <div className="absolute inset-y-0 right-12 w-[1px] bg-white/5 pointer-events-none hidden md:block" />

      {/* Hero Section */}
      <section className="w-full min-h-[70vh] flex flex-col justify-center items-center relative py-32 px-9 border-b border-white/10 bg-radial-[circle_at_center,rgba(46,67,33,0.15)_0%,transparent_80%]">
        {/* Animated Radar Overlay in background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        
        {/* Scanning Sweep Circle */}
        <div className="absolute w-[480px] h-[480px] border border-white/5 rounded-full pointer-events-none flex items-center justify-center">
          <div className="w-[300px] h-[300px] border border-white/5 rounded-full relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-[150px] bg-gradient-to-t from-[#2e4321] to-transparent origin-bottom animate-[spin_8s_linear_infinite]" />
          </div>
        </div>

        <div className="max-w-[1000px] mx-auto text-center relative z-10 flex flex-col gap-6 items-center">
          <span className="text-[#2e4321] text-xs uppercase tracking-[4px] font-bold text-center">Electromagnetic Dominance</span>
          <h1 className="text-4xl md:text-7xl tracking-tight text-white text-center" style={{ fontFamily: INTER, fontWeight: 300 }}>
            ELECTRONIC WARFARE
          </h1>
          <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-2xl font-light text-center" style={{ fontFamily: INTER }}>
            Modern security is defined by who controls the electromagnetic spectrum. Sahana Defence engineers software-defined systems to sense, protect, and disrupt across contested domains.
          </p>
        </div>
      </section>

      {/* Strategic Vision Intro Section */}
      <section className="w-full py-24 px-9 border-b border-white/10 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
        <div className="lg:col-span-5 flex flex-col gap-4">
          <span className="text-[11px] tracking-[2px] text-white/40 uppercase font-semibold">Strategic Spectrum Position</span>
          <h2 className="text-3xl md:text-4xl tracking-tight leading-tight" style={{ fontFamily: INTER, fontWeight: 300 }}>
            The Invisible Battlespace
          </h2>
        </div>
        <div className="lg:col-span-7 flex flex-col gap-6 text-white/70 text-sm md:text-base leading-relaxed" style={{ fontFamily: INTER }}>
          <p>
            From tactical communication links to multi-mission radar systems, modern defense infrastructure operates entirely within the electromagnetic spectrum. Dominance in this invisible arena is not merely supportive; it is the prerequisite for victory in air, land, maritime, space, and cyber operations.
          </p>
          <p>
            Sahana Defence designs responsive, adaptive solutions that ensure friendly forces maintain situational awareness and secure communications, while systematically denying operational capability to adversaries. Our engineering methodology prioritizes cognitive architectures that adapt in milliseconds to new waveforms, threats, and signatures.
          </p>
        </div>
      </section>

      {/* Core Domains Grid */}
      <section className="w-full py-24 px-9 max-w-[1400px] mx-auto flex flex-col gap-16 relative z-10">
        <div className="flex flex-col gap-3">
          <span className="text-[11px] tracking-[2px] text-white/40 uppercase font-semibold">Operational Domains</span>
          <h2 className="text-3xl md:text-4xl tracking-tight" style={{ fontFamily: INTER, fontWeight: 300 }}>
            EW Capabilities & Solutions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Drone EW Systems */}
          <div className="p-8 rounded-sm border border-white/10 bg-neutral-900/10 hover:bg-neutral-900/25 transition-all duration-300 flex flex-col justify-between min-h-[320px]">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <span className="text-[#2e4321] text-xs font-mono tracking-wider">01 / DRONE SYSTEMS</span>
                <span className="text-[10px] text-white/40 font-mono">TACTICAL UAV</span>
              </div>
              <h3 className="text-xl font-medium" style={{ fontFamily: INTER }}>Autonomous Airborne EW Platforms</h3>
              <p className="text-white/60 text-xs md:text-sm leading-relaxed" style={{ fontFamily: INTER }}>
                Integrating advanced radio frequency payloads into autonomous aircraft allows Sahana to extend the reach of spectrum monitoring and tactical jamming. Our UAV arrays function as airborne signals intelligence relays, electronic decoys, or localized signal suppressors, providing flexible cover for forward-deployed forces in GPS-denied environments.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-6">
              <span className="px-2 py-1 bg-white/5 rounded-xs text-[10px] font-mono text-white/70">Swarm Coordination</span>
              <span className="px-2 py-1 bg-white/5 rounded-xs text-[10px] font-mono text-white/70">Airborne SIGINT</span>
              <span className="px-2 py-1 bg-white/5 rounded-xs text-[10px] font-mono text-white/70">Decoy Emission</span>
            </div>
          </div>

          {/* Card 2: Radar Systems */}
          <div className="p-8 rounded-sm border border-white/10 bg-neutral-900/10 hover:bg-neutral-900/25 transition-all duration-300 flex flex-col justify-between min-h-[320px]">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <span className="text-[#2e4321] text-xs font-mono tracking-wider">02 / RADAR SYSTEMS</span>
                <span className="text-[10px] text-white/40 font-mono">ACTIVE SCANNING</span>
              </div>
              <h3 className="text-xl font-medium" style={{ fontFamily: INTER }}>Software-Defined AESA Sensory Arrays</h3>
              <p className="text-white/60 text-xs md:text-sm leading-relaxed" style={{ fontFamily: INTER }}>
                Sahana engineers high-performance Active Electronically Scanned Array (AESA) radars that combine surveillance, targeting, and tracking into a single digital architecture. Powered by cognitive beamforming algorithms, these radars detect low-observable (stealth) targets and micro-UAS platforms, delivering exceptional situational awareness under extreme clutter and jamming.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-6">
              <span className="px-2 py-1 bg-white/5 rounded-xs text-[10px] font-mono text-white/70">Cognitive Beamforming</span>
              <span className="px-2 py-1 bg-white/5 rounded-xs text-[10px] font-mono text-white/70">Low-RCS Tracking</span>
              <span className="px-2 py-1 bg-white/5 rounded-xs text-[10px] font-mono text-white/70">Software-Defined</span>
            </div>
          </div>

          {/* Card 3: Jamming Systems */}
          <div className="p-8 rounded-sm border border-white/10 bg-neutral-900/10 hover:bg-neutral-900/25 transition-all duration-300 flex flex-col justify-between min-h-[320px]">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <span className="text-[#2e4321] text-xs font-mono tracking-wider">03 / JAMMING SYSTEMS</span>
                <span className="text-[10px] text-white/40 font-mono">ACTIVE DENIAL</span>
              </div>
              <h3 className="text-xl font-medium" style={{ fontFamily: INTER }}>Electromagnetic Signal Disruption</h3>
              <p className="text-white/60 text-xs md:text-sm leading-relaxed" style={{ fontFamily: INTER }}>
                Our jamming solutions neutralize hostile actions by disrupting critical communication channels, GPS navigation signals, and targeting radars. Using directed RF energy and smart noise/deception techniques, these systems isolate targets, render remote triggers useless, and force hostile UAS platforms into fail-safe modes without affecting friendly frequencies.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-6">
              <span className="px-2 py-1 bg-white/5 rounded-xs text-[10px] font-mono text-white/70">Directed RF Suppression</span>
              <span className="px-2 py-1 bg-white/5 rounded-xs text-[10px] font-mono text-white/70">GPS Spoofing Denial</span>
              <span className="px-2 py-1 bg-white/5 rounded-xs text-[10px] font-mono text-white/70">Smart Frequency Sweep</span>
            </div>
          </div>

          {/* Card 4: Detection Systems */}
          <div className="p-8 rounded-sm border border-white/10 bg-neutral-900/10 hover:bg-neutral-900/25 transition-all duration-300 flex flex-col justify-between min-h-[320px]">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <span className="text-[#2e4321] text-xs font-mono tracking-wider">04 / DETECTION SYSTEMS</span>
                <span className="text-[10px] text-white/40 font-mono">RF INTELLIGENCE</span>
              </div>
              <h3 className="text-xl font-medium" style={{ fontFamily: INTER }}>Passive Signals Detection & Auditing</h3>
              <p className="text-white/60 text-xs md:text-sm leading-relaxed" style={{ fontFamily: INTER }}>
                Passive RF detection systems monitor the airspace in complete radio silence, detecting and identifying incoming threats through their own emissions. Our systems intercept signal patterns, map local radar footprints, and calculate the geolocation of emitters, providing early warning capabilities against aircraft, missiles, and UAS.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-6">
              <span className="px-2 py-1 bg-white/5 rounded-xs text-[10px] font-mono text-white/70">SIGINT Gathering</span>
              <span className="px-2 py-1 bg-white/5 rounded-xs text-[10px] font-mono text-white/70">TDOA Emitter Tracking</span>
              <span className="px-2 py-1 bg-white/5 rounded-xs text-[10px] font-mono text-white/70">Zero-Emission Scan</span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Pillars Section */}
      <section className="w-full py-24 px-9 bg-[#111213] border-t border-b border-white/10 relative z-10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left: Tab Selectors */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div className="flex flex-col gap-4">
              <span className="text-[11px] tracking-[2px] text-white/40 uppercase font-semibold">Strategic EW Framework</span>
              <h2 className="text-3xl md:text-4xl tracking-tight" style={{ fontFamily: INTER, fontWeight: 300 }}>
                The Three Pillars of Spectrum Control
              </h2>
            </div>
            
            <div className="flex flex-col gap-3.5 mt-8">
              {pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  onClick={() => setActivePillar(idx)}
                  className={`p-5 rounded-sm border cursor-pointer transition-all duration-300 ${
                    activePillar === idx
                      ? "bg-[#2e4321]/15 border-[#2e4321] text-white"
                      : "bg-transparent border-white/5 text-white/60 hover:border-white/15 hover:text-white"
                  }`}
                >
                  <span className="text-[10px] font-mono tracking-widest text-[#2e4321] block mb-1">0{idx + 1} / CAPABILITY</span>
                  <p className="font-semibold text-lg" style={{ fontFamily: INTER }}>{pillar.title}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Content panel */}
          <div className="lg:col-span-7 flex flex-col justify-center bg-black/40 border border-white/10 rounded-sm p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-4 right-4 text-[9px] font-mono text-white/20 select-none">
              SECURE LOG: NOMINAL
            </div>
            <div className="flex flex-col gap-6">
              <span className="text-[#2e4321] text-[11px] tracking-[3px] uppercase font-bold">Pillar Details</span>
              <h3 className="text-2xl md:text-3xl font-normal" style={{ fontFamily: INTER, fontWeight: 300 }}>
                {pillars[activePillar].title}
              </h3>
              <p className="text-[#2e4321] text-xs font-semibold uppercase tracking-wider -mt-3">
                {pillars[activePillar].subtitle}
              </p>
              <p className="text-white/70 text-sm md:text-base leading-relaxed" style={{ fontFamily: INTER }}>
                {pillars[activePillar].desc}
              </p>

              <div className="border-t border-white/10 pt-6 mt-4 flex flex-col gap-3">
                <span className="text-[10px] font-mono tracking-wider text-white/40 uppercase">Key Technical Functions</span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs font-mono text-white/80">
                  {pillars[activePillar].metrics.map((metric, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="text-[#2e4321] font-bold">›</span>
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Technical Standards Table Section */}
      <section className="w-full py-24 px-9 max-w-[1400px] mx-auto flex flex-col gap-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto flex flex-col gap-3">
          <span className="text-[11px] tracking-[2px] text-white/40 uppercase font-semibold">Engineering Standards</span>
          <h2 className="text-3xl md:text-4xl tracking-tight" style={{ fontFamily: INTER, fontWeight: 300 }}>
            Operational Standards & Specifications
          </h2>
        </div>

        <div className="w-full overflow-x-auto border border-white/10 rounded-sm bg-neutral-900/10">
          <table className="w-full border-collapse text-left text-xs md:text-sm font-mono min-w-[700px]">
            <thead>
              <tr className="border-b border-white/10 bg-white/5 text-white/60">
                <th className="p-4 md:p-6 font-semibold uppercase tracking-wider">Parameter</th>
                <th className="p-4 md:p-6 font-semibold uppercase tracking-wider">Specification</th>
                <th className="p-4 md:p-6 font-semibold uppercase tracking-wider">Operational Advantage</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="p-4 md:p-6 text-white font-medium">Frequency Range</td>
                <td className="p-4 md:p-6 text-white/80">100 MHz – 40 GHz (HF to Ka-band)</td>
                <td className="p-4 md:p-6 text-white/60">Full-spectrum coverage, enabling tracking and jamming across all modern tactical threats.</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="p-4 md:p-6 text-white font-medium">Processing Latency</td>
                <td className="p-4 md:p-6 text-white/80">&lt; 1.5 milliseconds</td>
                <td className="p-4 md:p-6 text-white/60">Sub-millisecond Edge AI signal classification, initiating counter-measures at speed-of-light.</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="p-4 md:p-6 text-white font-medium">Interoperability</td>
                <td className="p-4 md:p-6 text-white/80">NATO Integrated, Link 16, Joint Tactical System Integration</td>
                <td className="p-4 md:p-6 text-white/60">Seamless coordination with multi-service assets, sharing sensor feeds and jamming profiles.</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="p-4 md:p-6 text-white font-medium">Spectrum Agility</td>
                <td className="p-4 md:p-6 text-white/80">Dynamic Cognitive frequency hopping (&gt; 5,000 hops/sec)</td>
                <td className="p-4 md:p-6 text-white/60">Maintains secure, reliable links and sensor operations even in contested environments.</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-4 md:p-6 text-white font-medium">Form Factor & Deployment</td>
                <td className="p-4 md:p-6 text-white/80">Modular payload architecture (Land, Air, and Maritime)</td>
                <td className="p-4 md:p-6 text-white/60">Rapidly integrates with mobile military hardware, tactical vehicles, and unmanned platforms.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-24 px-9 border-t border-white/10 bg-radial-[circle_at_center,rgba(46,67,33,0.1)_0%,transparent_75%] relative z-10 text-center">
        <div className="max-w-[700px] mx-auto flex flex-col gap-6 items-center">
          <h2 className="text-3xl md:text-4xl tracking-tight text-center" style={{ fontFamily: INTER, fontWeight: 300 }}>
            Engage Our EW Systems Engineering Team
          </h2>
          <p className="text-white/60 text-sm md:text-base leading-relaxed text-center" style={{ fontFamily: INTER }}>
            For defense organizations seeking spectrum superiority, Sahana Defence delivers custom software-defined solutions tailored to your tactical environment.
          </p>
          <a
            href="#"
            className="mt-4 inline-flex items-center gap-3 bg-white text-black text-xs font-semibold uppercase tracking-wider py-4 px-8 rounded-sm hover:bg-[#2e4321] hover:text-white transition-all duration-300"
            style={{ fontFamily: INTER }}
          >
            Request Consult
            <MiniArrow color="currentColor" />
          </a>
        </div>
      </section>
    </div>
  );
}



// ——— HANDHELD JAMMER PAGE ————————————————————————————————————————————————————————————————————

function HandheldJammerPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const bentoGridRef = useRef<HTMLDivElement>(null);
  const rangeRef = useRef<HTMLSpanElement>(null);
  const powerRef = useRef<HTMLSpanElement>(null);
  const dimsRef = useRef<HTMLSpanElement>(null);
  const appsContainerRef = useRef<HTMLDivElement>(null);
  const appsScrollRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Hero Section Timeline
      const tl = gsap.timeline();
      tl.fromTo(heroRef.current?.querySelectorAll('.hero-anim'), 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out' }
      );
      tl.fromTo(statsRef.current?.querySelectorAll('.stat-item'),
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: 'power2.out' },
        "-=0.5"
      );

      // 2. Parallax Video
      if (videoRef.current) {
        gsap.to(videoRef.current, {
          yPercent: 30,
          ease: "none",
          scrollTrigger: {
            trigger: videoRef.current.parentElement,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      }

      // 3. Bento Grid Stagger
      if (bentoGridRef.current) {
        const cards = bentoGridRef.current.querySelectorAll('.bento-card');
        gsap.fromTo(cards,
          { y: 50, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power2.out",
            scrollTrigger: {
              trigger: bentoGridRef.current,
              start: "top 80%"
            }
          }
        );
      }

      // 4. Number Counters in Specs
      const animateCounter = (ref: React.RefObject<HTMLElement | null>, target: number) => {
        if (!ref.current) return;
        gsap.fromTo(ref.current, 
          { innerHTML: 0 }, 
          { 
            innerHTML: target, 
            duration: 2, 
            snap: { innerHTML: 1 },
            scrollTrigger: {
              trigger: ref.current,
              start: "top 90%",
              once: true
            }
          }
        );
      };
      
      animateCounter(rangeRef, 2000);
      animateCounter(powerRef, 60);
      animateCounter(dimsRef, 585);
      
      // 5. Horizontal Scroll Operational Applications
      const apps = appsScrollRef.current;
      if (apps && appsContainerRef.current) {
        const scrollWidth = apps.scrollWidth - window.innerWidth;
        gsap.to(apps, {
          x: -scrollWidth,
          ease: "none",
          scrollTrigger: {
            trigger: appsContainerRef.current,
            start: "top top",
            end: () => "+=" + scrollWidth,
            scrub: 1,
            pin: true,
            anticipatePin: 1
          }
        });
      }

    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full min-h-screen bg-black text-white selection:bg-[#2e4321] selection:text-white" style={{ fontFamily: INTER }}>
      {/* 1. HERO SECTION — FPV scroll-linked canvas sequence */}
      <FpvCanvasHero heroRef={heroRef} statsRef={statsRef} />

      {/* 2. CINEMATIC VIDEO SHOWCASE */}
      <section className="relative w-full py-24 px-9 border-t border-white/10 overflow-hidden bg-[#050505]">
        <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-12 text-center max-w-[600px]">
            Zero-Delay Engagement Loop.
          </h2>
          <div className="w-full max-w-[1200px] aspect-video relative rounded-sm overflow-hidden bg-black flex items-center justify-center border-y border-white/10">
            <video 
              ref={videoRef}
              src={heroVideo} 
              autoPlay 
              loop 
              muted 
              playsInline
              className="absolute inset-0 w-full h-[140%] object-cover opacity-70 top-[-20%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-md cursor-pointer hover:bg-white hover:text-black transition-all">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                 <path d="M8 5V19L19 12L8 5Z" />
               </svg>
            </div>
          </div>
          <p className="mt-8 text-white/70 text-sm max-w-[800px] text-center leading-relaxed font-light border-l-2 border-[#2e4321] pl-6 ml-4">
            Eliminates complex calibration steps; operators simply power up, track the target, and pull the trigger to disable hostile commercial drones instantly.
          </p>
        </div>
      </section>

      {/* 3. MISSION OVERVIEW & VALUE PROPOSITION */}
      <section className="relative w-full py-24 px-9 bg-black border-t border-white/10">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight leading-[1.1]">
              Mobile Electronic Shielding<br/>for Tactical Squads.
            </h2>
            <div className="w-12 h-[2px] bg-[#2e4321] my-2" />
            <p className="text-white/70 text-lg leading-relaxed font-light">
              The INFINITY SPEAR is a state-of-the-art handheld Counter-Unmanned Aerial System (C-UAS) designed to combat adversarial misuse of commercial drones. Utilizing advanced high-power jamming technology, it neutralizes drone threats across multiple frequency bands.
            </p>
            <div className="mt-4 p-5 border-l border-[#2e4321] bg-[#2e4321]/10">
              <p className="text-white/90 text-sm font-medium">
                Empowers dismounted tactical squads with a highly mobile, standalone electronic shield without requiring secondary heavy battery packs or field vehicles.
              </p>
            </div>
          </div>
          <div className="relative w-full aspect-square md:aspect-[4/3] rounded-sm overflow-hidden border border-white/10 bg-[#050505]">
             <img src={spearCadBlueprintImg} alt="Infinity Spear CAD Breakdown" className="w-full h-full object-cover mix-blend-screen opacity-90" />
             <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
          </div>
        </div>
      </section>

      {/* 4. CORE CAPABILITIES (Bento-Box Grid) */}
      <section className="w-full py-24 px-9 border-t border-white/10 bg-[#030303] overflow-hidden relative">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-12 text-center">
            System Capabilities
          </h2>
          <div ref={bentoGridRef} className="grid md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bento-card p-8 md:p-12 border border-white/10 bg-black hover:border-white/30 transition-all duration-500 group relative overflow-hidden flex flex-col gap-6 min-h-[300px]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#2e4321]/10 rounded-bl-full group-hover:scale-150 transition-transform duration-700" />
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/50 transition-colors z-10">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <h3 className="text-white text-2xl font-medium z-10">Dual-Action Jamming</h3>
              <p className="text-white/60 text-base leading-relaxed font-light z-10">
                Employs dual-action jamming vectors that concurrently break pilot telemetry loops and take down GNSS positioning arrays, forcing a safe hover or automated descent.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bento-card p-8 md:p-12 border border-white/10 bg-black hover:border-white/30 transition-all duration-500 group relative overflow-hidden flex flex-col gap-6 min-h-[300px]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full group-hover:scale-150 transition-transform duration-700" />
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/50 transition-colors z-10">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 12h4l2-9 4 18 2-9h6"/></svg>
              </div>
              <h3 className="text-white text-2xl font-medium z-10">Frequency Customization</h3>
              <p className="text-white/60 text-base leading-relaxed font-light z-10">
                Advanced selector module with user-defined channel selection modes to prevent active interference with friendly local communications and team radios.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bento-card p-8 md:p-12 border border-white/10 bg-black hover:border-white/30 transition-all duration-500 group relative overflow-hidden flex flex-col gap-6 min-h-[300px]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full group-hover:scale-150 transition-transform duration-700" />
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/50 transition-colors z-10">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
              </div>
              <h3 className="text-white text-2xl font-medium z-10">Natural Ergonomics</h3>
              <p className="text-white/60 text-base leading-relaxed font-light z-10">
                Optimally counterbalanced rifle grip structure minimizes operator fatigue during sustained pointing arcs, enabling longer continuous operational engagement.
              </p>
            </div>
            {/* Card 4 */}
            <div className="bento-card p-8 md:p-12 border border-white/10 bg-black hover:border-white/30 transition-all duration-500 group relative overflow-hidden flex flex-col gap-6 min-h-[300px]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#2e4321]/10 rounded-bl-full group-hover:scale-150 transition-transform duration-700" />
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/50 transition-colors z-10">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
              </div>
              <h3 className="text-white text-2xl font-medium z-10">Intuitive Operation</h3>
              <p className="text-white/60 text-base leading-relaxed font-light z-10">
                Minimal training required; features a ruggedized tactical rifle-style stock design and an intuitive physical pull-trigger execution system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TECHNICAL SPECIFICATIONS (Strict Tabular Interface) */}
      <section className="w-full py-24 px-9 border-t border-white/10 bg-black">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-8">
            Technical Specifications
          </h2>
          
          <div className="border border-white/10 flex flex-col text-sm">
            {/* Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 p-5 border-b border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
              <div className="text-white/50 font-medium uppercase tracking-wider mb-2 md:mb-0">Total Output Power Density</div>
              <div className="text-white md:text-right font-medium"><span ref={powerRef} className="text-[#2e4321] text-lg font-bold">0</span> Watts</div>
            </div>
            {/* Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 p-5 border-b border-white/10 hover:bg-white/5 transition-colors">
              <div className="text-white/50 font-medium uppercase tracking-wider mb-2 md:mb-0">Operational Interception Range</div>
              <div className="text-white md:text-right font-medium">1500 meters to <span ref={rangeRef} className="text-[#2e4321] text-lg font-bold">0</span> meters</div>
            </div>
            {/* Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 p-5 border-b border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
              <div className="text-white/50 font-medium uppercase tracking-wider mb-2 md:mb-0">Disruption Mechanism</div>
              <div className="text-white md:text-right font-medium">High-power multi-band RF and GNSS directional signal saturation</div>
            </div>
            {/* Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 p-5 border-b border-white/10 hover:bg-white/5 transition-colors">
              <div className="text-white/50 font-medium uppercase tracking-wider mb-2 md:mb-0">System Dimensions (L x H x W)</div>
              <div className="text-white md:text-right font-medium"><span ref={dimsRef} className="text-[#2e4321] text-lg font-bold">0</span> mm x 90 mm x 275 mm</div>
            </div>
            {/* Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 p-5 border-b border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
              <div className="text-white/50 font-medium uppercase tracking-wider mb-2 md:mb-0">Frequency Capabilities</div>
              <div className="text-white md:text-right font-medium">Multiple bands supported with User-Defined Channel Selection</div>
            </div>
            {/* Note Row */}
            <div className="grid grid-cols-1 p-5 border-white/10">
              <div className="text-white/30 text-xs italic">
                * Note: Pending final data validation for precise operating frequency bands, total operational weight with/without batteries, continuous trigger runtime, operating temperature limits, and IP dust/water resistance ratings.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. OPERATIONAL APPLICATIONS (Horizontal Scroll) */}
      <section ref={appsContainerRef} className="w-full h-screen border-t border-white/10 bg-black overflow-hidden relative">
        <div className="absolute top-12 left-9 z-20">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-2 shadow-black drop-shadow-md">
            Operational Deployments
          </h2>
          <p className="text-white/60 font-light max-w-[400px]">Swipe to explore deployment frameworks.</p>
        </div>

        <div ref={appsScrollRef} className="flex h-full w-[300vw]">
          {/* Panel 1 */}
          <div className="w-[100vw] h-full relative flex items-center justify-center p-9">
             <img src={fieldImg} alt="Military & Border Patrol" className="absolute inset-0 w-full h-full object-cover opacity-40" />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80" />
             <div className="relative z-10 max-w-[600px] text-center">
               <span className="text-[#2e4321] text-xs font-bold uppercase tracking-[2px] mb-2 block">Tactical Infantry</span>
               <h3 className="text-4xl font-bold mb-4">Cross-Border Threat Deterrence</h3>
               <p className="text-xl text-white/80 font-light">Empowers dismounted infantry squads with instantaneous suppression of rogue reconnaissance and improvised weaponized drones, ensuring safe passage in hostile corridors.</p>
             </div>
          </div>
          {/* Panel 2 */}
          <div className="w-[100vw] h-full relative flex items-center justify-center p-9">
             <img src={infinitySpearImg} alt="Mobile Strike Units" className="absolute inset-0 w-full h-full object-cover opacity-40" />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80" />
             <div className="relative z-10 max-w-[600px] text-center">
               <span className="text-[#2e4321] text-xs font-bold uppercase tracking-[2px] mb-2 block">Rapid Response</span>
               <h3 className="text-4xl font-bold mb-4">Vehicle Strike Unit Defense</h3>
               <p className="text-xl text-white/80 font-light">Easily stored in mobile strike vehicles, the Infinity Spear allows rapid egress and deployment to intercept rogue payloads before they reach the convoy perimeter.</p>
             </div>
          </div>
          {/* Panel 3 */}
          <div className="w-[100vw] h-full relative flex items-center justify-center p-9">
             <img src={corporateHouse1} alt="Public Security & VIPs" className="absolute inset-0 w-full h-full object-cover opacity-40" />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80" />
             <div className="relative z-10 max-w-[600px] text-center">
               <span className="text-[#2e4321] text-xs font-bold uppercase tracking-[2px] mb-2 block">Urban Protection</span>
               <h3 className="text-4xl font-bold mb-4">Municipal Protection Operations</h3>
               <p className="text-xl text-white/80 font-light">Utilized for real-world municipal protection operations (e.g., the Ahmedabad Rath Yatra) and VIP close protection details, clearing airspace of unauthorized commercial drones instantly.</p>
             </div>
          </div>
        </div>
      </section>

      {/* 7. RESOURCES & SECURE DOWNLOADS */}
      <section className="w-full py-24 px-9 border-t border-white/10 bg-black">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-12 text-center">
            Resources & Downloads
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-[800px] mx-auto">
            <div className="p-6 border border-[#2e4321]/40 bg-[#2e4321]/5 hover:bg-[#2e4321]/10 transition-colors flex items-center justify-between group cursor-pointer">
              <div className="flex flex-col gap-1">
                <span className="text-white text-sm font-medium">Engineering Brochures & Tech Specs</span>
                <span className="text-[#2e4321] text-[11px] uppercase tracking-wider font-semibold">Locked Asset (Lead Capture)</span>
              </div>
              <div className="text-white/50 group-hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
            </div>
            
            <div className="p-6 border border-white/10 hover:border-white/30 transition-colors flex items-center justify-between group cursor-pointer bg-white/5">
              <div className="flex flex-col gap-1">
                <span className="text-white text-sm font-medium">User Operation Manuals</span>
                <span className="text-white/40 text-[11px] uppercase tracking-wider">Unlocked Asset / PDF</span>
              </div>
              <div className="text-white/50 group-hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA & CERTIFICATIONS */}
      <section className="w-full py-24 px-9 border-t border-white/10 bg-radial-[circle_at_bottom,rgba(46,67,33,0.15)_0%,transparent_60%] relative text-center overflow-hidden">
        <div className="max-w-[700px] mx-auto flex flex-col gap-6 items-center relative z-10">
          <h2 className="text-3xl md:text-5xl tracking-tight text-center text-white font-medium">
            Equip Your Strike Teams with Instant Airspace Control.
          </h2>
          <a
            href="#"
            className="mt-6 inline-flex items-center gap-3 bg-white text-black text-xs font-semibold uppercase tracking-wider py-4 px-12 rounded-sm hover:bg-[#2e4321] hover:text-white transition-all duration-300"
          >
            Secure Contact Form
          </a>
          
          <div className="mt-16 flex flex-wrap items-center justify-center gap-10 border-t border-white/10 pt-12 w-full">
            <div className="flex flex-col items-center gap-3 opacity-50">
               <div className="w-14 h-14 rounded-full border-2 border-white flex items-center justify-center font-bold text-sm tracking-widest text-center leading-[1]">
                 MIL<br/>STD
               </div>
               <span className="text-[10px] uppercase tracking-widest text-white/80 font-medium">810H (Pending)</span>
            </div>
            <div className="flex flex-col items-center gap-3 opacity-50">
               <div className="w-14 h-14 rounded-full border-2 border-white flex items-center justify-center font-bold text-sm tracking-widest">
                 RF
               </div>
               <span className="text-[10px] uppercase tracking-widest text-white/80 font-medium">Safety Emissions Cert.</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}







// â”€â”€â”€ HOME 2 PAGE (LUXURY CORPORATE AESTHETIC) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

// â”€â”€â”€ APP â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    // Allow the new page's DOM to settle and GSAP to initialize, then refresh
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <div className="w-full min-h-screen bg-black overflow-x-clip" style={{ fontFamily: INTER }}>
      <ScrollToTop />
      <Nav />
      {/* Push content below fixed nav */}
      <div className="pt-[86px]">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <div className="relative w-full z-0">
                <VisionSection />
                <ProductsSection />
              </div>
              <Arsenal1Section />
              <NewsSection />
              <EditorialSection />
            </>
          } />
          <Route path="/guardian-experience" element={<GuardianExperiencePage />} />
          <Route path="/sahana-fpv" element={<SahanaFpvProductPage />} />
          <Route path="/fpv-buddy" element={<FpvBuddyPage />} />
          <Route path="/varuna" element={<VarunaPage />} />
          <Route path="/proxy" element={<ProxyPage />} />
          <Route path="/infinity-spear" element={<InfinitySpearPage />} />
          <Route path="/infinity-rhino" element={<InfinityRhinoPage />} />
          <Route path="/infinity-rhino-black" element={<InfinityRhinoBlackPage />} />
          <Route path="/butterfly-adg" element={<ButterflyADGPage />} />
          <Route path="/rhino-gen-z23" element={<RhinoZ23Page />} />
          {/* <Route path="/electronic-warfare" element={<ElectronicWarfarePage />} /> */}
          <Route path="/rf-detector" element={<RFDetectorPage />} />
          <Route path="/drone-radar" element={<DroneRadarPage />} />
          <Route path="/surveillance-radar" element={<SurveillanceRadarPage />} />
          {/* <Route path="/handheld-jammer" element={<HandheldJammerPage />} /> */}
          <Route path="/osint" element={<OSINTPage />} />
          <Route path="/quantum-technology-solutions/quantum-sensing" element={<QuantumSensingPage />} />
          <Route path="/quantum-technology-solutions/quantum-communication" element={<QuantumCommunicationPage />} />
          <Route path="/information-warfare/intelligence-surveillance" element={<IntelligenceSurveillancePage />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}
