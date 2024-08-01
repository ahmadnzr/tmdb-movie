import React, { useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import { useFetchTrend } from "../../hooks/useFetchTren";
import { formatDate } from "../../helpers/utils";
import Card from "../Card";
import SectionTitle, { SelectionItemType } from "../SectionTitle";

const Trending = ({
  onClickCard,
}: {
  onClickCard: (id: number | null) => void;
}) => {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);

  const [activeSelect, setActiveSelect] = useState<
    SelectionItemType<"day" | "week">
  >({
    id: 0,
    label: "Day",
    value: "day",
  });

  const { data, isLoading } = useFetchTrend({ trend: activeSelect.value });

  return (
    <Container>
      <SectionTitle
        title="Trending"
        items={[
          { id: 0, label: "Day", value: "day" },
          { id: 1, label: "Week", value: "week" },
        ]}
        onSelect={setActiveSelect}
      />
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
              <Card
                id={item.id || null}
                imgUrl={item.poster_path}
                title={item.title || ""}
                time={formatDate(item.release_date)}
                type="sm"
                onClick={onClickCard}
              />
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
