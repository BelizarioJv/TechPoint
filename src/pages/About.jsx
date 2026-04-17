import { Header } from "../components/Header";

export function About() {
  return (
    <>
      <section className="flex flex-col items-center bg-slate-300 p-6 md:p-10 lg:p-16 m-4 md:m-10 rounded-lg shadow-lg shadow-black/50">
        {/* Container principal */}
        <div className="w-full max-w-5xl">
          {/* Texto principal */}
          <div className="text-center bg-white p-4 md:p-6 rounded-lg shadow-lg shadow-black/50">
            <h1 className="text-blue-400 text-2xl md:text-3xl lg:text-4xl mb-6">
              Conheça nossa Loja
            </h1>

            <p className="text-sm md:text-base">
              Bem-vindo à TechPoint Eletrônicos, o lugar onde inovação e
              qualidade se encontram para transformar o seu dia a dia...
            </p>

            <p className="mt-4 md:mt-6 text-sm md:text-base">
              A TechPoint Eletrônicos nasceu com o objetivo de trazer tecnologia
              de qualidade para o dia a dia das pessoas...
            </p>

            <p className="mt-4 md:mt-6 text-sm md:text-base">
              Na TechPoint, acreditamos que a tecnologia deve estar ao alcance
              de todos...
            </p>
          </div>

          {/* Cards */}
          <div className="flex flex-col lg:flex-row justify-center items-stretch mt-8 gap-6">
            {/* Valores */}
            <div className="text-center w-full lg:w-1/2 bg-white p-4 md:p-6 rounded-lg shadow-lg shadow-black/50">
              <h2 className="text-blue-400 text-xl md:text-2xl mb-4">
                Valores
              </h2>

              <p className="text-sm md:text-base">
                Na TechPoint, acreditamos que a tecnologia deve estar ao alcance
                de todos...
              </p>

              <p className="mt-4 text-sm md:text-base">
                Venha descobrir um mundo de possibilidades...
              </p>
            </div>

            {/* Diferenciais */}
            <div className="text-center w-full lg:w-1/2 bg-white p-4 md:p-6 rounded-lg shadow-lg shadow-black/50">
              <h2 className="text-blue-400 text-xl md:text-2xl mb-4">
                Diferenciais
              </h2>

              <ul className="list-disc ml-5 text-left text-sm md:text-base">
                <li>Produtos de qualidade</li>
                <li>Entrega rápida</li>
                <li>Suporte dedicado</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
