import { Block, BlockTitle, Link, Tab } from "framework7-react";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from "../../../components/image";

export const HomeTab = () => {
  return (
    <Tab id="tab-1" className="page-content" tabActive>
      <BlockTitle className="text-without-navbar">Бонусы для Вас</BlockTitle>
      <Swiper
      spaceBetween={30}
      slidesPerView={1.43}
    >
      <SwiperSlide>
        <Link className="block-swiper"></Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link className="block-swiper"></Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link className="block-swiper3"></Link>
      </SwiperSlide>
    </Swiper>
    <BlockTitle className="margin-bottom">Что выберите сегодня?</BlockTitle>
    <Block>
      <Link className="home-card margin-bottom justify-content-space-between">
        {/* <div className="image"></div> */}
        <Image width={'50%'} height={'100%'} image="clean.png"/>
        <div className="text">Уборка квартиры</div>
        <div className="icon-vector"></div>
      </Link>
      <Link className="home-card margin-bottom justify-content-space-between">
        <div className="text-two">Мойка окон</div>
        <div className="icon-vector-two"></div>
        {/* <div className="image-two"></div> */}
        <Image width={'50%'} height={'100%'} image="window.png"/>
      </Link>
    </Block>
    </Tab>
  );
};
