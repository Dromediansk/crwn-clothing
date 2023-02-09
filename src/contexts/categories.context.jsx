import { createContext, useEffect, useState } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase.utils.js";

// Actual value you want to access
export const CategoriesContext = createContext({
  categoriesByTitle: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesByTitle, setCategoriesByTitle] = useState({});
  const value = { categoriesByTitle };

  useEffect(() => {
    const getCategoriesByTitle = async () => {
      const categoriesByTitle = await getCategoriesAndDocuments();
      setCategoriesByTitle(categoriesByTitle);
    };

    getCategoriesByTitle();
  }, []);

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
