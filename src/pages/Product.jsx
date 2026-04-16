import { useLoaderData, Link } from "react-router-dom";
import { ArrowBigLeft, ShoppingCart, Plus } from "lucide-react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

// Usando o componente Link para criar o botao de voltar para a pagina de produtos

//pegando os parametros da Url que foi pedida no routes com "useParams"
//usando o metodo "find" para percorre products e retorna o elemento que satisfaz a funçao de callback(vendo o id do produto e conferindo no databse(+ é para converter o id em number))
export function Product() {
  const product = useLoaderData(); // userLoaderData(hook do react) e a mesma coisa que chamar a funçao criada para chamar os produtos
  const { addToCart } = useContext(CartContext);

  return (
    <section className="min-h-screen bg-linear-to-br from-slate-100 to-slate-200 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Botão Voltar */}
        <Link to="/products">
          <button className="mb-8 inline-flex items-center gap-2 bg-slate-500 hover:bg-slate-600 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105">
            <ArrowBigLeft />
            Voltar
          </button>
        </Link>

        {/* Card Principal do Produto */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-shadow duration-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12">
            {/* Coluna Esquerda - Imagem */}
            <div className="flex flex-col items-center justify-center bg-linear-to-br from-slate-50 to-slate-100 rounded-xl p-8">
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-96 object-contain rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="w-full h-96 bg-slate-300 rounded-lg flex items-center justify-center">
                  <span className="text-slate-500">Sem imagem</span>
                </div>
              )}

              {/* Badge de Categoria */}
              <div className="mt-6 w-full">
                <span className="inline-block bg-linear-to-br from-blue-500 to-blue-600 text-white text-sm font-bold py-2 px-6 rounded-full shadow-md">
                  {product.category}
                </span>
              </div>
            </div>

            {/* Coluna Direita - Informações */}
            <div className="flex flex-col justify-between">
              {/* Título e Descrição */}
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-4 leading-tight">
                  {product.name}
                </h2>

                <p className="text-slate-600 text-lg leading-relaxed mb-6 p-4 bg-slate-50 rounded-lg border-l-8 border-blue-500">
                  {product.description}
                </p>

                {/* Estatísticas */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-linear-to-br from-green-50 to-green-100 p-4 rounded-lg">
                    <p className="text-green-600 text-sm font-semibold">
                      Preço
                    </p>
                    <p className="text-3xl font-bold text-green-700">
                      R$ {product.price.toFixed(2)}
                    </p>
                  </div>
                  <div className="bg-linear-to-br from-blue-50 to-blue-100 p-4 rounded-lg">
                    <p className="text-blue-600 text-sm font-semibold">
                      ID do Produto
                    </p>
                    <p className="text-3xl font-bold text-blue-700">
                      #{product.id}
                    </p>
                  </div>
                </div>
              </div>

              {/* Informações Adicionais */}
              <div className="bg-linear-to-br from-amber-50 to-orange-50 p-4 rounded-lg mb-8 border-l-8 border-orange-400">
                <p className="text-sm text-slate-700">
                  <strong>✓ Garantia:</strong> 12 meses
                </p>
                <p className="text-sm text-slate-700">
                  <strong>✓ Entrega:</strong> Grátis para compras acima de R$
                  100
                </p>
              </div>

              {/* Botões de Ação */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to={`/cart`}>
                  <button
                    onClick={() => addToCart(product)}
                    className="flex-1 bg-linear-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-lg">
                    <ShoppingCart />
                    Comprar Agora
                  </button>
                </Link>

                <button
                  onClick={() => addToCart(product)}
                  className="flex-1 bg-linear-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-lg">
                  <Plus />
                  Carrinho
                </button>
              </div>

              {/* Call to Action */}
              <p className="text-center text-slate-500 text-sm mt-4">
                Parcelamento em até 12x sem juros
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
