import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export function Cart() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const total = cart.reduce((acc, product) => acc + product.price, 0);

  return (
    <section className="p-4 md:p-8">
      {/* HEADER */}
      <div className="flex flex-col items-center justify-center gap-4 mt-5 mb-10 bg-slate-300 text-center p-4 md:p-6 rounded-lg shadow-lg shadow-black/50 max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl text-blue-400">Carrinho</h2>
        <p className="text-sm text-white">Produtos no seu carrinho</p>
      </div>

      {cart.length === 0 ? (
        <div className="flex justify-center items-center h-64 md:h-96">
          <p className="text-xl md:text-2xl text-gray-600">
            Seu carrinho está vazio
          </p>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-4 md:p-6">
            {/* LISTA */}
            <ul className="space-y-4">
              {cart.map((product, index) => (
                <li
                  key={index}
                  className="flex flex-col md:flex-row md:items-center md:justify-between border-b pb-4 hover:bg-slate-50 p-2 rounded">
                  {/* INFO PRODUTO */}
                  <div className="flex items-center gap-3 md:gap-4 flex-1">
                    {product.image && (
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-md"
                      />
                    )}

                    <div>
                      <h4 className="font-semibold text-sm md:text-lg">
                        {product.name}
                      </h4>
                      <p className="text-xs md:text-sm text-gray-500">
                        {product.category}
                      </p>
                    </div>
                  </div>

                  {/* PREÇO + BOTÃO */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 mt-3 md:mt-0">
                    <p className="text-lg md:text-xl font-bold text-green-600">
                      R$ {product.price.toFixed(2)}
                    </p>

                    <button
                      onClick={() => removeFromCart(product.id)}
                      className="bg-red-500 hover:bg-red-600 text-white py-2 px-3 md:px-4 rounded text-sm md:text-base font-semibold">
                      Remover
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            {/* TOTAL */}
            <div className="mt-6 md:mt-8 border-t pt-4 md:pt-6">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-2 mb-4 md:mb-6">
                <h3 className="text-xl md:text-2xl font-bold">Total:</h3>
                <p className="text-2xl md:text-3xl font-bold text-green-600">
                  R$ {total.toFixed(2)}
                </p>
              </div>

              {/* BOTÕES */}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <button
                  onClick={clearCart}
                  className="w-full bg-gray-500 hover:bg-gray-600 text-white py-2 md:py-3 rounded font-semibold text-sm md:text-lg">
                  Limpar Carrinho
                </button>

                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 md:py-3 rounded font-semibold text-sm md:text-lg">
                  Finalizar Compra
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
