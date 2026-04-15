import { Header } from "../components/Header";
export function About() {
  return (
    <>
      <section className="flex flex-col items-center justify-center bg-slate-300 p-20 rounded-lg m-20 shadow-lg shadow-black/50">
        <h1 className="text-blue-600 font-bold text-3xl m-10">
          Conheça nossa Loja
        </h1>

        <div className="max-w-3xl mx-auto text-center">
          <p>
            Bem-vindo à TechPoint Eletrônicos, o lugar onde inovação e qualidade
            se encontram para transformar o seu dia a dia. Nossa missão é
            oferecer os melhores produtos de tecnologia — desde smartphones e
            notebooks até acessórios e eletrodomésticos inteligentes — sempre
            com atendimento especializado e preços justos.
          </p>

          <p>
            A TechPoint Eletrônicos nasceu com o objetivo de trazer tecnologia
            de qualidade para o dia a dia das pessoas. Trabalhamos com uma
            seleção de produtos modernos, acessíveis e confiáveis, sempre
            buscando oferecer a melhor experiência para nossos clientes
          </p>

          <h2 className="text-blue-600 font-bold text-3xl m-10">Missão</h2>
          <p>
            Nossa missão é conectar pessoas à tecnologia de forma simples,
            rápida e segura, oferecendo produtos que fazem a diferença no
            cotidiano.
          </p>
        </div>

        <div className="flex flex-row justify-center items-center gap-10 max-w-5xl mx-auto">
          <div className="text-center">
            <h2 className="text-blue-600 font-bold text-3xl m-10">Valores</h2>
            <p>
              Na TechPoint, acreditamos que a tecnologia deve estar ao alcance
              de todos. Por isso, trabalhamos com marcas renomadas e garantimos
              uma experiência de compra segura, prática e moderna. Seja para
              facilitar sua rotina, impulsionar seu trabalho ou trazer mais
              diversão para sua vida, aqui você encontra o que precisa. Venha
              descobrir um mundo de possibilidades e leve para casa o futuro da
              tecnologia hoje mesmo!
            </p>
          </div>

          <div className="text-center">
            <h2 className="text-blue-600 font-bold text-3xl m-10">
              Diferenciais
            </h2>
            <ul className="list-none ml-5 ">
              <li>Produtos de qualidade</li>
              <li>Entrega rápida</li>
              <li>Suporte dedicado</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
