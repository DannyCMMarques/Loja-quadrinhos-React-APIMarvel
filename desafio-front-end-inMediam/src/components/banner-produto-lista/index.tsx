import React from 'react'

const BannerProdutoLista = ({categoria}:any) => {
 let imagem = ""
 switch (categoria) {
    case "characters":
      return "../../assets/comics-black-white-bg.jpg";
    case "series":
      return "";
    case "comics":
      return "";
    case "creators":
      return "";
    default:
      return "../../assets/comics-black-white-bg.jpg";
  }
    return (
    <div
          className="relative w-full h-72"
          style={{
            backgroundImage: `
                linear-gradient(to top, #171717 25%, transparent 100%),
                linear-gradient(to top, #171717 20%, transparent 100%),
                url(${imagem})
            `,
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        ></div>
  )
}

export default BannerProdutoLista