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
        "Travel agency application with login form and CRUD functionality",
      videoURL: "/travel-site.svg",
      srcCodeURL: "https://github.com/anderson-ca/travel-site/tree/master",
      websiteURL: "https://travel-site-theta.vercel.app/",
      technologyIcons: [<SiCsswizardry />, <SiReact />],
    },
    {
      title: "Landing Page",
      description:
        "Responsive landing page with stylizesed layout and vibrant colors",
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
      title: "Sign Up Form",
      description:
        "lorem ipsum will uncover many web sites still in their infancy.",
      videoURL: "/travel-site.svg",
      srcCodeURL: "https://github.com/anderson-ca/signup-form",
      websiteURL: null,
      technologyIcons: [<SiHtml5 />, <SiCsswizardry />, <SiJavascript />],
    },
    {
      title: "3D Hero Section",
      description:
        "lorem ipsum will uncover many web sites still in their infancy.",
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
