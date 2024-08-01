import React, { useContext } from "react";
import styled from "styled-components";
import SectionTitle from "../components/SectionTitle";
import { PageContext } from "../layout/PageLayout";
import { SECURE_IMAGE_BASE_URL } from "../helpers/constants";
import { useFetchDetail } from "../hooks/useFetchDetail";
import { formatDate } from "../helpers/utils";

const Container = styled.section`
  width: 80%;
  padding: 40px 0;
  margin: 0 auto;
`;

const DetailImage = styled.div<{ $url: string }>`
  width: 100%;
  height: 400px;
  background-color: green;
  content: "";
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${(props) => props.$url});
`;

const DetailTitle = styled.h2`
  font-size: ${(props) => props.theme.fontSize.large};
`;

const DetailTime = styled.span`
  display: block;
  font-size: ${(props) => props.theme.fontSize.small};
`;

const DetailDesc = styled.p`
  margin-top: ${(props) => props.theme.spacing.large};
  font-size: ${(props) => props.theme.fontSize.medium};
`;

interface DetailProps {
  id: number | null;
}

const Detail = ({ id }: DetailProps) => {
  const { handleChangePage } = useContext(PageContext);

  const { data } = useFetchDetail({ id });

  return (
    <Container>
      <SectionTitle
        title="Detail"
        onBack={() => {
          handleChangePage("home");
        }}
      />
      <DetailImage
        $url={`${SECURE_IMAGE_BASE_URL}/original/${data?.backdrop_path}`}
      />
      <DetailTitle>{data?.original_title}</DetailTitle>
      <DetailTime>{formatDate(data?.release_date)}</DetailTime>
      <DetailDesc>{data?.overview}</DetailDesc>
    </Container>
  );
};

export default Detail;
