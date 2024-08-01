import { useContext, useState } from "react";

import { PageContext } from "./layout/PageLayout";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Detail from "./pages/Detail";

function App() {
  const { page, handleChangePage } = useContext(PageContext);
  const [id, setId] = useState<number | null>(null);

  const handleChangeId = (val: number | null) => {
    setId(val);
    handleChangePage("detail");
  };

  return (
    <>
      {page === "home" ? <Home onClickCard={handleChangeId} /> : null}
      {page === "search" ? <Search onClickCard={handleChangeId} /> : null}
      {page === "detail" ? <Detail id={id} /> : null}
    </>
  );
}

export default App;
