import React from "react";
import styled from "styled-components";
import { SECURE_IMAGE_BASE_URL } from "../../helpers/constants";

const CardContainer = styled.div`
  width: 150px;
  min-height: 300px;
  overflow: hidden;
  background-color: ${(props) => props.theme.color.bg};
  transition: ${(props) => props.theme.animation};
  border-radius: ${(props) => props.theme.spacing.large};
  cursor: pointer;

  &:hover {
    box-shadow: 0px 14px 21px 13px rgba(0, 0, 0, 0.1);
    border-radius: 0;
  }
`;

const CardImage = styled.div<{ $url?: string }>`
  content: "";
  width: 100%;
  height: 230px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${(props) => props.$url});
`;

const CardContent = styled.div`
  padding: ${(props) => props.theme.spacing.medium};
`;

const CardTitle = styled.label`
  display: block;
  font-size: ${(props) => props.theme.fontSize.small};
  font-weight: bold;
`;

const CardTime = styled.label`
  display: block;
  font-size: ${(props) => props.theme.fontSize.small};
`;

interface CardProps {
  imgUrl?: string;
  title: string;
  desc: string;
}

const Card = ({ imgUrl, title, desc }: CardProps) => {
  return (
    <CardContainer>
      <CardImage
        $url={`${SECURE_IMAGE_BASE_URL}/w220_and_h330_face/${imgUrl}`}
      />
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardTime>{desc}</CardTime>
      </CardContent>
    </CardContainer>
  );
};

export default Card;
