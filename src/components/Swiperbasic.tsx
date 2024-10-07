import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import styled from "styled-components";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const SwiperContainer = styled.div<{ hasPagination: boolean }>`
  width: 100%;
  height: 100%;
  padding-bottom: ${(props) => (props.hasPagination ? "8%" : "0")};
`;

type SwiperbasicProps = {
  children: React.ReactNode;
  spaceBetween?: number;
  slidesPerView?: number | "auto";
  autoplayDelay?: number;
  indicator?: boolean;
  loop?: boolean;
  paginationType?: "bullets" | "fraction" | "progressbar" | "custom" | null;
  showNavigation?: boolean;
  additionalModules?: any[];
  freemode: boolean;
};

const Swiperbasic: React.FC<SwiperbasicProps> = ({
  children,
  spaceBetween = 10,
  autoplayDelay = 4000,
  slidesPerView = 1,
  indicator = true,
  paginationType = "bullets",
  showNavigation = true,
  additionalModules = [],
  loop = true,
  freemode = true,
}) => {
  const modules = useMemo(() => {
    const baseModules = [Pagination, Scrollbar, Autoplay, ...additionalModules];
    if (showNavigation) {
      baseModules.push(Navigation);
    }
    return baseModules;
  }, [showNavigation, additionalModules]);

  const settings = useMemo(
    () => ({
      spaceBetween,
      slidesPerView,
      loop,
      autoplay: {
        delay: autoplayDelay,
      },
      pagination:
        indicator && paginationType
          ? {
              clickable: true,
              type: paginationType,
            }
          : false,
      navigation: showNavigation,
      modules,
      freemode,
    }),
    [
      spaceBetween,
      autoplayDelay,
      indicator,
      paginationType,
      showNavigation,
      modules,
    ]
  );

  return (
    <SwiperContainer hasPagination={indicator && !!paginationType}>
      <Swiper {...settings}>{children}</Swiper>
    </SwiperContainer>
  );
};

export default Swiperbasic;
