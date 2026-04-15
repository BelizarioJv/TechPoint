import { Header } from "../components/Header";
export function About() {
  return (
    <>
      <section className="flex flex-col items-center justify-center bg-slate-300 p-20 rounded-lg m-20 shadow-lg shadow-black/50">
        <div>
          <div className="text-center bg-white p-6 rounded-lg shadow-lg shadow-black/50 w-dvh">
            <h1 className="text-blue-400 text-3xl m-10">Conheça nossa Loja</h1>
            <p>
              Bem-vindo à TechPoint Eletrônicos, o lugar onde inovação e
              qualidade se encontram para transformar o seu dia a dia. Nossa
              missão é oferecer os melhores produtos de tecnologia desde
              smartphones e notebooks até acessórios e eletrodomésticos
              inteligentes sempre com atendimento especializado e preços justos.
            </p>

            <p className=" m-10">
              A TechPoint Eletrônicos nasceu com o objetivo de trazer tecnologia
              de qualidade para o dia a dia das pessoas. Trabalhamos com uma
              seleção de produtos modernos, acessíveis e confiáveis, sempre
              buscando oferecer a melhor experiência para nossos clientes
            </p>

            <p>
              Na TechPoint, acreditamos que a tecnologia deve estar ao alcance
              de todos. Por isso, trabalhamos com marcas renomadas e garantimos
              uma experiência de compra segura, prática e moderna. Seja para
            </p>
          </div>

          <div className="flex flex-row justify-center items-center m-10 gap-20">
            <div className="text-center max-w-md bg-white p-6 rounded-lg shadow-lg shadow-black/50">
              {" "}
              "<h2 className="text-blue-400 text-3xl m-10">Valores</h2>
              <p>
                Na TechPoint, acreditamos que a tecnologia deve estar ao alcance
                de todos. Por isso, trabalhamos com marcas renomadas e
                garantimos uma experiência de compra segura, prática e moderna.
                Seja para facilitar sua rotina, impulsionar seu trabalho ou
                trazer mais diversão para sua vida, aqui você encontra o que
                precisa.
              </p>
              <p className="m-5">
                Venha descobrir um mundo de possibilidades e leve para casa o
                futuro da tecnologia hoje mesmo!
              </p>
            </div>

            <div className="text-center max-w-md p-6 bg-white rounded-lg shadow-lg shadow-black/50">
              <h2 className="text-blue-400  text-3xl m-10">Diferenciais</h2>
              <ul className="list-disc list- ml-5 text-left  text-lg">
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
