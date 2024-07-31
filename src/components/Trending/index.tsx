import React, { useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import { useFetchTrend } from "../../hooks/useFetchTren";
import { SECURE_IMAGE_BASE_URL } from "../../helpers/constants";
import { formatDate } from "../../helpers/utils";

const Trending = () => {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);

  const [activeSelect, setActiveSelect] = useState<{
    id: number;
    label: string;
    value: "day" | "week";
  }>({
    id: 0,
    label: "Day",
    value: "day",
  });

  const { data, isLoading } = useFetchTrend({ trend: activeSelect.value });

  return (
    <Container>
      <SectionTitle>
        <h2 className="section-title">Trending</h2>
        <Selection>
          <SelectionItem
            onClick={() =>
              setActiveSelect({ id: 0, label: "Day", value: "day" })
            }
          >
            Day
          </SelectionItem>
          <SelectionItem
            onClick={() =>
              setActiveSelect({ id: 1, label: "Week", value: "week" })
            }
          >
            Week
          </SelectionItem>
          <SelectionHover $select={activeSelect.id}>
            {activeSelect.label}
          </SelectionHover>
        </Selection>
      </SectionTitle>
      {isLoading ? (
        <div>Load data....</div>
      ) : (
        <SectionContent
          slidesPerView={8}
          navigation={true}
          modules={[Autoplay, Navigation]}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
            1440: {
              slidesPerView: 7,
              spaceBetween: 60,
            },
          }}
          onSwiper={(s) => {
            setSwiper(s);
          }}
        >
          <LeftArrow
            $icon="/icons/left.svg"
            onClick={() => swiper!.slidePrev()}
          />
          <RightArrow
            $icon="/icons/left.svg"
            onClick={() => swiper!.slideNext()}
          />

          {data?.results.map((item) => (
            <SwiperSlide key={item.id}>
              <Card>
                <CardImage
                  $url={`${SECURE_IMAGE_BASE_URL}/w220_and_h330_face/${item?.poster_path}`}
                />
                <CardContent>
                  <CardTitle>{item?.title}</CardTitle>
                  <CardTime>{formatDate(item?.release_date)}</CardTime>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </SectionContent>
      )}
    </Container>
  );
};

export default Trending;

const Container = styled.section`
  width: 80%;

  margin: 0 auto;
  padding: 20px 0;
`;

const SectionTitle = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.xlarge};
`;

const Selection = styled.div`
  position: relative;
  display: flex;
  padding: 4px 0;

  background-color: ${(props) => props.theme.color.primary};
  border-radius: 10px;
  overflow: hidden;
`;

const SelectionItem = styled.label<{ $active?: boolean }>`
  min-width: 6rem;
  padding: 2px 0;

  cursor: pointer;

  text-align: center;
  color: ${(props) => props.theme.color.neutral2};
`;

const SelectionHover = styled.button<{ $select: number }>`
  min-width: 6rem;

  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.$select * 6}rem;

  text-align: center;
  font-weight: bold;
  color: ${(props) => props.theme.color.neutral};
  background-color: ${(props) => props.theme.color.bg};

  border-radius: 10px;
  transition: ${(props) => props.theme.animation};
`;

const SectionContent = styled(Swiper)`
  position: relative;
  margin-top: ${(props) => props.theme.spacing.xlarge};
`;

const LeftArrow = styled.div<{ $icon: string }>`
  z-index: 99;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  border-radius: 10px;
  content: "";
  width: 20px;
  height: 20px;
  background-color: ${(props) => props.theme.color.neutral};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${(props) => props.$icon});
  opacity: 0;
  cursor: pointer;
  transition: ${(props) => props.theme.animation};

  ${SectionContent}:hover & {
    opacity: 1;
  }
`;

const RightArrow = styled(LeftArrow)`
  left: unset;
  right: 0;
  transform: rotate(180deg);
`;

const Card = styled.div`
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
