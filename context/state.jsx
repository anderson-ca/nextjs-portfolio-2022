import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const projects = [
    {
      title: "Travel Agency",
      description:
        "Travel agency application with login form and CRUD functionality",
      videoURL: "./card-test.svg",
      srcCodeURL: "https://github.com/anderson-ca/travel-site/tree/master",
      websiteURL: "https://travel-site-theta.vercel.app/",
      technologyIcons: ["css.svg", "react.svg"],
    },
    {
      title: "Landing Page",
      description:
        "Responsive landing page with stylizesed layout and vibrant colors",
      videoURL: "./card-test.svg",
      srcCodeURL:
        "https://github.com/anderson-ca/next-portfolio-static/tree/main",
      websiteURL: "https://next-portfolio-static.vercel.app/",
      technologyIcons: ["css.svg", "next.svg"],
    },
    {
      title: "Crypto Tracker",
      description:
        "Cryptocurrency price tracking web application, built using react hooks and Axios.",
      videoURL: "./card-test.svg",
      srcCodeURL:
        "https://github.com/anderson-ca/cryptocurrency-tracker/tree/master",
      websiteURL: "https://cryptocurrency-tracker-peach.vercel.app",
      technologyIcons: ["css.svg", "react.svg"],
    },
    {
      title: "Sign Up Form",
      description:
        "lorem ipsum will uncover many web sites still in their infancy.",
      videoURL: "./card-test.svg",
      srcCodeURL: "https://github.com/anderson-ca/signup-form",
      websiteURL: null,
      technologyIcons: ["html.svg", "css.svg", "js.svg"],
    },
    {
      title: "3D Hero Section",
      description:
        "lorem ipsum will uncover many web sites still in their infancy.",
      videoURL: "./card-test.svg",
      srcCodeURL: "https://github.com/anderson-ca/threejs-sphere/tree/master",
      websiteURL: "https://threejs-sphere-one.vercel.app",
      technologyIcons: ["html.svg", "css.svg", "js.svg"],
    },
    {
      title: "Simple Portfolio",
      description:
        "lorem ipsum will uncover many web sites still in their infancy.",
      videoURL: "./carouselvid3.mp4",
      srcCodeURL: "https://github.com/anderson-ca/scroll-animation/tree/master",
      websiteURL: "https://scroll-animation-eight.vercel.app",
      technologyIcons: ["html.svg", "css.svg", "js.svg"],
    },
  ];

  let sharedState = {
    projects,
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
