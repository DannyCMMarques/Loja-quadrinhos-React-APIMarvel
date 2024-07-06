import React, { useState, useEffect } from "react";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import logo from "/Marvel_Logo.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import menuContentItens from "../../utils/content/menuContentItens";
const Navbar = () => {
  const [activePath, setActivePath] = useState(window.location.pathname);
  const [menuOpen, setMenuOpen] = useState(false);

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getNavLinkClass = (path) => {
    return activePath === path
      ? "text-orange-400 font-bold hover:text-orange-400 hover:font-bold"
      : "";
  };
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="fixed bg-black top-0 w-full items-center px-2 py-4 h-auto md:h-16 sm:h-auto shadow-sm z-50 shadow-md">
        <div className="w-full items-center md:flex justify-between max-w-7xl mx-auto mb-2">
          {windowSize.width >= 768 ? (
            <>
              <a href="/">
                <img
                  className="pl-1 w-12"
                  style={{ width: 88 }}
                  src={logo}
                  alt="Logo"
                />
              </a>

              <nav className="flex gap-6 text-white text-lg">
                {menuContentItens.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    className={`hover:text-red-800 hover:font-bold ${getNavLinkClass(
                      item.href
                    )}`}
                  >
                    {item.title}
                  </a>
                ))}
              </nav>

              <div className="flex gap-3 items-baseline">
                <a className="flex gap-2 text-lg" href="/dashboard">
                  <FiHeart
                    size={26}
                    className="hover:text-red-800 text-white"
                  />
                </a>

                <a className="flex gap-2 text-lg" href="#"></a>

                <a className="flex gap-4 text-lg" href="/carrinho-de-compra">
                  <FiShoppingCart
                    size={26}
                    className="hover:text-red-800 text-white"
                  />
                  <div className="bg-red-800 rounded-full h-5 px-2 right-5 items-center text-center text-sm text-white relative">
                    <p>1</p>
                  </div>
                </a>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center gap-4 px-5 w-full justify-between">
                <div className="block" onClick={toggleMenu}>
                  {menuOpen ? (
                    <MdClose size={25} className="text-white font-extrabold" />
                  ) : (
                    <RxHamburgerMenu
                      size={25}
                      className="text-white font-extrabold"
                    />
                  )}
                </div>
                {menuOpen && (
                  <nav className="flex flex-col gap-4 text-white text-lg text-center">
                    {menuContentItens.map((item) => (
                      <a
                        key={item.id}
                        href={item.href}
                        className={`hover:text-red-800 hover:font-bold ${getNavLinkClass(
                          item.href
                        )}`}
                      >
                        {item.title}
                      </a>
                    ))}
                  </nav>
                )}

                <a href="/">
                  <img
                    className="pl-1 w-12"
                    style={{ width: 80 }}
                    src={logo}
                    alt="Logo"
                  />
                </a>

                <div className="flex items-baseline gap-4">
                  <a className="flex gap-4 text-lg" href="/carrinho-de-compra">
                    <FiShoppingCart
                      size={22}
                      className="hover:text-red-800 hover:font-bold  text-white"
                    />
                    <div className="bg-red-800 rounded-full h-5 px-2 right-5 items-center text-center text-sm text-white relative">
                      <p>1</p>
                    </div>
                  </a>
                  <a className="flex gap-4 text-lg" href="/dashboard">
                    <FiHeart
                      size={22}
                      className="hover:text-red-800 hover:font-bold  text-white"
                    />
                  </a>
                </div>
              </div>
            </>
          )}
        </div>
      </header>
    </>
  );
};

export default Navbar;
