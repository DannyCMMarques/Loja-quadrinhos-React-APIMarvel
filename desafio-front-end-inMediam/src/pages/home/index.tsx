import React, { useCallback, useEffect, useState } from "react";
import CardItem from "../../components/cards-item";
import ContainerItem from "../../components/container";
import SwiperComponent from "../../components/swiper";
import CardBannerItem from "../../components/card-banner-item";
import { MESSAGES } from "./../../utils/messages/index";
import FrasesHomeComponente from "../../components/frases-Home";
import DestaqueComponente from "./../../components/destaque/index";
import Loading from "../../components/loading";
import useProductListService from "../../service/product-list-service";
import {
  Character,
  Comic,
  Creator,
  Story,
} from "../../utils/interfaces/pages/page-home";

const Index = () => {
  const comicService = useProductListService();

  const [dataComics, setDataComics] = useState<Comic[]>([]);
  const [HQSAleatorios, setHQSAleatorios] = useState<Comic | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [dataBestsCharacters, setBestCharacters] = useState<Character[]>([]);

  const [dataBestsCreators, setBestCreators] = useState<Creator[]>([]);

  const [bestsSeries, setBestsSeries] = useState<Story[]>([]);

  const handleHqsAleatorios = useCallback(() => {
    if (dataComics.length > 0) {
      const indexAleatorio = Math.floor(Math.random() * dataComics.length);
      setHQSAleatorios(dataComics[indexAleatorio]);
    }
  }, [dataComics]);

  const getComics = useCallback(async () => {
    setIsLoading(true);
    try {
      const comic = await comicService.getACategoriesTodas("comics", 20, 80);
      setDataComics(comic.data.results);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.error("Erro ao buscar quadrinhos:", err);
    }
  }, [comicService]);

  const getBestCharacters = useCallback(async () => {
    setIsLoading(true);
    try {
      const character = await comicService.getCategoriesID(
        "characters",
        1009146,
        20,
        0
      );
      setBestCharacters(character.data.results);
      setIsLoading(false);
    } catch (err) {
      console.error("Erro ao buscar character:", err);
    }
  }, [comicService]);

  const getBestSeries = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await comicService.getCategoriesID("series", 489, 20, 0);
      setBestsSeries(data.data.results);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.error("Erro ao buscar", err);
    }
  }, [comicService]);


  const getBestCreators = useCallback(async () => {
    setIsLoading(true);
    try {
  const bestCreators = await comicService.getCategoriesID("creators",1168,20, 0);
      setBestCreators(bestCreators.data.results);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.error("Erro ao buscar", err);
    }
  }, [comicService]);

  useEffect(() => {
    getComics();
    getBestCharacters();
    getBestCreators();
    getBestSeries();
  }, []);

  useEffect(() => {
    if (dataComics.length > 0) {
      handleHqsAleatorios();
    }
  }, [dataComics, handleHqsAleatorios]);

  const handleRedirect = (id: number) => {
    window.location.href = `/comics/${id}`;
  };

  return (
    <>
      {isLoading && <Loading />}
      <>
        <div className="w-full mt-16 md:mt-16 sm:mt-16">
          <CardBannerItem dataItem={HQSAleatorios} />

          <ContainerItem>
            <div className="w-full mb-5">
              <FrasesHomeComponente frase={MESSAGES.FRASE_1_HOME} />
            </div>
            <div className="w-full flex grid-cols-2 sm:grid-cols-2 md:flex gap-4 px-2">
              <SwiperComponent quantItemMobile={2} quantItems={5}>
                {dataComics.map((item) => (
                  <CardItem key={item.id} dataItem={item} />
                ))}
              </SwiperComponent>
            </div>

            <div className="w-full mt-1 md:mt-0 sm:mt-1 mb-5">
              <FrasesHomeComponente frase={MESSAGES.FRASE_2_HOME} />
            </div>
            <div className="w-full flex grid-cols-2 sm:grid-cols-2 md:flex gap-4 px-2">
              <SwiperComponent quantItemMobile={2} quantItems={5}>
                {dataBestsCharacters.map((item) => (
                  <CardItem key={item?.id} dataItem={item} />
                ))}
              </SwiperComponent>
            </div>

            <div className="mt-5">
              <div className="w-full mb-5">
                <FrasesHomeComponente frase={MESSAGES.FRASE_HOME_DESTAQUE} />
              </div>
              <div className="w-full h-[33rem]">
                <DestaqueComponente data={dataComics} />
              </div>
            </div>

            <div className="w-full mt-12 md:mt-15 sm:mt-12 mb-5">
              <FrasesHomeComponente frase={MESSAGES.FRASE_4_HOME} />
            </div>
            <div className="w-full flex grid-cols-2 sm:grid-cols-2 md:flex gap-4 px-2">
              <SwiperComponent quantItemMobile={2} quantItems={5}>
                {bestsSeries.map((item) => (
                  <CardItem key={item?.id} dataItem={item} />
                ))}
              </SwiperComponent>
            </div>

            <div className="w-full mt-12 md:mt-15 sm:mt-12 mb-5">
              <FrasesHomeComponente frase={MESSAGES.FRASE_3_HOME} />
            </div>
            <div className="w-full flex grid-cols-2 sm:grid-cols-2 md:flex gap-4 px-2">
              <SwiperComponent quantItemMobile={2} quantItems={5}>
                {dataBestsCreators.map((item) => (
                  <CardItem key={item?.id} dataItem={item} />
                ))}
              </SwiperComponent>
            </div>
          </ContainerItem>
        </div>
      </>
    </>
  );
};

export default Index;
