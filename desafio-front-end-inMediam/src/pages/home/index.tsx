import React, { useCallback, useEffect, useState } from "react";
import CardItem from "../../components/cards-item";
import ContainerItem from "../../components/container";
import SwiperComponent from "../../components/swiper";
import CardBannerItem from "../../components/card-banner-item";
import { MESSAGES } from "./../../utils/messages/index";
import FrasesHomeComponente from "../../components/frases-Home";
import DestaqueComponente from "./../../components/destaque/index";
import useComicsService from "../../service/comics-service";
import useCharactersService from "../../service/charactes-service";
import useCreatorsService from "../../service/creators-service";
import Loading from "../../components/loading";

const Index = () => {
  const comicService = useComicsService();
  const [dataComics, setDataComics] = useState([]);
  const [HQSAleatorios, setHQSAleatorios] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const charactersService = useCharactersService();
  const [dataBestsCharacters, setBestCharacters] = useState([]);

  const creatorsService = useCreatorsService();
  const [dataBestsCreators, setBestCreators] = useState([]);

  const [dataAncientOne, setDataAncientOne] = useState([]);

  const handleHqsAleatorios = useCallback(() => {
    if (dataComics.length > 0) {
      const indexAleatorio = Math.floor(Math.random() * dataComics.length);
      setHQSAleatorios(dataComics[indexAleatorio]);
    }
  }, [dataComics]);

  const getComics = useCallback(async () => {
    setIsLoading(true);
    try {
      const comic = await comicService.getComics(20, 80);
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
      const character = await charactersService.getBestCharacters(20, 0);
      setBestCharacters(character.data.results);
      setIsLoading(false);
    } catch (err) {
      console.error("Erro ao buscar character:", err);
    }
  }, [charactersService]);

  const getAncientOne = useCallback(async () => {
    setIsLoading(true);
    try {
      const ancientOne = await charactersService.getAncientOne(20, 0);
      setDataAncientOne(ancientOne.data.results);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.error("Erro ao buscar ansient one:", err);
    }
  }, [charactersService]);

  const getBestCreators = useCallback(async () => {
    setIsLoading(true);
    try {
      const bestCreators = await creatorsService.getBestCreators(20, 0);
      setBestCreators(bestCreators.data.results);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.error("Erro ao buscar creators:", err);
    }
  }, [creatorsService]);

  useEffect(() => {
    getComics();
    getBestCharacters();
    getBestCreators();
    getAncientOne();
  }, []);

  useEffect(() => {
    if (dataComics.length > 0) {
      handleHqsAleatorios();
    }
  }, [dataComics, handleHqsAleatorios]);

  return (
    <>
      {isLoading && <Loading />}
      {dataComics.length > 0 && (
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
              <div className="w-full mt-12 md:mt-20 sm:mt-12 mb-5">
                <FrasesHomeComponente frase={MESSAGES.FRASE_2_HOME} />
              </div>
              <div className="w-full flex grid-cols-2 sm:grid-cols-2 md:flex gap-4 px-2">
                <SwiperComponent quantItemMobile={2} quantItems={5}>
                  {dataBestsCharacters.map((item) => (
                    <CardItem key={item.id} dataItem={item} />
                  ))}
                </SwiperComponent>
              </div>

              <div className="mt-20">
                <div className="w-full mb-5">
                  <FrasesHomeComponente frase={MESSAGES.FRASE_HOME_DESTAQUE} />
                </div>
                <div className="w-full h-[33rem] ">
                  <DestaqueComponente data={dataComics} />
                </div>
              </div>

              <div className="w-full mt-12 md:mt-20 sm:mt-12 mb-5">
                <FrasesHomeComponente frase={MESSAGES.FRASE_3_HOME} />
              </div>

              <div className="w-full flex grid-cols-2 sm:grid-cols-2 md:flex gap-4 px-2">
                <SwiperComponent quantItemMobile={2} quantItems={5}>
                  {dataBestsCreators.map((item) => (
                    <CardItem key={item.id} dataItem={item} />
                  ))}
                </SwiperComponent>
              </div>
              <div className="w-full mt-12 md:mt-20 sm:mt-12 mb-5">
                <FrasesHomeComponente frase={MESSAGES.FRASE_4_HOME} />
              </div>

              <div className="w-full flex grid-cols-2 sm:grid-cols-2 md:flex gap-4 px-2">
                <SwiperComponent quantItemMobile={2} quantItems={5}>
                  {dataAncientOne.map((item) => (
                    <CardItem key={item.id} dataItem={item} />
                  ))}
                </SwiperComponent>
              </div>
            </ContainerItem>
          </div>
        </>
      )}
    </>
  );
};

export default Index;
