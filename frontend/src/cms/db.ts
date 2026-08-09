import qsHeroBg from '@/imports/global_threat_map.jpg';
// I will import all images needed for the 5 ecosystem pages
import qsRfd from '@/imports/quantum_rfd_detect.jpg';
import qsMicrowave from '@/imports/innovation_2.jpg';
import qsRydberg from '@/imports/rydberg_sensor_macro.jpg';
import qsDrone from '@/imports/quantum_stealth_drone.jpg';
import qsClock from '@/imports/quantum_atomic_clock.jpg';

import qcHeroBg from '@/imports/quantum_hero_bg.jpg';
import qcQkd from '@/imports/qkd_terminal.jpg';
import qcNetwork from '@/imports/quantum_network_nodes.jpg';
import qcCrypto from '@/imports/quantum_crypto_chip.jpg';
import qcSoftware from '@/imports/quantum_control_software.jpg';
import qcSchematic from '@/imports/unified_quantum_schematic.jpg';

import isHeroBg from '@/imports/intel_hero_bg.jpg';
import isOsint from '@/imports/osint_dashboard.jpg';
import isSigint from '@/imports/sigint_arrays.jpg';
import isSecurity from '@/imports/security_assessment_twin.jpg';
import isGrid from '@/imports/digital_node_map.jpg';

import c2HeroBg from '@/imports/c2_hero_bg.jpg';
import c2Fusion from '@/imports/c2_dashboard_ui.png';
import c2Interception from '@/imports/interception_ui.jpg';
import c2Schematic from '@/imports/c2_network_schematic.jpg';

import cmHeroBg from '@/imports/comms_hero_bg.jpg';
import cmRadio from '@/imports/radio_monitoring_portfolio.jpg';
import cmDirection from '@/imports/direction_finders_system.jpg';
import cmSchematic from '@/imports/comms_network_schematic.jpg';

export const cmsDb = {
  "quantum-technology-solutions": {
    "quantum-sensing": {
      title: "Quantum Sensing Systems | Sovereign Dynamics",
      metaDesc: "Next-generation quantum sensing...",
      hero: {
        bg: qsHeroBg,
        eyebrow: "Quantum Technology Solutions",
        h1: "QUANTUM SENSING",
        subheadline: "Sensing built on quantum principles, engineered for a sensitivity classical hardware can't reach.",
        intro: "From RF detection to atomic clocks, this is the measurement layer for India's aerospace and defence programmes.",
        ctaText: "Explore Quantum Sensors"
      },
      ecosystem: {
        bgImage: qsHeroBg, // Uses same bg for schematic
        headerTitle: "The Quantum Ecosystem",
        introTag: "Quantum Advantage",
        introH2: "The Quantum Ecosystem",
        introDesc: "A complete suite of sovereign quantum hardware, from wideband RF detectors to atomic clocks.",
        cards: [
          {
            tag: "RFD1 · RG-QD · RF-Model / HVN S4",
            title: "Wideband RF Detectors",
            description: "Detection hardware built for the full RF spectrum...",
            statusBadge: "DEFENCE GRADE · ACTIVE",
            freqRange: "100 MHz – 40 GHz",
            specs: ["Broadband detection across RF/MW frequencies", "Configurable for thru-wall RADAR and SIGINT", "Zero foreign dependency in the critical path", "Noise figure: < 2 dB across full band", "MIL-STD-810H environmental qualification", "Indigenous signal processing architecture"],
            img: qsRfd
          },
          {
            tag: "TWPAs · HEMT Amps · IQ Mixers",
            title: "Quantum Microwave Devices",
            description: "The amplification and signal-conditioning layer quantum systems run on.",
            statusBadge: "CRYOGENIC CAPABLE",
            freqRange: "4K – 300K Operating",
            specs: ["TWPAs for near-quantum-limited amplification", "HEMT amplifiers for low-noise RF/MW gain", "IQ mixer spurious rejection: > 25 dBc", "Operating temperature: 4K – 300K", "Custom filter design & fabrication", "Cryogenic RF/MW design expertise"],
            img: qsMicrowave
          },
          {
            tag: "Atomic-Precision Sensing",
            title: "Rydberg Atom Sensors",
            description: "Atomic-precision sensing for environments where classical RF sensors fall short.",
            statusBadge: "QUANTUM ACTIVE",
            freqRange: "DC – 100+ GHz",
            specs: ["Ultra-high sensitivity EM field detection", "Self-calibrating atomic reference standard", "No antenna required — atom-based reception", "Frequency agile: DC to 100+ GHz", "Applications in SIGINT and secure sensing", "Bridges quantum theory & defence deployment"],
            img: qsRydberg
          },
          {
            tag: "DaaS / Mission Scale",
            title: "Quantum Drone",
            description: "Quantum-enabled drone systems built for contested and GPS-denied environments.",
            statusBadge: "MISSION READY",
            freqRange: "GPS-Denied Nav",
            specs: ["Drone-as-a-Service (DaaS) flexible deployment", "Onboard quantum sensing for GPS-denied nav", "Quantum-enhanced INS for autonomous flight", "Encrypted quantum key distribution payload", "Multi-spectral sensing integration", "Engineered for aerospace operational realities"],
            img: qsDrone
          },
          {
            tag: "Quantum Limit Precision",
            title: "Quantum Clock Source",
            description: "Precision timing at the quantum limit.",
            statusBadge: "SOVEREIGN TIMING",
            freqRange: "Allan Dev < 1×10⁻¹²",
            specs: ["Quantum-grade frequency stability", "Enables sovereign, GPS-independent timing", "Allan deviation: < 1×10⁻¹² @ 1s", "Holdover: < 1 μs over 24 hours", "Supports distributed network synchronisation", "Ruggedised for field deployment"],
            img: qsClock
          }
        ]
      },
      ctaBlock: {
        headline: "Define the next generation of aerospace and defence measurement.",
        btnText: "Contact Quantum Division",
        linkText: "Download Technical Specifications"
      }
    },
    "quantum-communication": {
      title: "Quantum Communication Systems | Sovereign Dynamics",
      metaDesc: "Next-generation quantum communication...",
      hero: {
        bg: qcHeroBg,
        eyebrow: "Quantum Technology Solutions",
        h1: "QUANTUM COMMUNICATION",
        subheadline: "Unbreakable encryption. Sovereign secure networks.",
        intro: "From fiber to drone relays, this is the communication layer for India's secure infrastructure.",
        ctaText: "Explore Secure Channels"
      },
      ecosystem: {
        bgImage: qcSchematic,
        headerTitle: "The Quantum Communication Ecosystem",
        introTag: "Secure Communication",
        introH2: "Communication Ecosystem",
        introDesc: "A complete suite of sovereign quantum communication hardware.",
        cards: [
          {
            tag: "QKD-Fibre . Drone-Relay Architectures",
            title: "Quantum Secured Communication",
            description: "Military-grade encryption for operations that can't afford to be broken.",
            specs: ["QKD-Fibre for point-to-point quantum key distribution.", "Drone-Relay architectures extending secure quantum links across contested terrain.", "Over 2Gbps QRNG throughput.", "Military-grade encryption built for high-sensitivity operations."],
            img: qcQkd
          },
          {
            tag: "Distributed Network Architecture",
            title: "Quantum Internet",
            description: "The networking layer that connects quantum-secured nodes into a single, resilient infrastructure.",
            specs: ["Distributed quantum network architecture across multiple nodes.", "Extends secure communication beyond fibre to drone-relay and hybrid links.", "Foundation for battlefield-scale quantum networking.", "Built for resilience across contested and distributed operating environments."],
            img: qcNetwork
          },
          {
            tag: "Hardware-Level Security",
            title: "Hardware based Post Quantum Cryptography",
            description: "Cryptography engineered to withstand the quantum threat, at the hardware level.",
            specs: ["Hardware-enabled implementation for tamper-resistant security.", "Built for the post-quantum threat horizon facing classical encryption.", "Secures data at rest and in transit across sensitive systems.", "Deployable alongside existing communication and control infrastructure."],
            img: qcCrypto
          },
          {
            tag: "Board Support Packages . APIs",
            title: "Quantum Control Systems",
            description: "The control and software layer that makes quantum hardware usable in the field.",
            specs: ["Hardware-agnostic Board Support Packages (BSPs).", "Standardised APIs for device drivers, middleware, and developer tools.", "Reduces integration friction across vendors and platforms.", "Built for faster time-to-mission across quantum and RF/MW systems."],
            img: qcSoftware
          }
        ]
      },
      ctaBlock: {
        headline: "Secure your operational communication infrastructure today.",
        btnText: "Contact Quantum Comm Division",
        linkText: "Request Security Audit"
      }
    }
  },
  "information-warfare": {
    "intelligence-surveillance": {
      title: "Intelligence & Surveillance Systems | Sovereign Dynamics",
      metaDesc: "Next-generation Intelligence and Surveillance systems.",
      hero: {
        bg: isHeroBg,
        eyebrow: "Information Warfare",
        h1: "Intelligence & Surveillance",
        subheadline: "Absolute informational dominance. From deep-web data extraction to invisible spectrum monitoring.",
        intro: "",
        ctaText: "Deploy Surveillance Assets"
      },
      ecosystem: {
        bgImage: isGrid,
        headerTitle: "",
        introTag: "Threat Intelligence",
        introH2: "Threat Intelligence Ecosystem",
        introDesc: "A unified architecture encompassing OSINT, SIGINT, and rigorous vulnerability assessments.",
        cards: [
          {
            tag: "AI Analytics . Darknet Extraction",
            title: "Open-Source Intelligence (OSINT)",
            description: "An advanced, AI-powered intelligence platform that automates multi-source data extraction.",
            specs: ["Simultaneously draws live data feeds from standard web channels, public blockchains, and deep Dark Web marketplaces.", "Powered by a rich backend combining over 1000 advanced algorithmic search methods.", "Integrates machine-learning-driven facial recognition to match individuals within visual contents effortlessly.", "Built on secure anonymity architecture that completely shields the user's IP and digital signatures."],
            img: isOsint
          },
          {
            tag: "Electronic Intercept . Spectrum Dominance",
            title: "Signal Intelligence (SIGINT)",
            description: "Invisible exploitation of the electromagnetic spectrum.",
            specs: ["Continuous monitoring and interception across wideband communication networks and encrypted channels.", "Precision direction-finding (DF) to geolocate hostile emitters and command nodes.", "Advanced modulation recognition and signal classification powered by machine learning algorithms.", "Rapid deployment form factors ranging from fixed infrastructure to mobile tactical units."],
            img: isSigint
          },
          {
            tag: "Threat Mapping . Vulnerability Audits",
            title: "Comprehensive Security Assessment",
            description: "A holistic, multi-vector evaluation of physical and digital security postures.",
            specs: ["Full-spectrum red-teaming encompassing physical perimeter breaches and cyber intrusion testing.", "Detailed risk matrix generation mapping internal and external threat vectors.", "Compliance and resilience benchmarking against global defense and intelligence standards.", "Actionable mitigation roadmaps to harden infrastructure and eliminate blind spots."],
            img: isSecurity
          }
        ]
      },
      ctaBlock: {
        headline: "Achieve absolute informational dominance across all domains.",
        btnText: "Contact Info Warfare Division",
        linkText: "Request a Threat Assessment Consultation"
      }
    },
    "command-control": {
      title: "Command & Control Systems | Sovereign Dynamics",
      metaDesc: "Sovereign Command and Control (C2) systems built for multi-domain dominance.",
      hero: {
        bg: c2HeroBg,
        eyebrow: "Information Warfare",
        h1: "COMMAND & CONTROL",
        subheadline: "Unified multi-sensor surveillance, automated threat engagement, and complete operational supremacy.",
        intro: "",
        ctaText: "Deploy Command Systems"
      },
      ecosystem: {
        bgImage: c2Schematic,
        headerTitle: "",
        introTag: "C2 Architecture",
        introH2: "Multi-Domain C2 Ecosystem",
        introDesc: "A unified architecture integrating advanced FUSION Core AI C2 platforms with tactical interception systems.",
        cards: [
          {
            tag: "1000+ Tracks . 2D/3D Spatial Mapping",
            title: "FUSION Core AI Command & Control (C2)",
            description: "An advanced AI-driven Command and Control (C2) system designed for enhanced surveillance, seamless sensor integration, and real-time situational awareness.",
            specs: ["Simultaneously tracks over 1000+ objects in real-time, integrating Blue Force tracking for complete spatial dominance.", "2D Operational Mapping and 3D Situational Awareness Mapping to grasp terrain elevation, obstacles, and tactical high ground.", "User-defined Custom Protection Zones trigger smart audio/visual alarms the moment perimeters are breached.", "Automated target tracking and camera handover loops ensure continuous coverage with minimal operator input."],
            img: c2Fusion
          },
          {
            tag: "Tactical Signal Intercept . Spectrum Exploitation",
            title: "Interception System",
            description: "A tactical electronic warfare asset engineered for covert monitoring and real-time exploitation of hostile communications.",
            specs: ["Wideband frequency monitoring with automatic modulation classification for instant threat detection.", "Real-time decryption and signal extraction from tactical radio and RF transmission channels.", "Integrated Direction-Finding (DF) routines to geolocate hostile emitters on tactical C2 maps.", "Direct data pipeline integration into FUSION Core AI C2 for rapid countermeasure targeting."],
            img: c2Interception
          }
        ]
      },
      ctaBlock: {
        headline: "Unify your multi-domain sensors into a single, dominant C2 architecture.",
        btnText: "Contact C2 Systems Division",
        linkText: "Request Platform Architecture Demo"
      }
    },
    "communication-monitoring": {
      title: "Intelligence & Surveillance: Communication Monitoring",
      metaDesc: "Advanced Communication Monitoring systems for the defense sector.",
      hero: {
        bg: cmHeroBg,
        eyebrow: "Communication Monitoring",
        h1: "INTELLIGENCE & SURVEILLANCE",
        subheadline: "Unrivaled electromagnetic spectrum awareness. Advanced radio monitoring and precision direction-finding systems to detect, intercept, and geolocate hostile communications across all domains.",
        intro: "",
        ctaText: "Deploy Monitoring Assets"
      },
      ecosystem: {
        bgImage: cmSchematic,
        headerTitle: "",
        introTag: "Spectrum Dominance",
        introH2: "Communication Monitoring",
        introDesc: "A unified architecture encompassing wideband interception and high-precision tactical direction finding.",
        cards: [
          {
            tag: "Spectrum Dominance . Wideband Interception",
            title: "Radio Monitoring and Location Portfolio",
            description: "A comprehensive suite of advanced receivers and monitoring systems engineered to detect, intercept, and analyze complex radio frequency (RF) emissions across congested spectrums.",
            specs: ["Real-time wideband monitoring spanning VLF to SHF frequency bands.", "Automated signal classification, demodulation, and decoding of hostile transmissions.", "Multi-channel interception architecture enabling simultaneous tracking of diverse threat vectors.", "Seamless data pipeline integration into overarching strategic Command and Control (C2) networks."],
            img: cmRadio
          },
          {
            tag: "Precision Geolocation . Tactical DF",
            title: "Direction Finders",
            description: "High-precision tactical direction finding (DF) systems designed to instantly geolocate hostile emitters.",
            specs: ["Rapid geolocation of frequency-hopping, burst, and low-probability-of-intercept (LPI) transmissions.", "Highly adaptable deployment options across fixed infrastructure, mobile land units, and airborne platforms.", "High-resolution spatial mapping of RF targets with real-time tactical map overlays.", "Integrated 3D terrain compensation algorithms to eliminate multi-path errors and improve fix accuracy."],
            img: cmDirection
          }
        ]
      },
      ctaBlock: {
        headline: "Achieve absolute informational dominance across all domains.",
        btnText: "Contact Info Warfare Division",
        linkText: "Request a Threat Assessment Consultation"
      }
    }
  }
};

export const homeDb = {
  hero: {
    tag: "INDIA'S FIRST APEX DEFENSE INITIATIVE",
    headline: "Unmatched Operational Superiority.",
    subheadline: "Deploy autonomous systems, quantum-secured communications, and pervasive intelligence gathering across all domains.",
    ctaPrimary: "Explore Arsenal",
    ctaSecondary: "View Capabilities"
  },
  vision: {
    text: "Securing the Future\nThrough Uncompromised\nDefence Innovation.",
    stats: [
      { value: "300+", label: "Patents Filed" },
      { value: "100%", label: "Indigenous Tech" },
      { value: "0ms", label: "Quantum Latency" }
    ]
  },
  productsSection: {
    title: "Electronic Warfare",
    subLink: "Mission Critical Facility"
  },
  arsenalSection: {
    title: "Electronic Warfare",
    subLink: "Mission Critical Facility",
    tagline: "Designed by Sahana Defence"
  },
  newsSection: {
    title: "News & Insights",
    subLink: "All articles",
    date: "06/26/2026",
    articleTitle: "Sahana Defence Signs Strategic Manufacturing Agreement with CEL",
    articleSummary: "Sahana Defence has entered into a Contract Agreement with Central Electronics Limited (CEL) to expand India's indigenous defence manufacturing capabilities. The partnership will support the establishment of a dedicated facility focused on Electronic Warfare systems, weapon systems, defence peripherals, and advanced DefenceTech solutions, reinforcing the nation's vision for self-reliance in defence production.",
    readMoreText: "Read more"
  }
};
