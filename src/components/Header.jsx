import logo from "../assets/imgs/logo.png";
import { ShoppingCart, House, Info, PackageSearch } from "lucide-react";
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";

// Link e um componente para substituir a tag ancora do HTML(a)
export function Header() {
  const { totalItems } = useContext(CartContext);
  const [isAnimating, setIsAnimating] = useState(false);

  const itensInCart = totalItems();

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 300);
    return () => clearTimeout(timer);
  }, [itensInCart]);

  return (
    <header className="flex flex-col justify-center items-center bg-white m-4 rounded-lg shadow-lg shadow-black/50 lg:flex-row sm:justify-evenly">
      <div>
        <img src={logo} alt="logo TechPoint" className="w-64 h-auto m-4" />
      </div>

      <nav className="flex flex-col items-center gap-5 text-2xl text-gray-700 font-serif m-6 lg:flex-row">
        <Link
          className="flex flex-row border-b-2 border-transparent hover:border-b-blue-400 gap-4"
          to="/">
          <House />
          Home
        </Link>
        <Link
          className="flex flex-row border-b-2 border-transparent hover:border-b-blue-400 gap-4"
          to="/About">
          <Info />
          Sobre
        </Link>
        <Link
          className="flex flex-row border-b-2 border-transparent hover:border-b-blue-400 gap-4"
          to="/products">
          <PackageSearch />
          Produtos
        </Link>
      </nav>

      <div className=" text-2xl text-blue-400  m-6">
        <Link to="/cart" className="flex flex-row gap-5 items-center">
          <ShoppingCart size={40} />
          <p
            className={`transition-transform duration-300 ${
              isAnimating ? "scale-125" : "scale-100"
            }`}>
            {itensInCart}
          </p>
        </Link>
      </div>
    </header>
  );
}
