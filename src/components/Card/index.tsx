import styled from "styled-components";
import { SECURE_IMAGE_BASE_URL } from "../../helpers/constants";

const CardImage = styled.div<{ $url?: string }>`
  content: "";
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${(props) => props.$url});
`;

const CardTitle = styled.label`
  display: block;
  font-weight: bold;
`;
const CardDesc = styled.p`
  display: block;
  font-size: ${(props) => props.theme.fontSize.medium};
`;

const CardTime = styled.label`
  display: block;
  font-size: ${(props) => props.theme.fontSize.small};
`;

const CardContent = styled.div`
  padding: ${(props) => props.theme.spacing.medium};
`;

const CardContainer = styled.div<{ $type: "lg" | "sm" }>`
  width: ${(props) => (props.$type === "lg" ? "100%" : "150px")};
  min-height: 300px;
  overflow: hidden;
  display: ${(props) => (props.$type === "lg" ? "flex" : "block")};
  background-color: ${(props) => props.theme.color.bg};
  transition: ${(props) => props.theme.animation};
  border-radius: ${(props) => props.theme.spacing.large};
  cursor: pointer;

  &:hover {
    box-shadow: 0px 14px 21px 13px rgba(0, 0, 0, 0.1);
    border-radius: 0;
  }

  ${CardContent} {
    width: ${(props) => (props.$type === "lg" ? "60%" : "")};
  }
  ${CardImage} {
    width: ${(props) => (props.$type === "lg" ? "40%" : "100%")};
    height: ${(props) => (props.$type === "lg" ? "100%" : "230px")};
  }
  ${CardTitle} {
    font-size: ${(props) =>
      props.$type === "sm"
        ? props.theme.fontSize.small
        : props.theme.fontSize.large};
  }
`;

interface CardProps {
  imgUrl?: string;
  id: number | null;
  title: string;
  desc?: string;
  time?: string;
  type?: "lg" | "sm";
  onClick?: (id: number | null) => void;
}

const Card = ({
  onClick,
  id,
  imgUrl,
  title,
  desc,
  time,
  type = "lg",
}: CardProps) => {
  return (
    <CardContainer
      $type={type}
      onClick={() => {
        onClick && onClick(id);
      }}
    >
      <CardImage
        $url={`${SECURE_IMAGE_BASE_URL}/w220_and_h330_face/${imgUrl}`}
      />
      <CardContent>
        <CardTitle>{title}</CardTitle>
        {time ? <CardTime>{time}</CardTime> : null}
        {desc ? <CardDesc>{desc}</CardDesc> : null}
      </CardContent>
    </CardContainer>
  );
};

export default Card;
