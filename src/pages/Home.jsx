import { Link } from "react-router-dom";
import smartphone from "../assets/imgs/smartphone.webp";
import notebook from "../assets/imgs/notebook.webp";
import tv from "../assets/imgs/tv.webp";
import headphone from "../assets/imgs/headphone.webp";
import console from "../assets/imgs/console.webp";
import smartwatch from "../assets/imgs/smartwatch.webp";

export function Home() {
  return (
    <>
      {/* Texto inicial */}
      <section className="bg-banner w-full-dvh h-200 bg-cover bg-center flex flex-col items-center text-center p-10 ">
        <h1 className="text-3xl ">
          Bem-vindo á{" "}
          <span className="text-blue-600 font-bold">TechPoint Eletrônicos</span>
          , sua loja de tecnologia de confiança!
        </h1>
        <p className="text-white text-2xl mt-4">
          Os melhores produtos eletronicôs para você
        </p>
      </section>

      {/* Produtos em destaque */}
      <section className="flex flex-col items-center justify-center bg-slate-300 p-10 rounded-lg m-8 shadow-lg shadow-black/50 ">
        <h2 className="text-blue-400 font-bold text-3xl">
          Produtos em Destaque
        </h2>
        <div className=" flex flex-col lg:grid lg:grid-cols-3 lg:grid-rows-2 gap-10 mt-7 justify-center items-center">
          <Link to="/products">
            <div className="bg-white p-4 rounded-lg shadow-lg w-64 hover:shadow-blue-400/50 transition-shadow duration-500">
              <h3 className="text-xl font-bold">Smartphones</h3>
              <img src={smartphone} alt="imagem smartphones" className="p-5" />
            </div>
          </Link>

          <Link to="/products">
            <div className="bg-white p-4 rounded-lg shadow-lg w-64 hover:shadow-blue-400/50 transition-shadow duration-500">
              <h3 className="text-xl font-bold">Tv's</h3>
              <img src={tv} alt="imagem tv" className="p-5" />
            </div>
          </Link>

          <Link to="/products">
            <div className="bg-white p-4 rounded-lg shadow-lg w-64 hover:shadow-blue-400/50 transition-shadow duration-500">
              <h3 className="text-xl font-bold">Consoles</h3>
              <img src={console} alt="imagem console" className="p-5" />
            </div>
          </Link>

          <Link to="/products">
            <div className="bg-white p-4 rounded-lg shadow-lg w-64 hover:shadow-blue-400/50 transition-shadow duration-500">
              <h3 className="text-xl font-bold">Relogios</h3>
              <img src={smartwatch} alt="imagem relogio" className="p-5" />
            </div>
          </Link>

          <Link to="/products">
            <div className="bg-white p-4 rounded-lg shadow-lg w-64 hover:shadow-blue-400/50 transition-shadow duration-500">
              <h3 className="text-xl font-bold">Notebooks</h3>
              <img src={notebook} alt="imagem notebook" className="p-4" />
            </div>
          </Link>

          <Link to="/products">
            <div className="bg-white p-4 rounded-lg shadow-lg w-64 hover:shadow-blue-400/50 transition-shadow duration-500">
              <h3 className="text-xl font-bold">Fone de Ouvido</h3>
              <img src={headphone} alt="imagem headphone" className="p-5" />
            </div>
          </Link>
        </div>{" "}
      </section>
    </>
  );
}
