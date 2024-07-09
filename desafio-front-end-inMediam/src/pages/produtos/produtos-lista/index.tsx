import React, { useState, useEffect, useCallback } from "react";
import ContainerItem from "../../../components/container";
import CardItem from "../../../components/cards-item";
import FrasesHomeComponente from "../../../components/frases-Home";
import { bgWhite } from "../../../utils/mocks/bg-white";
import { useLocation } from "react-router-dom";
import Paginacao from "../../../components/paginacao/paginacao";
import useProductListService from "../../../service/product-list-service";
import CardRadioItem from "../../../components/card-radio-items";

const ProductList = () => {
  const [totalItens, setTotalItens] = useState(0);
  const [limite, setLimite] = useState(20);
  const [dataCardItem, setDataCardItem] = useState([]);
  const [dataRadioItem, setRadioItem] = useState([]);
  const idsDefault = {
    characters: 1011334,
    series: 29696,
  };

  const [resourceId, setResourceId] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  const parametroUrl = useLocation();
  const parametroArray = parametroUrl.pathname.split("/");

  const serviceProductList = useProductListService();

  useEffect(() => {
    if (parametroArray.length > 2) {
      setResourceId(parseInt(parametroArray[2]));
    }
  }, [parametroArray]);

  const resourceType = parametroArray.length > 1 ? parametroArray[1] : "";

  const getAllItems = useCallback(
    async (page = 0, limit = 20) => {
      try {
        let cardItemData;
        let cardRadioItem = await serviceProductList.getACategoriesTodas(
          resourceType,
          limit,
          page
        );
        setRadioItem(cardRadioItem?.data?.results || []);

        if (resourceType === "comics") {
          cardItemData = await serviceProductList.getACategoriesTodas(
            resourceType,
            limit,
            page
          );
        } else if (resourceType === "characters" || resourceType === "series") {
          const defaultIds = idsDefault;

          const resolvedResourceId =
            parametroArray[2] === undefined
              ? defaultIds[resourceType]
              : parseInt(parametroArray[2]);

          cardItemData = await serviceProductList.getCategoriesID(
            resourceType,
            resolvedResourceId,
            limit,
            page
          );
        }

        setTotalItens(cardItemData?.data?.total || 0);
        setDataCardItem(cardItemData?.data?.results || []);
      } catch (err) {
        console.error("Erro ao buscar itens:", err);
      }
    },
    [serviceProductList, resourceType, parametroArray]
  );

  useEffect(() => {
    getAllItems(currentPage, limite);
  }, [currentPage, limite, parametroArray]);

  const handleChangePage = (page) => {
    setCurrentPage(page - 1);
  };

  const handleSetLimit = (limitao) => {
    setLimite(limitao);
    setCurrentPage(0);
  };

  return (
    <>
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
            {resourceType !== "comics" && (
              <>
                <div className="w-full mt-12 md:mt-12 sm:mt-12 mb-5 z-20">
                  <CardRadioItem
                    dataItem={dataRadioItem}
                    categorias={resourceType}
                  />
                </div>
              </>
            )}

            <div className="w-full mt-12 md:mt-12 sm:mt-12 mb-5 z-20">
              <FrasesHomeComponente frase={`Choose the best ${resourceType}`} />
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
                  onLimitChange={handleSetLimit}
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
