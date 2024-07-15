
  <img alt="Marvel"  src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Marvel_Logo.svg" width="20%" />



# 📘 Marvel Comics Store 

Bem-vindo ao repositório do **Marvel Comics Store**, um projeto desenvolvido para a criação de uma loja de quadrinhos virtual da Marvel utilizando a API Oficial da Marvel.

## Índice

- [Instalação](#-instalação)
- [Primeiros Passos](#-primeiros-passos)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Implementação dos Requisitos](#-implementação-dos-requisitos)
- [Avaliação dos Critérios](#-avaliação-dos-critérios)
- [Extras](#-extras)
- [Screenshots](#-screenshots)
- [Contato](#-contato)

---
## ⚙️ Instalação


```bash
# Clone o repositório
git clone https://github.com/DannyCMMarques/desafio-front-end-InMediam.git



# Instale as dependências
npm install


# Inicie o servidor de desenvolvimento
npm run dev
```

##Primeiros Passos- Conhecendo a API da Marvel 

Antes de começar a executar esse projeto, foi essencial primeiramente ler a [documentação](https://developer.marvel.com/docs) da API da Marvel. Nela, encontrei informações extremamente úteis para o desenvolvimento desse projeto, como:

#### 1. **Chaves Privadas, Públicas e o Hash** 📚
   
- É necessário adquirir primeiramente uma chave pública e uma chave privada.
- A partir dessas chaves, pode-se obter o hash que é gerado a partir do `timeStamp+privateKey+publicKey`.
- Só assim é possível obter uma chamada válida dessa API.
#### Obs:essas chaves possuem um limite de chamada disponivel
![image](https://github.com/user-attachments/assets/89a34193-cb8d-4c71-88ee-c71b7f6b3b96)

#### 2. **Endpoints** 🔗
   
#### A documentação da API da Marvel disponibiliza os endpoints juntamente com explicações detalhadas.
- A partir do endpoint `/v1/public/comics`, é possível obter uma lista dos quadrinhos da Marvel, juntamente com informações importantes como thumbnail, array com preços e títulos.
  ![image](https://github.com/user-attachments/assets/2b2b6354-2438-49aa-b412-e9a3f6fd2d8d)

- Também é possível buscar um único quadrinho por ID através do endpoint `/v1/public/comics/{comicId}`, o que foi extremamente útil para construir Uma página de visualização individual da HQ que exibisse o titulo do HQ, preço, serie a qual esse pertence, descrição,informação dos criadores e etc.
![image](https://github.com/user-attachments/assets/0e27a275-145f-4f26-a641-0e81150a8715)

- Outro fato importante que na api da marvel existe a possibilidade de buscar listas de quadrinhos filtradas por um id de personagens,series,eventos,historias e criadores. Saber disso foi essencial para poder elaborar meu menu, que foi dividido  entre comics,onde exibe todos os quadrinhos e em caracters e series 
que apresentam os quadrinhos somente do personagem ou da serie escolhida
![image](https://github.com/user-attachments/assets/65517728-25e8-47a0-89c1-721c2e58673d)


#### Obs: Nesse ponto eu já comecei a ter várias ideias de como eu poderia organizar meu site e também ao analisar os dados que vinham da api  eu descobri foi que em geral muitas HQs nao possuiam nem thumbnail nem imagens.Além disso, descobri tambem que muitas nao tinha preço e informações como descrição e criadores vinham em ingles entao para vim de padronização resolvi adotar a linguagem do site como inglês e adotei que ao preço ser  seria retornado o valor 5.99

#### 3. **parâmetros**
 ####  Uma informação importante que a documentação nos informa sao acerca dos parametros, dentre os muitos apresentados gostaria de destacar 3 que exerceram papel fundamental nesse projeto:
 - offset ( int , opcional ): O deslocamento solicitado (número de resultados ignorados) da chamada .
 - limit ( int , opcional ): O limite do resultado solicitado.
 - total ( int , opcional ): O número total de recursos disponíveis dado o conjunto de filtros atual .
#### Por meio desses parametros foi possivel executar a paginação, possibilitando que o usuario possa definir o numero de itens retornardo por paginas de 20 a 100 itens e possibilitar o rapido deslocamento entre as paginas:
![image](https://github.com/user-attachments/assets/a9998a9e-5dec-47e4-b881-9dd8ad8dd8e3)

## Tecnologias Usadas: 

   ### 1- Foi utilizado ReactJs com Vite e TypeScript;

   ### 2- Estilização feita com  Tailwind CSS:
   -possibilitou a construção de uma interfaces de usuário (UI) de maneira rápida e  esteticamente bonita.
   - Possibilitou criar criar layouts responsivos.
     ![image](https://github.com/user-attachments/assets/c09c14b1-c3e4-412b-b844-e451cecdd0b0)
     ![image](https://github.com/user-attachments/assets/7950b37d-1f28-4cca-97eb-55d277ba3bd1)
     ![image](https://github.com/user-attachments/assets/98025a52-219a-4a6c-9998-9cb968a06e7f)

   ### 3- Utilização das libs react-hook-form e Zod:
   - O que facilitou na realização do checkout para finalização da compra com cartão de crédito.
   - Possibilitou a realização de validação de formularios.
     ![image](https://github.com/user-attachments/assets/900ce3d1-96f3-400b-8f8a-a3637fd22bc9)
     ![image](https://github.com/user-attachments/assets/7dd3c249-1bf4-41f6-b0ec-b5b544e216c4)


     



      



## 📝 Implementação dos Requisitos

Aqui está a lista dos requisitos implementados no projeto:

- **Requisito 1**: Listagem paginada das histórias em quadrinhos.
- **Requisito 2**: Exibição detalhada de cada quadrinho.
- **Requisito 3**: Busca por título de quadrinho.
- **Requisito 4**: Adição de quadrinhos ao carrinho de compras.
- **Requisito 5**: Finalização de compra com cálculo de preço total.

## ✔️ Avaliação dos Critérios

Avaliei o projeto com base nos seguintes critérios:

- **Funcionalidade**: Todos os requisitos funcionais foram implementados.
- **Usabilidade**: A interface é intuitiva e fácil de usar.
- **Performance**: O tempo de resposta das requisições está adequado.
- **Código**: O código está bem organizado e documentado.

## 🎁 Extras

Além dos requisitos básicos, adicionei as seguintes funcionalidades extras:

- **Autenticação de Usuário**: Permite login e registro de usuários.
- **Histórico de Compras**: Armazena o histórico de compras do usuário.
- **Sistema de Avaliações**: Usuários podem avaliar e comentar os quadrinhos.

## 📸 Screenshots

Adicione aqui algumas capturas de tela do seu projeto.

## 📞 Contato

Para mais informações, entre em contato:

- **Nome**: Seu Nome
- **Email**: seuemail@exemplo.com
- **LinkedIn**: [Seu LinkedIn](https://linkedin.com/in/seulinkedin)

---
