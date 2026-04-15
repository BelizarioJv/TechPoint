import { Link } from "react-router-dom";
import { useState } from "react";
import products from "../database.json";

//pagina de produtos , pegamdo os produtos do database e usando a funçao MAP para criar o layout para cada produto

export function Products() {
  // Agrupando produtos por categoria
  const groupedByCategory = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});

  const [selectedCategory, setSelectedCategory] = useState(null);

  // Filtrando produtos pela categoria selecionada
  const displayedProducts = selectedCategory
    ? groupedByCategory[selectedCategory]
    : products;

  return (
    <section className="p-8">
      <div className="flex flex-col items-center justify-center gap-4 mr-50 ml-50 mt-5 mb-20 bg-slate-300 text-center p-4 rounded-lg shadow-lg shadow-black/50">
        <h2 className="text-3xl text-blue-400">Todos os produtos</h2>
        <p className="text-sm text-white">Confira todas as nossas ofertas.</p>
      </div>

      <div className="flex gap-8">
        {/* ASIDE - FILTRO DE CATEGORIAS */}
        <aside className="w-64 bg-white p-6 rounded-lg shadow-lg h-fit sticky top-8">
          <h3 className="text-2xl font-bold mb-6 text-slate-800">Categorias</h3>
          <ul className="flex flex-col gap-2">
            {/* Botão "Todos" */}
            <li>
              <button
                onClick={() => setSelectedCategory(null)}
                className={`w-full text-left py-2 px-4 rounded transition-colors ${
                  selectedCategory === null
                    ? "bg-blue-500 text-white font-semibold"
                    : "bg-slate-200 text-slate-700 hover:bg-slate-300"
                }`}>
                ✓ Todos os Produtos ({products.length})
              </button>
            </li>
            {/* Categorias */}
            {Object.keys(groupedByCategory).map((category) => (
              <li key={category}>
                <button
                  onClick={() => setSelectedCategory(category)}
                  className={`w-full text-left py-2 px-4 rounded transition-colors ${
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

        {/* MAIN - PRODUTOS */}
        <main className="flex-1">
          <div className="bg-slate-300 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-8 text-slate-800">
              {selectedCategory ? `${selectedCategory}` : "Todos os Produtos"}
            </h2>

            <ul className="grid grid-cols-3 gap-6 justify-center">
              {displayedProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex flex-col bg-white p-6 rounded-lg shadow-lg w-full hover:shadow-blue-400/50 transition-shadow duration-500 overflow-hidden">
                  {product.image && (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-contain rounded-md mb-4"
                    />
                  )}
                  <li className="flex flex-col gap-4 h-full">
                    <div className="flex-1">
                      <h4 className="font-semibold text-center h-12 overflow-hidden text-sm">
                        {product.name}
                      </h4>
                      <p className="text-xs text-gray-500 text-center mt-2">
                        {product.category}
                      </p>
                    </div>
                    <p className="text-lg font-bold text-green-600 text-center">
                      R$ {product.price.toFixed(2)}
                    </p>
                    <div className="flex gap-2">
                      <Link to={`/products/${product.id}`} className="flex-1">
                        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded text-sm font-semibold">
                          Ver
                        </button>
                      </Link>
                      <button className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 rounded text-sm font-semibold">
                        Comprar
                      </button>
                    </div>
                  </li>
                </div>
              ))}
            </ul>

            {displayedProducts.length === 0 && (
              <p className="text-center text-gray-600 mt-8">
                Nenhum produto encontrado nesta categoria.
              </p>
            )}
          </div>
        </main>
      </div>
    </section>
  );
}
