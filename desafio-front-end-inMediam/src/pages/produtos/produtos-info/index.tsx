import React, { useState } from "react";
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

const ProdutoInfo = () => {
  const [quantidade, setQuantidade] = useState(0);
  const [chooseImage, setChooseImage] = useState("");
  const [selectedTab, setSelectedTab] = useState("description");

  const item: CardItemProps[] = livrosMock;

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

  return (
    <>
      <ContainerItem>
        <div className="mt-24 flex flex-col md:flex-row gap-14 px-5 md:px-0 sm:px-5 justify-center">
          <div className="flex gap-0 md:gap-16 sm:gap-0">
            <div
              className="w-[40rem]  bg-orange-400 h-[35rem] sm:h-[35rem] md:h-[60rem]"
              style={{
                backgroundColor: "orange",
                backgroundImage: `url(https://i.annihil.us/u/prod/marvel/i/mg/9/30/4bc64df4105b9.jpg)`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>

          <div>
            <h2 className="font-bold text-3xl mt-0 sm:mt-0 md:mt-3 uppercase text-white">
              Homem Aranha
            </h2>
            <p className="font-medium text-md w-96 text-gray-300 uppercase">
              Aventura, ação e ficção científica. O Homem Aranha é um dos
              grandes!
            </p>
            <p className="font-medium text-md w-96 text-white uppercase mt-4">
              John Aranha{" "}
            </p>
            <div className="mt-5">
              <h5 className="font-bold text-2xl text-orange-500">R$ 189,00</h5>
              <p className="font-bold text-red-500">ou 9x de R$ 21,00</p>
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
              <FiBook size={24} /> Páginas: 96
            </p>
            <p className="font-bold text-white block sm:block md:flex gap-2">
              <FiVideo size={24} /> Serie: Serie do josé
            </p>
            <p className="font-bold text-white block sm:block md:flex gap-2">
              <FiGlobe size={24} /> Idioma: English
            </p>
            <p className="font-bold text-white block sm:block md:flex gap-2">
              <GiWeight size={24} /> Peso: 96
            </p>
          </div>
        </ContainerItem>
      </div>

      <ContainerItem>
        <div className="mt-10 w-full px-5 md:px-0 sm:px-5 md:w-5/6 sm:w-full">
          <h5 className="text-white font-bold text-4xl uppercase">Content</h5>
          <p className="text-gray-300 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aut
            fugiat modi, dignissimos nam consequuntur aperiam ipsa commodi amet
            quaerat quasi, voluptate, repellat deleniti autem! Neque quia sed
            perspiciatis id. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Eos aut fugiat modi, dignissimos nam consequuntur aperiam ipsa
            commodi amet quaerat quasi, voluptate, repellat deleniti autem!
            Neque quia sed perspiciatis id. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Eos aut fugiat modi, dignissimos nam
            consequuntur aperiam ipsa commodi amet quaerat quasi, voluptate,
            repellat deleniti autem! Neque quia sed perspiciatis id.
            <br></br>
            <br></br>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aut
            fugiat modi, dignissimos nam consequuntur aperiam ipsa commodi amet
            quaerat quasi, voluptate, repellat deleniti autem! Neque quia sed
            perspiciatis id.
            <br></br>
            <br></br>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aut
            fugiat modi, dignissimos nam consequuntur aperiam ipsa commodi amet
            quaerat quasi, voluptate, repellat deleniti autem! Neque quia sed
            perspiciatis id.
          </p>
        </div>
        <div className="mt-10 w-full px-5 md:px-0 sm:px-5 md:w-5/6 sm:w-full">
          <h5 className="text-amber-400 font-bold text-4xl uppercase">
            Creator
          </h5>
          <p className="text-gray-300 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aut
            fugiat modi, dignissimos nam consequuntur aperiam ipsa commodi amet
            quaerat quasi, voluptate, repellat deleniti autem! Neque quia sed
            perspiciatis id.
          </p>
        </div>
        <hr className="mt-10"></hr>
        <div className="py-5 mt-5">
          <div className="w-full  mb-5">
            <FrasesHomeComponente frase={MESSAGES.FRASE_2_HOME} />
          </div>
          <div className="w-full flex grid-cols-2 sm:grid-cols-2 md:flex gap-4 px-2">
            <SwiperComponent quantItemMobile={2} quantItems={5}>
              {item.map((item) => (
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
