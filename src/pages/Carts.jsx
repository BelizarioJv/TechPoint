import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export function Cart() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const total = cart.reduce((acc, product) => acc + product.price, 0);

  return (
    <section className="p-8">
      <div className="flex flex-col items-center justify-center gap-4 mr-50 ml-50 mt-5 mb-20 bg-slate-300 text-center p-4 rounded-lg shadow-lg shadow-black/50">
        <h2 className="text-3xl text-blue-400">Carrinho</h2>
        <p className="text-sm text-white">Produtos no seu carrinho</p>
      </div>

      {cart.length === 0 ? (
        <div className="flex justify-center items-center h-96">
          <p className="text-2xl text-gray-600">Seu carrinho está vazio</p>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <ul className="space-y-4">
              {cart.map((product, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between border-b pb-4 hover:bg-slate-50 p-2 rounded">
                  <div className="flex items-center gap-4 flex-1">
                    {product.image && (
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-20 h-20 object-contain rounded-md"
                      />
                    )}
                    <div>
                      <h4 className="font-semibold text-lg">{product.name}</h4>
                      <p className="text-sm text-gray-500">
                        {product.category}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-8">
                    <p className="text-lg font-bold text-green-600">
                      R$ {product.price.toFixed(2)}
                    </p>
                    <button
                      onClick={() => removeFromCart(product.id)}
                      className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded font-semibold">
                      Remover
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t pt-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">Total:</h3>
                <p className="text-3xl font-bold text-green-600">
                  R$ {total.toFixed(2)}
                </p>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={clearCart}
                  className="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-3 rounded font-semibold text-lg">
                  Limpar Carrinho
                </button>
                <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-3 rounded font-semibold text-lg">
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
