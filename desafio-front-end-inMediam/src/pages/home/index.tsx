import React from "react";
import CardItem from "../../components/cards-item";
import ContainerItem from "../../components/container";
import { CardItemProps } from "../../utils/interfaces/card-item-props";
import SwiperComponent from "../../components/swiper";
const index = () => {
  const item: CardItemProps[] = [
    {
      id: 1,
      nomeCartoon: "Homem aranha",
      imagemCartoon:
        "https://darkside.vtexassets.com/arquivos/ids/195360/causas_nao_naturais_mini_capa.png?v=638519819438170000",
      precoCartoon: 100.0,
    },
    {
      id: 2,
      nomeCartoon: "Homem aranha",
      imagemCartoon:
        "https://darkside.vtexassets.com/arquivos/ids/195360/causas_nao_naturais_mini_capa.png?v=638519819438170000",
      precoCartoon: 100.0,
    },
    {
      id: 3,
      nomeCartoon: "Homem aranha",
      imagemCartoon:
        "https://darkside.vtexassets.com/arquivos/ids/195360/causas_nao_naturais_mini_capa.png?v=638519819438170000",
      precoCartoon: 100.0,
    },
    {
      id: 4,
      nomeCartoon: "Homem aranha",
      imagemCartoon:
        "https://darkside.vtexassets.com/arquivos/ids/195360/causas_nao_naturais_mini_capa.png?v=638519819438170000",
      precoCartoon: 100.0,
    },
    {
      id: 5,
      nomeCartoon: "Homem aranha",
      imagemCartoon:
        "https://darkside.vtexassets.com/arquivos/ids/195360/causas_nao_naturais_mini_capa.png?v=638519819438170000",
      precoCartoon: 100.5,
    },
    {
      id: 5,
      nomeCartoon: "Homem aranha",
      imagemCartoon:
        "https://darkside.vtexassets.com/arquivos/ids/195360/causas_nao_naturais_mini_capa.png?v=638519819438170000",
      precoCartoon: 100.5,
    },
  ];

  return (
    <ContainerItem>
      <div className="w-full flex grid-cols-2 sm:grid-cols-2 md:flex gap-4 px-2 mt-32">
        <SwiperComponent quantItemMobile={2} quantItems={5}>
          {item.map((item) => (
            <CardItem key={item.id} dataItem={item} />
          ))}
        </SwiperComponent>
      </div>
    </ContainerItem>
  );
};

export default index;
