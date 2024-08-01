import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";

import SectionTitle from "../components/SectionTitle";
import { PageContext } from "../layout/PageLayout";
import useDebounce from "../hooks/useDebounce";
import { useFetchSearch } from "../hooks/useFetchSearch";
import Card from "../components/Card";
import { formatDate } from "../helpers/utils";

const Container = styled.section`
  padding: 40px 0;
  width: 80%;
  margin: 0 auto;
`;

const SearchInput = styled.input`
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
`;

const SearchResult = styled.div`
  margin-top: ${(props) => props.theme.spacing.large};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${(props) => props.theme.spacing.large};
`;

const Search = ({
  onClickCard,
}: {
  onClickCard: (id: number | null) => void;
}) => {
  const { handleChangePage } = useContext(PageContext);
  const inputRef = useRef<HTMLInputElement>(null);

  const [search, setSearch] = useState("");

  const debounceSearch = useDebounce(search, 500);

  const { data } = useFetchSearch({ query: debounceSearch });

  useEffect(() => {
    inputRef.current?.focus();
  }, [inputRef]);

  return (
    <Container>
      <SectionTitle
        title="Search Movies"
        onBack={() => {
          handleChangePage("home");
        }}
      />
      <SearchInput
        ref={inputRef}
        placeholder="Search for movies...."
        onChange={(e) => setSearch(e.target.value)}
      />
      <SearchResult>
        {data?.results.map((item) => (
          <Card
            id={item.id || null}
            key={item.id}
            title={item?.title || ""}
            time={formatDate(item.release_date)}
            desc={item.overview}
            imgUrl={item.poster_path}
            onClick={onClickCard}
          />
        ))}
      </SearchResult>
    </Container>
  );
};

export default Search;
