import React from "react";
import ContainerItem from "../../../components/container";
import SwiperComponent from "../../../components/swiper";
import CardRadioItem from "../../../components/card-radio-items";
import { CardItemProps } from "../../../utils/interfaces/card-item-props";
import { HeroProps } from "../../../utils/interfaces/heroProps";
import { livrosMock } from "../../../utils/mocks/livros";
import CardItem from "../../../components/cards-item";
import { bgWhite } from "../../../utils/mocks/bg-white";
import FrasesHomeComponente from "../../../components/frases-Home";
import { MESSAGES } from "../../../utils/messages";
import { useLocation } from "react-router-dom";

const ProductList = () => {
  const item: CardItemProps[] = livrosMock;
  const imagemTeste: HeroProps = bgWhite;

  const parametroUrl = useLocation();
  const parametroArray = parametroUrl.pathname.split("/");
  const resultadoParametro = parametroArray[parametroArray.length - 1];

  return (
    <>
      <div className="w-full mt-24 md:mt-20 sm:mt-24">
        <div
          className="relative w-full h-72"
          style={{
            backgroundImage: `
                linear-gradient(to top, #171717 25%, transparent 100%),
                linear-gradient(to top, #171717 20%, transparent 100%),
                url(${imagemTeste?.imagemCartoon})
            `,
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        ></div>
        <div className="z-20 -mt-44">
          <ContainerItem>
            <div className="w-full flex grid-cols-2 sm:grid-cols-2 md:flex gap-4 px-2">
              <SwiperComponent quantItemMobile={3} quantItems={10}>
                {item.map((item) => (
                  <CardRadioItem key={item.id} dataItem={item} />
                ))}
              </SwiperComponent>
            </div>
            <div className="w-full mt-12 md:mt-12 sm:mt-12 mb-5 z-20">
              <FrasesHomeComponente frase={MESSAGES.FRASE_COMICS} />
            </div>
            <div className="w-full grid gap-4 px-2 grid-cols-2 sm:grid-cols-2 md:grid-cols-5">
              {item.map((item) => (
                <CardItem key={item.id} dataItem={item} />
              ))}
            </div>
          </ContainerItem>
        </div>
      </div>
    </>
  );
};

export default ProductList;
