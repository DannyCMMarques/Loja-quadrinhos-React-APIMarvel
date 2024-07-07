import React from "react";
import CardItem from "../../components/cards-item";
import ContainerItem from "../../components/container";
import { CardItemProps } from "../../utils/interfaces/card-item-props";
import SwiperComponent from "../../components/swiper";
import CardBannerItem from "../../components/card-banner-item";
import { livrosMock } from "../../utils/mocks/livros";
import { heroImage } from "../../utils/mocks/hero-image";
import { HeroProps } from "../../utils/interfaces/heroProps";
import { MESSAGES } from "./../../utils/messages/index";
import FrasesHomeComponente from "../../components/frases-Home";
import DestaqueComponente from "../../components/destaque";
const index = () => {
  const item: CardItemProps[] = livrosMock;
  const imagemTeste: HeroProps = heroImage;

  return (
    <>
      <div className="w-full mt-16 md:mt-16 sm:mt-16">
        <CardBannerItem dataItem={imagemTeste} />
        <ContainerItem>
          <div className="w-full mb-5">
            <FrasesHomeComponente frase={MESSAGES.FRASE_1_HOME} />
          </div>
          <div className="w-full flex grid-cols-2 sm:grid-cols-2 md:flex gap-4 px-2">
            <SwiperComponent quantItemMobile={2} quantItems={5}>
              {item.map((item) => (
                <CardItem key={item.id} dataItem={item} />
              ))}
            </SwiperComponent>
          </div>
          <div className="w-full mt-12 md:mt-20 sm:mt-12 mb-5">
            <FrasesHomeComponente frase={MESSAGES.FRASE_2_HOME} />
          </div>
          <div className="w-full flex grid-cols-2 sm:grid-cols-2 md:flex gap-4 px-2">
            <SwiperComponent quantItemMobile={2} quantItems={5}>
              {item.map((item) => (
                <CardItem key={item.id} dataItem={item} />
              ))}
            </SwiperComponent>
          </div>

          <div className="mt-20 hidden sm:block md:block">
            <div className="w-full mb-5">
              <FrasesHomeComponente frase={MESSAGES.FRASE_HOME_DESTAQUE} />
            </div>
            <DestaqueComponente />
          </div>

          <div className="w-full mt-12 md:mt-20 sm:mt-12 mb-5">
            <FrasesHomeComponente frase={MESSAGES.FRASE_3_HOME} />
          </div>

          <div className="w-full flex grid-cols-2 sm:grid-cols-2 md:flex gap-4 px-2">
            <SwiperComponent quantItemMobile={2} quantItems={5}>
              {item.map((item) => (
                <CardItem key={item.id} dataItem={item} />
              ))}
            </SwiperComponent>
          </div>
          <div className="w-full mt-12 md:mt-20 sm:mt-12 mb-5">
            <FrasesHomeComponente frase={MESSAGES.FRASE_4_HOME} />
          </div>

          <div className="w-full flex grid-cols-2 sm:grid-cols-2 md:flex gap-4 px-2">
            <SwiperComponent quantItemMobile={2} quantItems={5}>
              {item.map((item) => (
                <CardItem key={item.id} dataItem={item} />
              ))}
            </SwiperComponent>
          </div>
        </ContainerItem>
      </div>
    </>
  );
};

export default index;
