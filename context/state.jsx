import { createContext, useContext } from "react";
import {
  SiCsswizardry,
  SiJavascript,
  SiHtml5,
  SiReact,
  SiThreedotjs,
  SiNextdotjs,
} from "react-icons/si";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const projects = [
    {
      title: "Travel Agency",
      description:
        "Travel agency landing page with a stunning hero section, flex card layout, and a service description page.",
      videoURL: "/travel-site.svg",
      srcCodeURL: "https://github.com/anderson-ca/travel-agency",
      websiteURL: "https://travel-agency-two.vercel.app/",
      technologyIcons: [<SiCsswizardry />, <SiReact />, <SiNextdotjs />],
    },
    {
      title: "Trial Portfolio",
      description:
        "Static single-page portfolio demonstrating a balanced layout and overall good composition.",
      videoURL: "/travel-site.svg",
      srcCodeURL:
        "https://github.com/anderson-ca/next-portfolio-static/tree/main",
      websiteURL: "https://next-portfolio-static.vercel.app/",
      technologyIcons: [<SiCsswizardry />, <SiReact />, <SiNextdotjs />],
    },
    {
      title: "Crypto Tracker",
      description:
        "Cryptocurrency price tracking web application, built using react hooks and Axios.",
      videoURL: "/travel-site.svg",
      srcCodeURL:
        "https://github.com/anderson-ca/cryptocurrency-tracker/tree/master",
      websiteURL: "https://cryptocurrency-tracker-peach.vercel.app",
      technologyIcons: [<SiCsswizardry />, <SiReact />],
    },
    {
      title: "Sign Up Page",
      description:
        "I created this high-fidelity responsive sign up form with validation component for a Codementor challenge.",
      videoURL: "/travel-site.svg",
      srcCodeURL: "https://github.com/anderson-ca/sign-up-page.git",
      websiteURL: "https://sign-up-page-eight.vercel.app/",
      technologyIcons: [
        <SiHtml5 />,
        <SiCsswizardry />,
        <SiReact />,
        <SiNextdotjs />,
      ],
    },
    {
      title: "3D Hero Section",
      description: " three dimentional Isometric sphere hero section UI",
      videoURL: "/travel-site.svg",
      srcCodeURL: "https://github.com/anderson-ca/threejs-sphere/tree/master",
      websiteURL: "https://threejs-sphere-one.vercel.app",
      technologyIcons: [
        <SiHtml5 />,
        <SiCsswizardry />,
        <SiJavascript />,
        <SiThreedotjs />,
      ],
    },
    {
      title: "Simple Portfolio",
      description:
        "lorem ipsum will uncover many web sites still in their infancy.",
      videoURL: "/travel-site.svg",
      srcCodeURL: "https://github.com/anderson-ca/scroll-animation/tree/master",
      websiteURL: "https://scroll-animation-eight.vercel.app",
      technologyIcons: [
        <SiHtml5 />,
        <SiCsswizardry />,
        <SiJavascript />,
        <SiThreedotjs />,
      ],
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
