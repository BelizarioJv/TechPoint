import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

//layout principal da aplicaçao onde utliza o componente heeader com os links . Outlet e para rederizar as paginas que foram passadas na rota
export function RootLayout() {
  return (
    <>
      <div className="flex flex-col bg-slate-500 min-h-screen">
        <Header />

        <main className="flex-1">
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
