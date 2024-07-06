import React from "react";
import CardItem from "../../components/cards-item";
import ContainerItem from "../../components/container";
import { CardItemProps } from "../../utils/interfaces/card-item-props";
import SwiperComponent from "../../components/swiper";
import CardBannerItem from "../../components/card-banner-item";
import { livrosMock } from "../../utils/mocks/livros";
import { heroImage } from "../../utils/mocks/hero-image";
import { HeroProps } from "../../utils/interfaces/heroProps";

const index = () => {
  const item: CardItemProps[] = livrosMock;
  const imagemTeste: HeroProps = heroImage;

  return (
    <>
      <div className="w-full mt-16 md:mt-16 sm:mt-16">
        <CardBannerItem dataItem={imagemTeste} />
        <ContainerItem>
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
