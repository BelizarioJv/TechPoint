import logo from "../assets/imgs/logo.png";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

// Link e um componente para substituir a tag ancora do HTML(a)
export function Header() {
  return (
    <header className="flex flex-row justify-evenly items-center bg-white m-4 rounded-lg shadow-lg shadow-black/50">
      <div>
        <img src={logo} alt="logo TechPoint" className="w-64 h-auto m-4" />
      </div>

      <nav className="flex items-center gap-5 text-2xl text-gray-700">
        <Link
          className="border-b-2 border-transparent hover:border-b-blue-400"
          to="/admin">
          Home
        </Link>
        <Link
          className="border-b-2 border-transparent hover:border-b-blue-400"
          to="/About">
          Sobre
        </Link>
        <Link
          className="border-b-2 border-transparent hover:border-b-blue-400"
          to="/products">
          Produtos
        </Link>
      </nav>

      <div className="text-2xl text-blue-400  m-6">
        <Link to="/cart">
          <ShoppingCart size={40} />
        </Link>
      </div>
    </header>
  );
}
