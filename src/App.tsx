import { useContext } from "react";

import { PageContext } from "./layout/PageLayout";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Detail from "./pages/Detail";

function App() {
  const { page } = useContext(PageContext);

  return (
    <>
      {page === "home" ? <Home /> : null}
      {page === "search" ? <Search /> : null}
      {page === "detail" ? <Detail /> : null}
    </>
  );
}

export default App;
