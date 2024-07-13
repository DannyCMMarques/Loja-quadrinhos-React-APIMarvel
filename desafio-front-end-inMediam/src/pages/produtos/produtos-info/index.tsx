import React, { useCallback, useContext, useEffect, useState } from "react";
import ContainerItem from "../../../components/container";
import { UseItensCarrinhoContext } from "./../../../utils/context/useItensCarrinho";
import useFormattedPrice from "../../../hooks/useFormatePrice";
import SwiperComponent from "../../../components/swiper";
import CardItem from "../../../components/cards-item";
import { MESSAGES } from "../../../utils/messages";
import CepComponente from "./../../../components/cep/index";
import SkeletonBones from "../../../components/skeletonBones";
import FaixaInfoProduto from "../../../components/faixa-info-produtos";
import { ComicsData } from "../../../utils/interfaces/pages/produtos-info";
import { FreteSelecionado } from "../../../utils/interfaces/components/cep-componente-interfaces";
import PrecoPaginaInfo from "../../../components/preco-pagina-info";
import ConteudoInfoProduto from "../../../components/conteudo-info-produto";
import AdicionarCarrinhoComponente from "../../../components/adicionar-carrinho";
import useProductListService from "../../../service/product-list-service";

const ProdutoInfo = () => {
  const { adicionarItemCarrinho } = useContext(UseItensCarrinhoContext);
  const [dataAllComics, setDataAllComics] = useState<ComicsData[]>([]);
  const [dataComics, setDataComics] = useState<ComicsData>();
  const [quantidade, setQuantidade] = useState<number>(1);
  const [cep, setCep] = useState<string>();
  const [selectedFrete, setSelectedFrete] = useState<any>();
  const [dataCep, setDataCep] = useState<any>();
  const activePath = window.location.pathname;
  const id: any = activePath.split("/").pop();
  const comicService = useProductListService();

  const getComicsID = useCallback(async () => {
    try {
      const comic = await comicService.getCategoriesIDInfo("comics", id);
      setDataComics(comic?.data?.results[0]);

      return comic;
    } catch (err) {
      console.error("Erro ao buscar quadrinhos:", err);
    }
  }, [comicService, id]);

  const getComics = useCallback(async () => {
    try {
      const comic = await comicService.getACategoriesTodas("comics", 20, 80);
      setDataAllComics(comic.data.results);
    } catch (err) {
      console.error("Erro ao buscar quadrinhos:", err);
    }
  }, [comicService]);

  useEffect(() => {
    getComics();
    getComicsID();
  }, []);

  const handleAdicionarValor = () => {
    setQuantidade((prevQuantidade) => prevQuantidade + 1);
  };

  const handleRemoverValor = () => {
    setQuantidade((prevQuantidade) =>
      prevQuantidade > 1 ? prevQuantidade - 1 : 1
    );
  };

  const formattedPrice = useFormattedPrice(dataComics?.prices?.[0]?.price);

  const handleCapturarCep = (data: string) => {
    setCep(data);
  };

  const handleSelecionarFrete = (frete: any) => {
    setSelectedFrete(frete);
  };

  const handleCapturarDataCep = (data: any) => {
    setDataCep(data);
  };

  const handleComprar = () => {
    const item = {
      id: dataComics?.id,
      title: dataComics?.title,
      price:
        dataComics?.prices[0]?.price === 0 ? 5.99 : dataComics?.prices[0].price,
      amount: quantidade,
      thumbnail: {
        path: dataComics?.thumbnail?.path,
        extension: dataComics?.thumbnail?.extension,
      },
    };

    const frete: FreteSelecionado = {
      frete: selectedFrete,
      cep: cep,
      dados: dataCep,
    };

    localStorage.setItem("frete", JSON.stringify(frete));

    adicionarItemCarrinho(item);
  };

  return (
    <>
      <ContainerItem>
        <div className="mt-24 flex flex-col md:flex-row gap-14 px-5 md:px-0 sm:px-5 justify-center">
          <div className="flex gap-0 md:gap-16 sm:gap-0">
            {!dataComics?.thumbnail?.path ? (
              <SkeletonBones
                height="h-[35rem] h-[35rem] sm:h-[35rem]"
                width="w-96 md:w-[40rem] sm:w-96"
                display="flex"
                justify="justify-between"
              />
            ) : (
              <div
                className="w-[40rem]  h-[35rem] sm:h-[35rem] md:h-[60rem]"
                style={{
                  backgroundImage: `url(${dataComics?.thumbnail?.path}.${dataComics?.thumbnail?.extension})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            )}
          </div>

          <div>
            {!dataComics?.thumbnail?.path ? (
              <div className="w-full">
                <div>
                  <SkeletonBones
                    height="h-10"
                    width="w-[32rem]"
                    display="flex"
                    justify="justify-between"
                  />
                </div>
                <div className="mt-2">
                  <SkeletonBones
                    height="h-5"
                    width="w-60"
                    display="flex"
                    justify="justify-between"
                  />
                </div>

                <div className="mt-10">
                  <SkeletonBones
                    height="h-5"
                    width="w-28"
                    display="flex"
                    justify="justify-between"
                  />
                </div>
              </div>
            ) : (
              <>
                <PrecoPaginaInfo
                  data={dataComics}
                  formatacao={formattedPrice}
                />
              </>
            )}

            {!dataComics?.thumbnail?.path ? (
              <>
                <div className="flex gap-5 mt-5">
                  <div className="">
                    <SkeletonBones
                      height="h-16"
                      width="w-36"
                      display="flex"
                      justify="justify-between"
                    />
                  </div>
                  <div className="">
                    <SkeletonBones
                      height="h-16"
                      width="w-32"
                      display="flex"
                      justify="justify-between"
                    />
                  </div>
                </div>
                <div className="mt-5">
                  <SkeletonBones
                    height="h-40"
                    width="w-96"
                    display="flex"
                    justify="justify-between"
                  />
                </div>
              </>
            ) : (
              <>
                <AdicionarCarrinhoComponente
                  handleRemoverValor={handleRemoverValor}
                  quantidade={quantidade}
                  setQuantidade={setQuantidade}
                  handleComprar={handleComprar}
                  handleAdicionarValor={handleAdicionarValor}
                />

                <CepComponente
                  handleData={handleCapturarDataCep}
                  handleCep={handleCapturarCep}
                  handleFrete={handleSelecionarFrete}
                />
              </>
            )}
          </div>
        </div>
      </ContainerItem>
      {!dataComics?.pageCount ? (
        <>
          <div className="mt-8">
            <SkeletonBones
              height="h-24"
              width="w-full"
              display="flex"
              justify="justify-between"
            />
          </div>
        </>
      ) : (
        <>
          <FaixaInfoProduto dataItem={dataComics} />
        </>
      )}

      <ContainerItem>
        <ConteudoInfoProduto data={dataComics} />

        <hr className="mt-10"></hr>
        <div className="py-5 mt-5">
          <div className="mb-4 text-white uppercase font-extrabold text-xl md:text-3xl sm:text-xl">
            {MESSAGES.PAGE_PRODUTO_INFO.VEJA_MAIS_OPCOES}
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
