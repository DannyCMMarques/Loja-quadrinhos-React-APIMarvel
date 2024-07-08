import React, { useCallback, useEffect, useState } from "react";
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
import DestaqueComponente from "./../../components/destaque/index";
import useComicsService from "../../service/comics-service";
import useCharactersService from "../../service/charactes-service";
import useCreatorsService from "../../service/creators-service";

const Index = () => {
  const comicService = useComicsService();
  const [dataComics, setDataComics] = useState([]);
  const [randomComic, setRandomComic] = useState(null);

  const charactersService = useCharactersService();
  const [dataBestsCharacters, setBestCharacters] = useState([]);

  const creatorsService = useCreatorsService();
  const [dataBestsCreators, setBestCreators] = useState([]);

  const [dataAncientOne, setDataAncientOne] = useState([]);

  const handleRamdonComics = useCallback(() => {
    if (dataComics.length > 0) {
      const randomIndex = Math.floor(Math.random() * dataComics.length);
      setRandomComic(dataComics[randomIndex]);
    }
  }, [dataComics]);

    const getComics = useCallback(() => {
      comicService
        .getComics()
        .then((comic) => {
          setDataComics(comic.data.results);
        })
        .catch((err) => {
          console.error(err);
        });
    }, []);


  const getBestCharacters = useCallback(() => {
    charactersService
      .getBestCharacters()
      .then((character) => {
        setBestCharacters(character.data.results);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const getAncientOne = useCallback(() => {
    charactersService
      .getAncientOne()
      .then((character) => {
        setDataAncientOne(character.data.results);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  const getBestCreators = useCallback(() => {
    creatorsService
      .getBestCreators()
      .then((creators) => {
        setBestCreators(creators.data.results);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    getComics();
    getBestCharacters();
    getBestCreators();
    getAncientOne();
  }, []);

  useEffect(() => {
    if (dataComics.length > 0) {
      handleRamdonComics();
    }
  }, [dataComics, handleRamdonComics]);

  return (
    <>
      <div className="w-full mt-16 md:mt-16 sm:mt-16">
        <CardBannerItem dataItem={randomComic} />
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
            <div className="w-96 h-96">
            <DestaqueComponente />
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
  );
};

export default Index;