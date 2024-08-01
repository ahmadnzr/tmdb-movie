import React from "react";
import styled from "styled-components";

import {
  formatDate,
  getEndOfCurrentMonth,
  getStartOfCurrentMonth,
} from "../../helpers/utils";
import Card from "../Card";
import SectionTitle from "../SectionTitle";
import { useFetchRecent } from "../../hooks/useFetchRecent";

const Recently = ({
  onClickCard,
}: {
  onClickCard: (id: number | null) => void;
}) => {
  const { data } = useFetchRecent({
    start: getStartOfCurrentMonth(),
    end: getEndOfCurrentMonth(),
  });

  return (
    <Container>
      <SectionTitle title="New This Month" />
      <SectionContent>
        {data?.results?.map((item) => (
          <Card
            id={item.id || null}
            key={item.id}
            title={item?.title || ""}
            time={formatDate(item.release_date)}
            imgUrl={item?.poster_path}
            type="sm"
            onClick={onClickCard}
          />
        ))}
      </SectionContent>
    </Container>
  );
};

export default Recently;

const Container = styled.section`
  width: 80%;

  margin: 0 auto;
  padding: 20px 0;
`;

const SectionContent = styled.div`
  position: relative;
  min-height: 700px;
  margin-top: ${(props) => props.theme.spacing.xlarge};

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 15px;
`;
