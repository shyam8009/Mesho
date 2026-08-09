import React, { useState, useEffect } from 'react';
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
import arsenalFacilityImg from "@/imports/arsenal_facility.jpg";
import haleDroneImg from "@/imports/hale_drone.jpg";
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
import drone3d1 from "@/imports/drone_3d_1.gif";
import spearSpecificImg from "@/imports/infinity-spear/magnific_professional-outdoor-prod_ohWj6xH829.png";
import rhinoSpecificImg from "@/imports/infinity-rhino/magnific_professional-outdoor-prod_iAS5beF3uK.png";
import butterflySpecificImg from "@/imports/butterfly-adg/magnific_professional-studio-produ_xgQveAGjfW.png";
import rhinoZ23SpecificImg from "@/imports/rhino-z23/magnific_img1-this-is-my-product-r_ONKji9qynm.png";
import guardianImg from "@/imports/guardian/magnific_professional-studio-produ_brfvUMF5Y2.png";
import rfDetectorD360Img from "@/imports/rf-detector-d360/magnific_professional-outdoor-prod_62g8z7SiJO.png";
import drone3d2 from "@/imports/drone_3d_2.gif";
import rfRadarGeneratedImg from "@/imports/rf_radar_generated.png";
import rfRadarHudImg from "@/imports/rf_radar_hud.png";
import droneRadarHeroImg from "@/imports/drone_radar_hero.png";
import c2DashboardUiImg from "@/imports/c2_dashboard_ui.png";
import surveillanceRadarHeroImg from "@/imports/surveillance_radar_hero.png";
import surveillanceBlueprintImg from "@/imports/surveillance_blueprint.png";
import spearCadBlueprintImg from "@/imports/spear_cad_blueprint.png";
import osintDashboardImg from "@/imports/osint/dashboard_ui.jpg";

export const CAPABILITIES_DATA = [
  {
    id: "electronic-warfare",
    title: "Electronic Warfare",
    description: "Spectrum dominance and electronic superiority solutions.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    highlights: ["Counter Drone Operations", "Radar Surveillance", "Electronic Attack", "Spectrum Dominance"],
    systems: [
      {
        id: "anti-drone",
        title: "Drone Systems",

        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
            <circle cx="8.5" cy="8.5" r="1.5"/>
            <circle cx="15.5" cy="8.5" r="1.5"/>
            <circle cx="8.5" cy="15.5" r="1.5"/>
            <circle cx="15.5" cy="15.5" r="1.5"/>
          </svg>
        ),
        spotlightImage: flightImg,
        stats: ["Real-time Detection", "Tracking & Classification", "Interception", "Counter Swarm"],
        applications: ["Border Security", "Military Bases", "Critical Infrastructure", "VIP Protection", "Counter-UAS Operations"],
        products: [
          { id: "fpv-buddy", title: "FPV Drone Buddy", image: flightImg, slug: "/fpv-buddy" },
          { id: "fpv-bullseye", title: "FPV Bullseye & Interceptor", image: heroImg, slug: "/sahana-fpv" },
          { id: "proxy", title: "PROXY - Control Channel", image: sensorDomeImg, slug: "/proxy" },
          { id: "heaven-sdr", title: "Heaven SDR - Surveillance Drone", image: fieldImg, slug: "/heaven-sdr-surveillance-drone" }
        ]
      },
      {
        id: "radar",
        title: "Radar Systems",

        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
        ),
        spotlightImage: droneRadarHeroImg,
        stats: ["360° Coverage", "AI Threat Analysis", "Multi-Target Tracking", "All-Weather Operability"],
        applications: ["Airspace Monitoring", "Border Surveillance", "Naval Defence", "Asset Protection"],
        products: [
          { id: "3d-drone-radar", title: "3D Drone Radar", image: droneRadarHeroImg, slug: "/drone-radar" },
          { id: "surveillance-radar", title: "Surveillance Radar", image: surveillanceRadarHeroImg, slug: "/surveillance-radar" },
        ]
      },
      {
        id: "jamming",
        title: "Jamming Systems",

        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M18 8c0 4.5-6 6-6 12"/>
            <path d="M12 20c-6-6-6-7.5-6-12"/>
            <circle cx="12" cy="5" r="3"/>
          </svg>
        ),
        spotlightImage: infinityRhinoImg,
        stats: ["Multi-Band Jamming", "Directional Disruption", "Man-Portable", "Vehicle Integrated"],
        applications: ["Convoy Protection", "Tactical Infantry Support", "Event Security", "Airspace Denial"],
        products: [
          { id: "spear", title: "Handheld Jammer (Infinity Spear)", image: spearSpecificImg, slug: "/infinity-spear" },
          { id: "rhino", title: "Manpack Jammer (Infinity Rhino)", image: rhinoSpecificImg, slug: "/infinity-rhino" },
          { id: "butterfly", title: "Butterfly ADG L70", image: butterflySpecificImg, slug: "/butterfly-adg" },
          { id: "z23", title: "Rhino Gen Z23", image: rhinoZ23SpecificImg, slug: "/rhino-gen-z23" },
          { id: "rhino-black", title: "Infinity Rhino Black", image: rhinoSpecificImg, slug: "/infinity-rhino-black" },
        ]
      },
      {
        id: "detection",
        title: "Detection Systems",

        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10"/>
            <circle cx="12" cy="12" r="6"/>
            <circle cx="12" cy="12" r="2"/>
          </svg>
        ),
        spotlightImage: rfDetectorImg,
        stats: ["Passive RF Sensing", "Acoustic Detection", "Optical Recognition", "Early Warning Alarms"],
        applications: ["Forward Operating Bases", "Border Outposts", "Critical Infrastructure", "Urban Warfare"],
        products: [
          { id: "guardian", title: "The Guardian Smart Soldier Band", image: guardianImg, slug: "/guardian-experience" },
          { id: "rf-detector", title: "RF Detector", image: rfDetectorD360Img, slug: "/rf-detector" },
          { id: "ground-surveillance-radar", title: "ground survaillance radar", image: surveillanceRadarHeroImg, slug: "/vsr-to-mrr" },
          { id: "3d-drone-rf-detector", title: "3D Drone RF Detector", image: rfDetectorD360Img, slug: "/3d-drone-detector" },
        ]
      },
      {
        id: "communication",
        title: "Communication System",

        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M4 11a9 9 0 0 1 9 9" />
            <path d="M4 4a16 16 0 0 1 16 16" />
            <circle cx="5" cy="19" r="1" />
          </svg>
        ),
        spotlightImage: c2DashboardUiImg,
        stats: ["Encrypted Links", "High Bandwidth", "Low Latency", "Anti-Jamming"],
        applications: ["Tactical Operations", "Command Centers", "Field Deployments", "Mobile Units"],
        products: [
          { id: "lorros", title: "lorros communication", image: c2DashboardUiImg, slug: "/lorros-communication" },
          { id: "guardian-comms", title: "The Guardian: Smart Soldier Band", image: guardianImg, slug: "/guardian-experience" },
        ]
      },
      {
        id: "electro-optics",
        title: "Electro Optics",

        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="3" />
            <path d="M21 12c-2.4 4 -5.4 6 -9 6s-6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6s6.6 2 9 6" />
          </svg>
        ),
        spotlightImage: sensorDomeImg,
        stats: ["Thermal Imaging", "Laser Rangefinding", "Day/Night Vision", "Target Tracking"],
        applications: ["Reconnaissance", "Target Acquisition", "Border Patrol", "Maritime Surveillance"],
        products: [
          { id: "hugo", title: "Hugo", image: sensorDomeImg, slug: "/hugo" },
          { id: "nubra", title: "Nubra", image: sensorDomeImg, slug: "/nubra" },
          { id: "salte", title: "Salte", image: sensorDomeImg, slug: "/salte" },
          { id: "oslo", title: "Oslo", image: sensorDomeImg, slug: "/oslo" },
          { id: "incas", title: "Incas", image: sensorDomeImg, slug: "/incas" },
          { id: "yoto", title: "Yoto", image: sensorDomeImg, slug: "/yoto" },
          { id: "troy", title: "Troy", image: sensorDomeImg, slug: "/troy" },
          { id: "alta", title: "Alta", image: sensorDomeImg, slug: "/alta" },
        ]
      }
    ]
  },
  {
    id: "information-warfare",
    title: "Information Warfare",
    description: "Intelligence-led operations for information superiority and security.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    highlights: ["Intelligence Collection", "Signal Monitoring", "Command & Control", "Situational Awareness"],
    systems: [
      {
        id: "intel-surv",
        title: "Intelligence & Surveillance",
        slug: "/information-warfare/intelligence-surveillance",

        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
            <circle cx="12" cy="12" r="3"/>
          </svg>
        ),
        spotlightImage: digitalTwinImg,
        stats: ["Real-time Analysis", "Deep Web Monitoring", "Predictive Alerts", "Secure Data Pipelines"],
        applications: ["Strategic Intelligence", "Threat Forecasting", "National Security", "Cyber Defense"],
        products: [
          { id: "osint", title: "Open-Source Intelligence (OSINT)", image: osintDashboardImg, slug: "/osint" },
          { id: "sigint", title: "Signal Intelligence", image: rfRadarHudImg, slug: "home" },
          { id: "security-assessment", title: "Comprehensive Security Assessment", image: innovation1, slug: "home" },
        ]
      },
      {
        id: "command-control",
        title: "Command & Control",

        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
            <line x1="8" y1="21" x2="16" y2="21"/>
            <line x1="12" y1="17" x2="12" y2="21"/>
          </svg>
        ),
        spotlightImage: c2DashboardUiImg,
        stats: ["Multi-Domain Fusion", "Automated Tasking", "Encrypted Comms", "Scalable Architecture"],
        applications: ["Joint Operations Centers", "Tactical Headquarters", "Disaster Response", "Fleet Management"],
        products: [
          { id: "fusion-core", title: "FUSION Core AI Command and Control (C2)", image: c2DashboardUiImg, slug: "home" },
          { id: "interception", title: "Interception System", image: rfRadarGeneratedImg, slug: "home" },
        ]
      },
      {
        id: "comms",
        title: "Communication & Monitoring",

        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M4 11a9 9 0 0 1 9 9"/>
            <path d="M4 4a16 16 0 0 1 16 16"/>
            <circle cx="5" cy="19" r="1"/>
          </svg>
        ),
        spotlightImage: rfRadarHudImg,
        stats: ["High Bandwidth", "Low Latency", "Anti-Jamming", "Spectrum Hopping"],
        applications: ["Battlefield Comms", "Covert Operations", "Signal Triangulation", "Radio Interception"],
        products: [
          { id: "radio-portfolio", title: "Radio Monitoring and Location Portfolio", image: rfRadarHudImg, slug: "home" },
          { id: "direction-finders", title: "Direction Finders", image: spearCadBlueprintImg, slug: "home" },
        ]
      }
    ]
  },
  {
    id: "quantum-technology-solutions",
    title: "Quantum Technology Solutions",
    description: "Next-generation quantum sensing, communication, and cryptography architectures.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2v20M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    highlights: ["Quantum Sensing", "Quantum Communication", "Post-Quantum Cryptography"],
    systems: [
      {
        id: "quantum-sensing",
        title: "Quantum Sensing",
        slug: "/quantum-technology-solutions/quantum-sensing",

        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 2v20M2 12h20"/>
            <circle cx="12" cy="12" r="4"/>
          </svg>
        ),
        spotlightImage: rfRadarGeneratedImg,
        stats: ["High Precision", "RF Detection", "Quantum Drones", "Atomic Clocks"],
        applications: ["Navigation", "Radar Systems", "Secure Timing", "Targeting"],
        products: [
          { id: "wideband-rf", title: "Wideband RF Detectors", image: rfRadarGeneratedImg, slug: "home" },
          { id: "quantum-microwave", title: "Quantum Microwave Devices", image: rfRadarHudImg, slug: "home" },
          { id: "rydberg-atom", title: "Rydberg Atom Quantum Sensors", image: innovation1, slug: "home" },
          { id: "quantum-drone", title: "Quantum Drone", image: drone3d1, slug: "home" },
          { id: "quantum-clock", title: "Quantum Clock Source", image: innovation3, slug: "home" },
        ]
      },
      {
        id: "quantum-communication",
        title: "Quantum Communication",
        slug: "/quantum-technology-solutions/quantum-communication",

        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <ellipse cx="12" cy="5" rx="9" ry="3"/>
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
          </svg>
        ),
        spotlightImage: c2DashboardUiImg,
        stats: ["Unhackable Links", "QKD", "Post-Quantum Security", "Global Reach"],
        applications: ["Secure Comms", "Financial Data", "Military Networks", "Command & Control"],
        products: [
          { id: "quantum-secured-comms", title: "Quantum Secured Communication", image: c2DashboardUiImg, slug: "home" },
          { id: "quantum-internet", title: "Quantum Internet", image: innovation4, slug: "home" },
          { id: "hardware-pqc", title: "Hardware based Post Quantum Cryptography", image: innovation5, slug: "home" },
          { id: "quantum-control", title: "Quantum Control Systems", image: osintDashboardImg, slug: "home" },
        ]
      }
    ]
  },
  {
    id: "aerospace",
    title: "Aerospace & Defence",
    description: "High-performance systems and components for aerospace and defence.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2l3 3h-6z"/>
        <path d="M9 5v8L4 18v2h16v-2l-5-5V5"/>
        <path d="M12 22v-4"/>
      </svg>
    ),
    highlights: ["Aerospace Engineering", "Defence Manufacturing", "SATCOM Systems", "Precision Components"],
    systems: [
      {
        id: "aero-components",
        title: "Manufacturing & Fabrication",

        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
          </svg>
        ),
        spotlightImage: arsenalFacilityImg,
        stats: ["Mil-Spec Grade", "Advanced Materials", "Rapid Prototyping", "Scalable Production"],
        applications: ["Aircraft Assembly", "Munitions Casings", "Satellite Integration", "Naval Upgrades"],
        products: [
          { id: "aerospace-comp", title: "Aerospace Components", image: arsenalFacilityImg, slug: "home" },
          { id: "defence-comp", title: "Defence Components", image: corporateHouse1, slug: "home" },
          { id: "satcom", title: "SATCOM Components", image: haleDroneImg, slug: "home" }
        ]
      }
    ]
  },
  {
    id: "defence-deeptech",
    title: "Defence Deeptech",
    description: "Advanced technologies driving the future of defence.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1v3h3v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1h-3v3h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h1v-3H9v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1h3v-3H9v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1h3V6h-1a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2z"/>
      </svg>
    ),
    highlights: ["Artificial Intelligence", "Big Data Analytics", "Cloud Infrastructure", "IoT Networks"],
    systems: [
      {
        id: "ai-data",
        title: "AI & Data",

        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
        ),
        spotlightImage: innovation4,
        stats: ["Neural Networks", "Predictive Analytics", "Natural Language", "Computer Vision"],
        applications: ["Automated Targeting", "Logistics Prediction", "Cyber Threat Detection", "Autonomous Navigation"],
        products: [
          { id: "chatbots", title: "Chatbots and Voice Solution", image: innovation5, slug: "home" },
          { id: "big-data", title: "Big Data and Business Intelligence", image: innovation3, slug: "home" },
          { id: "ai", title: "Artificial Intelligence", image: innovation4, slug: "home" },
        ]
      },
      {
        id: "connectivity",
        title: "Connectivity & Infrastructure",

        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <ellipse cx="12" cy="5" rx="9" ry="3"/>
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
          </svg>
        ),
        spotlightImage: corporateHouse2,
        stats: ["Secure Cloud", "Mesh Networks", "Low-Latency Video", "Redundant Systems"],
        applications: ["Base Infrastructure", "Drone Telemetry", "Live Video Feeds", "Sensor Networks"],
        products: [
          { id: "iot", title: "Internet of Things", image: corporateHouse3, slug: "home" },
          { id: "cloud", title: "Cloud Services", image: corporateHouse1, slug: "home" },
          { id: "video", title: "Video Streaming Services", image: corporateHouse2, slug: "home" },
        ]
      }
    ]
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

// CapabilitiesMegaMenu Component
function CapabilitiesMegaMenu({ onNavigate }: { onNavigate: (page: any) => void }) {
  const [activeDomain, setActiveDomain] = useState(CAPABILITIES_DATA[0]);
  const [activeSystem, setActiveSystem] = useState(CAPABILITIES_DATA[0].systems[0]);

  // Update active system when domain changes
  useEffect(() => {
    setActiveSystem(activeDomain.systems[0]);
  }, [activeDomain]);

  return (
    <div className="max-w-[1600px] w-full mx-auto bg-[#05080D] border-t border-white/10 shadow-2xl flex flex-col h-[750px] overflow-hidden"
         style={{ borderTop: "1px solid rgba(0,229,255,0.15)" }}>
      {/* 4-Column Layout */}
      <div className="flex-1 flex text-white relative">
        
        {/* COLUMN 1: DOMAINS */}
        <div className="w-[300px] border-r border-white/5 flex flex-col p-6 gap-3 overflow-y-auto">
          {CAPABILITIES_DATA.map((domain) => {
            const isActive = activeDomain.id === domain.id;
            return (
              <div 
                key={domain.id}
                onMouseEnter={() => setActiveDomain(domain)}
                className={`flex items-start gap-4 p-4 rounded-md cursor-pointer transition-all duration-300 ${isActive ? "bg-white/5 border border-[rgba(0,229,255,0.3)] shadow-[0_0_15px_rgba(0,229,255,0.1)]" : "border border-transparent hover:bg-white/5"}`}
              >
                <div className={`mt-1 ${isActive ? "text-[#3C5929]" : "text-white/60"}`}>
                  {domain.icon}
                </div>
                <div>
                  <h3 className={`font-bold text-[15px] mb-1 ${isActive ? "text-white" : "text-white/80"}`}>{domain.title}</h3>
                  <p className="text-[12px] text-white/50 leading-snug mb-3">{domain.description}</p>
                  <div className="flex items-center gap-3 text-[10px] font-bold tracking-wider uppercase">
                    <span className="text-[#3C5929]">{domain.systems.length} SYSTEMS</span>
                    <span className="text-white/40">â€¢</span>
                    <span className="text-white/40">{domain.systems.reduce((acc, sys) => acc + sys.products.length, 0)} PRODUCTS</span>
                  </div>
                </div>
                {isActive && <div className="absolute right-6 mt-1 text-[#3C5929] opacity-50"><MiniArrow color="#3C5929" /></div>}
              </div>
            );
          })}
        </div>

        {/* COLUMN 2: SYSTEMS */}
        <div className="w-[320px] border-r border-white/5 p-6 bg-black/20 flex flex-col overflow-y-auto">
          <h4 className="text-[11px] font-bold tracking-[2px] uppercase text-[#3C5929] mb-6">SYSTEMS</h4>
          <div className="flex flex-col gap-2">
            {activeDomain.systems.map((system) => {
              const isActive = activeSystem.id === system.id;
              return (
                <div 
                  key={system.id}
                  onMouseEnter={() => setActiveSystem(system)}
                  onClick={() => {
                    // Navigate if the system has a dedicated slug
                    // @ts-ignore
                    if (onNavigate && system.slug) onNavigate(system.slug);
                  }}
                  className={`flex items-center gap-4 p-4 rounded-md cursor-pointer transition-all duration-300 ${isActive ? "bg-white/10" : "hover:bg-white/5"}`}
                >
                  <div className={`${isActive ? "text-[#3C5929]" : "text-white/40"}`}>
                    {system.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-bold text-[14px] mb-1 ${isActive ? "text-white" : "text-white/80"}`}>{system.title}</h3>
                    <p className="text-[12px] text-white/50 leading-snug">{system.description}</p>
                  </div>
                  {isActive && <div className="text-[#3C5929]"><MiniArrow color="#3C5929" /></div>}
                </div>
              );
            })}
          </div>
        </div>

        {/* COLUMN 3: SPOTLIGHT + PRODUCTS */}
        <div className="flex-1 border-r border-white/5 p-8 flex flex-col overflow-y-auto custom-scrollbar">
          <span className="text-[11px] font-bold tracking-[2px] uppercase text-white/40 mb-2">{activeDomain.title}</span>
          <h2 
            className="text-[28px] font-bold text-white mb-2 cursor-pointer hover:text-[#3C5929] transition-colors inline-block w-fit"
            onClick={() => {
              // @ts-ignore
              if (onNavigate && activeSystem.slug) onNavigate(activeSystem.slug);
            }}
          >
            {activeSystem.title}
          </h2>
          <p className="text-[14px] text-white/60 mb-6 max-w-[90%] leading-relaxed">{activeSystem.description}</p>
          
          <div className="relative w-full h-[220px] rounded-md overflow-hidden mb-8 border border-white/10">
            <img src={activeSystem.spotlightImage} alt={activeSystem.title} className="w-full h-full object-cover opacity-80 mix-blend-screen" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#05080D] via-transparent to-transparent opacity-80" />
            
            {/* Quick Stats Overlay */}
            <div className="absolute bottom-4 left-4 right-4 flex gap-4">
              {activeSystem.stats.slice(0,3).map(stat => (
                <div key={stat} className="text-[11px] uppercase tracking-wider font-bold text-white/80 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded border border-white/10">
                  {stat}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {/* Applications */}
            <div>
              <h4 className="text-[11px] font-bold tracking-[2px] uppercase text-[#3C5929] mb-4">APPLICATIONS</h4>
              <div className="flex flex-col gap-2">
                {activeSystem.applications.map((app, idx) => (
                  <div key={idx} className="text-[13px] text-white/70 flex items-center gap-2">
                    <div className="w-1 h-1 bg-[#3C5929]/50 rounded-full" />
                    {app}
                  </div>
                ))}
              </div>
            </div>

            {/* Products */}
            <div>
              <h4 className="text-[11px] font-bold tracking-[2px] uppercase text-[#3C5929] mb-4">PRODUCTS</h4>
              <div className="flex flex-col gap-3">
                {activeSystem.products.map((product) => (
                  <div 
                    key={product.id} 
                    className="group flex items-center gap-3 cursor-pointer"
                    onClick={() => {
                      if (onNavigate) onNavigate(product.slug);
                    }}
                  >
                    <div className="w-[40px] h-[40px] rounded overflow-hidden border border-white/10 shrink-0">
                      <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <span className="text-[13px] text-white/80 group-hover:text-white transition-colors">{product.title}</span>
                    <div className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ml-auto">
                      <MiniArrow color="#3C5929" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* COLUMN 4: KEY CAPABILITIES */}
        <div className="w-[300px] p-6 bg-[#030508] flex flex-col justify-between overflow-y-auto">
          <div>
            <h4 className="text-[11px] font-bold tracking-[2px] uppercase text-[#3C5929] mb-6">KEY CAPABILITIES</h4>
            <div className="flex flex-col gap-6">
              {activeDomain.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="mt-0.5 text-[#3C5929]/70">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="10" />
                      <circle cx="12" cy="12" r="4" />
                      <path d="M12 2v2M12 20v2M2 12h2M20 12h2" opacity="0.5"/>
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-[13px] font-bold text-white mb-1">{highlight}</h5>
                    <p className="text-[11px] text-white/40 leading-snug">Advanced integration for full-spectrum operational capability.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div 
            className="mt-8 border border-[rgba(0,229,255,0.2)] bg-[rgba(0,229,255,0.03)] p-5 rounded-md cursor-pointer hover:bg-[rgba(0,229,255,0.06)] transition-colors group"
            onClick={() => {
               // @ts-ignore
               if (onNavigate) onNavigate(activeSystem.slug || activeSystem.products[0]?.slug || 'home');
            }}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="text-[#3C5929]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
              </div>
              <div className="transform group-hover:translate-x-1 transition-transform">
                <MiniArrow color="#3C5929" />
              </div>
            </div>
            <h5 className="text-[14px] font-bold text-white mb-1">Explore {activeSystem.title}</h5>
            <p className="text-[11px] text-white/50">View all solutions, products and use cases.</p>
          </div>
        </div>
      </div>

      {/* BOTTOM TRUST BAR */}
      <div className="h-[80px] border-t border-white/5 bg-[#030406] flex items-center justify-between px-8">
        {TRUST_BAR_DATA.map((item, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <div className="text-[#3C5929]/80">
              {item.icon}
            </div>
            <div>
              <h5 className="text-[12px] font-bold text-white uppercase tracking-wider">{item.title}</h5>
              <p className="text-[11px] text-white/50">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
