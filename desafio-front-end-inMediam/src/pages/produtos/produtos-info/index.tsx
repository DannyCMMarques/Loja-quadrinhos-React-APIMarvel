import React, { useCallback, useEffect, useState } from "react";
import ContainerItem from "../../../components/container";
import {
  FiMinus,
  FiPlus,
  FiSearch,
  FiBook,
  FiVideo,
  FiGlobe,
} from "react-icons/fi";
import SwiperComponent from "../../../components/swiper";
import { livrosMock } from "../../../utils/mocks/livros";
import { CardItemProps } from "../../../utils/interfaces/card-item-props";
import CardItem from "../../../components/cards-item";
import FrasesHomeComponente from "../../../components/frases-Home";
import { MESSAGES } from "../../../utils/messages";
import { GiWeight } from "react-icons/gi";
import useComicsService from "../../../service/comics-service";
import {
  IoIosInformationCircle,
  IoIosInformationCircleOutline,
} from "react-icons/io";
import { PiBookOpenTextThin } from "react-icons/pi";
import useFormattedPrice from "../../../hooks/useFormatePrice";

const ProdutoInfo = () => {
  const comicService = useComicsService();
  const [dataComics, setDataComics] = useState<any>([]);
  const [dataAllComics, setDataAllComics] = useState<any>([]);

  const creators = dataComics?.creators?.items ?? [];
  const mostrarCreators = creators.slice(0, 5);
  const creatorsLonga = creators.length > 8;
  const [quantidade, setQuantidade] = useState(0);

  const [activePath, setActivePath] = useState(window.location.pathname);
  const id: any = activePath.split("/").pop();

  const item: CardItemProps[] = livrosMock;

  const getComicsID = useCallback(async () => {
    try {
      const comic = await comicService.getComicsID(id);
      setDataComics(comic?.data?.results[0]);
      return comic;
    } catch (err) {
      console.error("Erro ao buscar quadrinhos:", err);
    }
  }, [comicService]);
  const getComics = useCallback(async () => {
    try {
      const comic = await comicService.getComics(20, 80);
      setDataAllComics(comic.data.results);
    } catch (err) {
      console.error("Erro ao buscar quadrinhos:", err);
    }
  }, [comicService]);
  const handleAdicionarValor = () => {
    setQuantidade((prevQuantidade) => prevQuantidade + 1);
  };

  const handleRemoverValor = () => {
    setQuantidade((prevQuantidade) =>
      prevQuantidade > 0 ? prevQuantidade - 1 : 0
    );
  };

  const handleRedirect = () => {
    window.location.href =
      "https://buscacepinter.correios.com.br/app/endereco/index.php";
  };
  useEffect(() => {
    getComics();
    getComicsID();
  }, []);

  const formattedPrice = useFormattedPrice(dataComics?.prices?.[0]?.price);

  return (
    <>
      <ContainerItem>
        <div className="mt-24 flex flex-col md:flex-row gap-14 px-5 md:px-0 sm:px-5 justify-center">
          <div className="flex gap-0 md:gap-16 sm:gap-0">
            <div
              className="w-[40rem]  h-[35rem] sm:h-[35rem] md:h-[60rem]"
              style={{
                backgroundImage: `url(${dataComics?.thumbnail?.path}.${dataComics?.thumbnail?.extension})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>

          <div>
            <h2 className="font-bold text-3xl mt-0 sm:mt-0 md:mt-3 uppercase text-white">
              {dataComics?.title}
            </h2>
            <p className="font-medium text-md w-96 text-gray-300 uppercase">
              Series: {dataComics?.series?.name}
            </p>

            <div className="mt-10 mb-10">
              {dataComics?.prices && (
                <>
                  <h5 className="font-bold text-3xl text-orange-500">
                    R$ {formattedPrice}
                  </h5>
                  <p className="font-bold text-xl text-red-500 ">
                    ou 10x de R$ {parseInt(dataComics?.prices[0]?.price) / 10}
                  </p>
                </>
              )}
            </div>

            <div className="flex gap-5 mt-5">
              <button onClick={handleRemoverValor}>
                <FiMinus size={24} className="text-white" />
              </button>
              <input
                className="w-16 h-12 text-center border-none font-bold rounded-sm"
                readOnly
                value={quantidade}
              />
              <button onClick={handleAdicionarValor}>
                <FiPlus size={20} className="text-white" />
              </button>
              <div className="">
                <button className="bg-red-600 rounded-md hover:bg-red-500 duration-100 text-white p-3 w-full">
                  Adicionar na sacola
                </button>
              </div>
            </div>

            <div className="border-2 py-4 px-4 mt-8">
              <h5 className="uppercase font-bold text-2xl text-white">
                Entrega
              </h5>
              <p className="text-gray-300">
                Insira o CEP para calcular valor e prazo
              </p>
              <div className="mt-3 relative">
                <input
                  type="text"
                  placeholder="Insira o seu CEP"
                  className="w-full h-12 px-2 border-none font-bold rounded-sm pr-12"
                />
                <button className="absolute right-0 top-0 h-full px-3 bg-red-500 text-white rounded-sm">
                  <FiSearch size={20} />
                </button>
              </div>

              <p
                className="mt-5 text-sm text-gray-300 italic underline hover:text-orange-600 duration-100 cursor-pointer"
                onClick={handleRedirect}
              >
                Não sei meu CEP
              </p>
            </div>
          </div>
        </div>
      </ContainerItem>

      <div className="bg-red-600 w-full  h-24 mt-8 hidden sm:hidden md:flex justify-center items-center">
        <ContainerItem>
          <div className="flex w-full gap-2 sm:gap-2 md:gap-40 justify-between items-center">
            <p className="font-bold text-white block sm:block md:flex gap-2">
              <PiBookOpenTextThin size={28} text-white font-bold /> Páginas:{" "}
              {dataComics?.pageCount}
            </p>
            <p className="font-bold text-white block sm:block md:flex gap-2">
              <IoIosInformationCircleOutline size={24} />{" "}
              {dataComics?.isbn !== ""
                ? `ISBN: ${dataComics?.isbn}`
                : `Digital Id: ${dataComics.digitalId} `}
            </p>
            <p className="font-bold text-white block sm:block md:flex gap-2">
              <FiGlobe size={24} /> Idioma: English
            </p>
            <p className="font-bold text-white block sm:block md:flex gap-2">
              <FiBook size={24} /> Format: {dataComics?.format}
            </p>
          </div>
        </ContainerItem>
      </div>

      <ContainerItem>
        <div className="mt-10 w-full px-5 md:px-0 sm:px-5 md:w-5/6 sm:w-full">
          <h5 className="text-white font-bold text-4xl uppercase">Content</h5>
          <p className="text-gray-300 mt-2">
            {dataComics?.description === ""
              ? "This comic don't have a description"
              : dataComics?.description}
          </p>
        </div>
        <div className="mt-10 w-full px-5 md:px-0 sm:px-5 md:w-5/6 sm:w-full">
          <h5 className="text-amber-400 font-bold text-4xl uppercase">
            Creator
          </h5>
          <ul className="text-gray-300 mt-2">
            {dataComics?.creators?.items?.map((creator) => (
              <li key={creator.resourceURI}>
                <span className="text-white font-bold">{creator.name}</span> -{" "}
                {creator.role}
              </li>
            ))}
          </ul>
        </div>
        <hr className="mt-10"></hr>
        <div className="py-5 mt-5">
          <div className="w-full  mb-5">
            <FrasesHomeComponente frase={MESSAGES.FRASE_PAGE_INFO} />
          </div>
          <div className="w-full flex grid-cols-2 sm:grid-cols-2 md:flex gap-4 px-2">
            <SwiperComponent quantItemMobile={2} quantItems={5}>
              {dataAllComics.map((item) => (
                <CardItem key={item.id} dataItem={item} />
              ))}
            </SwiperComponent>
          </div>
        </div>
      </ContainerItem>
    </>
  );
};

export default ProdutoInfo;
