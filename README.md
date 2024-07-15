<img alt="Marvel" src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Marvel_Logo.svg" width="20%" />

# Marvel Comics Store

Bem-vindo ao repositório do **Marvel Comics Store**, um projeto desenvolvido para a criação de uma loja virtual de quadrinhos da Marvel utilizando a API Oficial da Marvel.

## Índice
<ol>
 <a href="#instalação"> <li> Instalação </li> </a>
  <a href="#primeiros-passos"> <li> Primeiros Passos </li> </a>
  <a href= "#tecnologias-utilizadas"><li>Tecnologias Utilizadas</li></a>
  <a href="#componentes-genericos"><li>Componentes Genericos </li></a>
</ol>


## ⚙️ Instalação

(Adicione aqui as instruções de instalação)

---

## 🚀 Primeiros Passos

### Conhecendo a API da Marvel

Antes de começar a executar esse projeto, é essencial ler a [documentação](https://developer.marvel.com/docs) da API da Marvel. Nela, encontrei informações extremamente úteis para o desenvolvimento desse projeto, como:

#### 1. **Chaves Privadas, Públicas e o Hash** 📚

- É necessário adquirir primeiramente uma chave pública e uma chave privada.
- A partir dessas chaves, pode-se obter o hash que é gerado a partir do `timeStamp + privateKey + publicKey`.
- Só assim é possível obter uma chamada válida dessa API.

> **Nota:** essas chaves possuem um limite de chamadas disponível.

<div align="center">
  <img src="https://github.com/user-attachments/assets/89a34193-cb8d-4c71-88ee-c71b7f6b3b96" width="200px" />
</div>

#### 2. **Endpoints** 🔗

A documentação da API da Marvel disponibiliza os endpoints juntamente com explicações detalhadas.
- A partir do endpoint `/v1/public/comics`, é possível obter uma lista dos quadrinhos da Marvel, juntamente com informações importantes como thumbnail, array com preços e títulos.

  <div align="center">
    <img src="https://github.com/user-attachments/assets/2b2b6354-2438-49aa-b412-e9a3f6fd2d8d" width="300px" />
  </div>

- Também é possível buscar um único quadrinho por ID através do endpoint `/v1/public/comics/{comicId}`, o que foi extremamente útil para construir uma página de visualização individual da HQ que exibisse o título do HQ, preço, série à qual pertence, descrição, informação dos criadores, etc.

  <div align="center">
    <img src="https://github.com/user-attachments/assets/0e27a275-145f-4f26-a641-0e81150a8715" width="300px" />
  </div>

- Outro fato importante é que na API da Marvel existe a possibilidade de buscar listas de quadrinhos filtradas por ID de personagens, séries, eventos, histórias e criadores. Saber disso foi essencial para elaborar meu menu, que foi dividido entre comics, onde exibe todos os quadrinhos, e em characters e series, que apresentam os quadrinhos somente do personagem ou da série escolhida.

  <div align="center">
    <img src="https://github.com/user-attachments/assets/65517728-25e8-47a0-89c1-721c2e58673d" width="200px" />
  </div>

> **Nota:** Nesse ponto, já comecei a ter várias ideias de como organizar meu site. Ao analisar os dados que vinham da API, descobri que muitas HQs não possuíam nem thumbnail nem imagens. Além disso, muitas não tinham preço e informações como descrição e criadores vinham em inglês. Então, para manter a padronização, resolvi adotar a linguagem do site como inglês e adotei o valor de $5.99 para quadrinhos sem preço informado.

#### 3. **Parâmetros**

Uma informação importante que a documentação nos informa são os parâmetros. Dentre os muitos apresentados, gostaria de destacar 3 que exerceram papel fundamental nesse projeto:

- **offset** (int, opcional): O deslocamento solicitado (número de resultados ignorados) da chamada.
- **limit** (int, opcional): O limite do resultado solicitado.
- **total** (int, opcional): O número total de recursos disponíveis dado o conjunto de filtros atual.

> Por meio desses parâmetros, foi possível executar a paginação, possibilitando que o usuário possa definir o número de itens retornados por páginas de 20 a 100 itens e permitir o rápido deslocamento entre as páginas.

<div align="center">
  <img src="https://github.com/user-attachments/assets/a9998a9e-5dec-47e4-b881-9dd8ad8dd8e3" width="200px" />
</div>

---

## 🛠️ Tecnologias Utilizadas

#### 1. ReactJs com Vite e TypeScript

#### 2. Estilização com Tailwind CSS

- Possibilitou a construção de interfaces de usuário (UI) de maneira rápida e esteticamente bonita.
- Possibilitou criar layouts responsivos.

<div align="center">
  <img src="https://github.com/user-attachments/assets/c09c14b1-c3e4-412b-b844-e451cecdd0b0" width="200px" />
  <img src="https://github.com/user-attachments/assets/7950b37d-1f28-4cca-97eb-55d277ba3bd1" width="200px" />
  <img src="https://github.com/user-attachments/assets/b3f5625e-ee1c-432c-911c-d8a86cf378b8" width="200px" />
</div>

#### 3. Utilização das libs react-hook-form e Zod

- Facilitou a realização do checkout para finalização da compra com cartão de crédito.
- Possibilitou a realização de validação de formulários.

<div align="center">
  <img src="https://github.com/user-attachments/assets/900ce3d1-96f3-400b-8f8a-a3637fd22bc9" width="200px" />
  <img src="https://github.com/user-attachments/assets/7dd3c249-1bf4-41f6-b0ec-b5b544e216c4" width="200px" />
  <img src="https://github.com/user-attachments/assets/1e7b0afe-1dc7-41ea-b6d9-cfcb57e63297" width="200px" />
</div>

#### 4. Esquema de navegação de rotas com react-router-dom

#### 5. Context API

- Foram usados o `UseItensCarrinhoContext` e `UseItensHistoricoContext`, que eram usados para pegar o que era armazenado no localStorage, no caso itens do carrinho de compra e frete e os itens armazenados no histórico de compras, e foram usados em diversos componentes.

<div align="center">
  <img src="https://github.com/user-attachments/assets/656c4939-c8ca-4030-aef7-ebdffb96eec9" width="200px" />
  <img src="https://github.com/user-attachments/assets/6383a569-ef82-4b36-a167-a7519600d0e8" width="200px" />
  <img src="https://github.com/user-attachments/assets/3eb70f01-5525-4676-af9b-3fc78a20019c" width="200px" />
</div>

#### 6. Custom Hooks

- Foram criados custom hooks para formatar os preços que seriam exibidos.
- Para verificar se o número do cartão de crédito inserido era válido e qual a marca dele.

<div align="center">
  <img src="https://github.com/user-attachments/assets/5cec5b7e-d141-44f9-877f-e4e0d69d6bf6" width="200px" />
</div>

 ####  7. API de CEP
 - Foi utilizada uma api de CEP que retorna número de CEP, nome de cidade,estados e ruas para simular um frete.
   ![image](https://github.com/user-attachments/assets/08437169-5ad2-47e3-b265-092b4244105c)

---

## Componentização Genérica 

> A utilização de componentes genéricos possibilitou que um mesmo componente conseguisse ser usado em varios locais diferentes, o que gerou maior otimização na hora de montar o layout do site  e facilitou tambem a manuntenção eficiente do site. Alguns componentes genericos utilizados foram:

 #### Componente Swiper 

 - Foi utilizado em home, comics,series,caracteres e nas paginas de produtos individuais
 - Responsavel por fornecer uma forma interativa e intuitiva de exibir as HQs
   ![image](https://github.com/user-attachments/assets/149d3031-bfa5-443e-b3e3-79d0545b798c)

#### Componente Modal

- o mesmo Modal foi utilizado na pagina do carrinho nos formulario de compra e para exibir o historico de itens
- Um mesmo componente poderia ter 3 tamanhos diferentes e apresentar ou nao botao de fechar

#### Componente Skeleton
- foi utilizado o componente Skeleton em diferentes partes do site e foi ajustado em diferentes larguras e alturas inclusive redondo
- Possibilitou que enquanto os dados carregam a pagina continua com um layout bonito e animado.

![bloggif_6694d845bc11b](https://github.com/user-attachments/assets/c88a9d25-1d75-4c34-9b26-1f2997e2f0ac)

#### Card-Itens

-Foi utilizado em todas as paginas apenas mudava a informação do preço e seu background de acordo com HQ que ele apresentava

![image](https://github.com/user-attachments/assets/f995e733-7478-4679-8d9a-f46d582089b3)


#### Paginas de Listagem de Produtos
- uma mesma pagina foi usada para Comics,Series e Characteres, as mudanças necessárias ocorriam de forma dinamica de acordo com o tipo de pagina

 ![image](https://github.com/user-attachments/assets/c7c58a17-250e-4d9b-a3c4-272c94961617)
![image](https://github.com/user-attachments/assets/5c306ba6-33a1-4205-ba3c-57afa0dee0d9)
![image](https://github.com/user-attachments/assets/a7a9e0b1-7ce7-407c-9a64-16d7eec1ace3)




