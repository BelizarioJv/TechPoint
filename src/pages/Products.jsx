import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import products from "../database.json";
import { ShoppingCart, Plus } from "lucide-react";

export function Products() {
  const { addToCart } = useContext(CartContext);

  // Agrupar por categoria
  const groupedByCategory = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});

  const [selectedCategory, setSelectedCategory] = useState(null);

  const displayedProducts = selectedCategory
    ? groupedByCategory[selectedCategory]
    : products;

  return (
    <section className="p-4 md:p-8">
      {/* HEADER */}
      <div className="flex flex-col items-center justify-center gap-4 mt-5 mb-10 bg-slate-300 text-center p-4 md:p-6 rounded-lg shadow-lg shadow-black/50 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl text-blue-400">
          Todos os produtos
        </h2>
        <p className="text-sm text-white">Confira todas as nossas ofertas.</p>
      </div>

      {/* LAYOUT */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* ASIDE */}
        <aside className="w-full lg:w-64 bg-white p-4 md:p-6 rounded-lg shadow-lg h-fit lg:sticky lg:top-10">
          <h3 className="text-xl md:text-2xl font-bold mb-4 text-slate-800">
            Categorias
          </h3>

          <ul className="flex lg:flex-col gap-2 overflow-x-auto">
            <li>
              <button
                onClick={() => setSelectedCategory(null)}
                className={`whitespace-nowrap py-2 px-4 rounded text-sm transition-colors ${
                  selectedCategory === null
                    ? "bg-blue-500 text-white font-semibold"
                    : "bg-slate-200 text-slate-700 hover:bg-slate-300"
                }`}>
                ✓ Todos ({products.length})
              </button>
            </li>

            {Object.keys(groupedByCategory).map((category) => (
              <li key={category}>
                <button
                  onClick={() => setSelectedCategory(category)}
                  className={`whitespace-nowrap py-2 px-4 rounded text-sm transition-colors ${
                    selectedCategory === category
                      ? "bg-blue-500 text-white font-semibold"
                      : "bg-slate-200 text-slate-700 hover:bg-slate-300"
                  }`}>
                  {category} ({groupedByCategory[category].length})
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* MAIN */}
        <main className="flex-1">
          <div className="bg-slate-300 p-4 md:p-8 rounded-lg shadow-lg">
            <h2 className="text-xl md:text-2xl font-bold mb-6 text-slate-800">
              {selectedCategory ? selectedCategory : "Todos os Produtos"}
            </h2>

            {/* GRID */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {displayedProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex flex-col bg-white p-4 md:p-6 rounded-lg shadow-lg hover:shadow-blue-400/50 transition-shadow duration-300">
                  {product.image && (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-40 md:h-48 object-contain mb-4"
                    />
                  )}

                  <li className="flex flex-col gap-3 flex-1">
                    <div className="flex-1">
                      <h4 className="font-semibold text-center text-sm line-clamp-2">
                        {product.name}
                      </h4>

                      <p className="text-xs text-gray-500 text-center mt-1">
                        {product.category}
                      </p>
                    </div>

                    <p className="text-lg font-bold text-green-600 text-center">
                      R$ {product.price.toFixed(2)}
                    </p>

                    {/* BOTÕES */}
                    <div className="flex flex-col gap-2 mt-2 xl:flex-row">
                      <Link to={`/products/${product.id}`}>
                        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded text-xs md:text-sm transition">
                          Ver
                        </button>
                      </Link>

                      <button
                        onClick={() => addToCart(product)}
                        className="flex justify-center items-center gap-1 w-full bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded text-xs md:text-sm transition">
                        <Plus size={16} />
                        Adicionar ao Carrinho
                      </button>

                      <Link to="/cart">
                        <button
                          onClick={() => addToCart(product)}
                          className="flex justify-center items-center gap-1 w-full bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded text-xs md:text-sm transition">
                          <ShoppingCart size={16} />
                        </button>
                      </Link>
                    </div>
                  </li>
                </div>
              ))}
            </ul>

            {displayedProducts.length === 0 && (
              <p className="text-center text-gray-600 mt-8">
                Nenhum produto encontrado.
              </p>
            )}
          </div>
        </main>
      </div>
    </section>
  );
}
