import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

//layout principal da aplicaçao onde utliza o componente heeader com os links . Outlet e para rederizar as paginas que foram passadas na rota
export function RootLayout() {
  const [isVisible, setIsVisible] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => setIsVisible(true), 600);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <div className="flex flex-col bg-slate-500 min-h-screen">
        <Header />

        <main
          className={`flex-1 transition-opacity duration-400 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}>
          <Outlet></Outlet>
        </main>
      </div>
      <footer className="flex items-center justify-end p-4 bg-slate-500 text-sm text-amber-50">
        <p>
          Desenvolvideo por{" "}
          <span>
            <a href="https://www.linkedin.com/in/joaobelizariodev/">
              João Belizario
            </a>
          </span>{" "}
        </p>
      </footer>
    </>
  );
}
