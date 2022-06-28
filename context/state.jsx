import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const projects = [
    {
      title: "E-Commerce App",
      description:
        "lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes.",
      videoURL: "./carouselvid4.mp4",
      srcCodeURL: null,
      websiteURL: null,
      technologyIcons: ["html.svg", "css.svg", "js.svg"],
    },
    {
      title: "Travel Website",
      description:
        "lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes evolved over the years, sometimes.",
      videoURL: "./carouselvid2.mp4",
      srcCodeURL: null,
      websiteURL: null,
      technologyIcons: ["html.svg", "css.svg", "js.svg"],
    },
    {
      title: "Static Application",
      description:
        "lorem ipsum will uncover many web sites still in their infancy.",
      videoURL: "./carouselvid3.mp4",
      srcCodeURL: null,
      websiteURL: null,
      technologyIcons: ["html.svg", "css.svg", "js.svg"],
    },
  ];



  let sharedState = {
    projects
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
