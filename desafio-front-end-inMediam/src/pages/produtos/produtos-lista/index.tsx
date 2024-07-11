import React, { useState, useEffect, useCallback } from "react";
import ContainerItem from "../../../components/container";
import CardItem from "../../../components/cards-item";
import FrasesHomeComponente from "../../../components/frases-Home";
import { bgWhite } from "../../../utils/mocks/bg-white";
import { useLocation } from "react-router-dom";
import Paginacao from "../../../components/paginacao/paginacao";
import useProductListService from "../../../service/product-list-service";
import CardRadioItem from "../../../components/card-radio-items";
import Loading from "../../../components/loading";
import { MESSAGES } from "../../../utils/messages";

const ProductList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [totalItens, setTotalItens] = useState(0);
  const [limite, setLimite] = useState(20);
  const [dataCardItem, setDataCardItem] = useState([]);
  const [dataRadioItem, setRadioItem] = useState([]);
  const [resourceId, setResourceId] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  const idsDefault = {
    characters: 1011334,
    series: 29696,
  };

  const parametroUrl = useLocation();
  const parametroArray = parametroUrl.pathname.split("/");
  const tipoPagina = parametroArray.length > 1 ? parametroArray[1] : "";

  useEffect(() => {
    if (parametroArray.length > 2) {
      setResourceId(parseInt(parametroArray[2]));
    }
  }, [parametroArray]);

  const serviceProductList = useProductListService();

  const getAllItems = useCallback(
    async (page = 0, limit = 20) => {
      setIsLoading(true);
      try {
        let cardItemData;
        let cardRadioItem = await serviceProductList.getACategoriesTodas(
          tipoPagina,
          limit,
          page
        );
        setRadioItem(cardRadioItem?.data?.results || []);

        if (tipoPagina === "comics") {
          cardItemData = await serviceProductList.getACategoriesTodas(
            tipoPagina,
            limit,
            page
          );
        } else if (tipoPagina === "characters" || tipoPagina === "series") {
          const resolvedResourceId =
            parametroArray[2] === undefined
              ? idsDefault[tipoPagina]
              : parseInt(parametroArray[2]);

          cardItemData = await serviceProductList.getCategoriesID(
            tipoPagina,
            resolvedResourceId,
            limit,
            page
          );
        }

        setTotalItens(cardItemData?.data?.total || 0);
        setDataCardItem(cardItemData?.data?.results || []);
      } catch (err) {
        console.error("Erro ao buscar itens:", err);
      } finally {
        setIsLoading(false);
      }
    },
    [serviceProductList, tipoPagina, idsDefault]
  );

  useEffect(() => {
    getAllItems(currentPage, limite);
  }, [currentPage, limite, tipoPagina, resourceId]);

  const handleChangePage = (page) => {
    setCurrentPage(page - 1);
  };

  const handleSetLimite = (limitao) => {
    setLimite(limitao);
    setCurrentPage(0);
  };

  return (
    <>
      {isLoading && <Loading />}
      <div className="w-full mt-24 md:mt-20 sm:mt-24">
        <div
          className="relative w-full h-72 -z-20"
          style={{
            backgroundImage: `
              linear-gradient(to top, #171717 25%, transparent 100%),
              linear-gradient(to top, #171717 20%, transparent 100%),
              url(${bgWhite.imagemCartoon})
            `,
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        ></div>
        <div className="z-20 -mt-44">
          <ContainerItem>
            {tipoPagina !== "comics" && (
              <>
                <div className="w-full mt-12 md:mt-12 sm:mt-12 mb-5 z-20">
                  <CardRadioItem
                    dataItem={dataRadioItem}
                    categorias={tipoPagina}
                  />
                </div>
              </>
            )}

            <div className="w-full mt-12 md:mt-12 sm:mt-12 mb-5 z-20">
              <FrasesHomeComponente
                frase={`${MESSAGES.TITULO_PAG_PRODUTO_LISTA} ${tipoPagina}`}
              />
            </div>
            <div className="w-full grid gap-4 px-2 mt-15 grid-cols-2 sm:grid-cols-2 md:grid-cols-5">
              {dataCardItem?.map((item) => (
                <CardItem key={item.id} dataItem={item} />
              ))}
            </div>

            {totalItens > limite && (
              <div className="mt-10 flex w-full justify-center">
                <Paginacao
                  QuantidadeItems={totalItens}
                  onChangePage={handleChangePage}
                  numeroTotalDePagina={Math.ceil(totalItens / limite)}
                  onLimitChange={handleSetLimite}
                />
              </div>
            )}
          </ContainerItem>
        </div>
      </div>
    </>
  );
};

export default ProductList;
