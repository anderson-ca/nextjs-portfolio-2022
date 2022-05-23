import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const porjects = [
    {
      title: null,
      description: null,
      videoURL: null,
      srcCodeURL: null,
      websiteURL: null,
      technologyIcons: [],
    },
  ];

  let sharedState = {};

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
