import React, { createContext, useState } from "react";

type PageType = "home" | "search" | "detail";

export interface PageContextType {
  page: PageType;
  handleChangePage: (page: PageType) => void;
}

export const PageContext = createContext<PageContextType>({
  page: "home",
  handleChangePage: () => {},
});

const PageContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [page, setPage] = useState<PageContextType["page"]>("home");

  const handleChangePage = (val: PageContextType["page"]) => {
    setPage(val);
  };

  return (
    <PageContext.Provider value={{ page, handleChangePage }}>
      {children}
    </PageContext.Provider>
  );
};

export default PageContextProvider;
