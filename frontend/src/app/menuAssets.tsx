import React from 'react';
import flightImg from "@/imports/sahana_fpv_interceptor.jpg";
import droneRadarHeroImg from "@/imports/drone_radar_hero.png";
import infinityRhinoImg from "@/imports/infinity_rhino.jpg";
import osintDashboardImg from "@/imports/osint/dashboard_ui.jpg";

export const FALLBACK_MENU_ASSETS: Record<string, any> = {
  "electronic-warfare": {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    spotlightImage: flightImg,
  },
  "radar-systems": {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    spotlightImage: droneRadarHeroImg,
  },
  "jamming-systems": {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M18 8c0 4.5-6 6-6 12"/>
        <path d="M6 8c0 4.5 6 6 6 12"/>
        <path d="M2 22h20"/>
      </svg>
    ),
    spotlightImage: infinityRhinoImg,
  },
  "information-warfare": {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <path d="M22 6l-10 7L2 6"/>
      </svg>
    ),
    spotlightImage: osintDashboardImg,
  },
  "quantum-technology-solutions": {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2v20"/>
        <path d="M2 12h20"/>
        <circle cx="12" cy="12" r="6"/>
      </svg>
    ),
    spotlightImage: flightImg, // fallback
  },
  "aerospace-&-defence": {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
      </svg>
    ),
    spotlightImage: flightImg,
  },
  "defence-deeptech": {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    spotlightImage: flightImg,
  },
  "default": {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
      </svg>
    ),
    spotlightImage: flightImg,
  }
};
