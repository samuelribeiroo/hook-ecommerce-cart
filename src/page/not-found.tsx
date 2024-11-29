import Button from "../components/ui/buttons";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <>
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] text-center">
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl mb-4">OOPS...</h1>
        <p className="font-semibold text-lg sm:text-xl md:text-2xl mb-8 max-w-md">
          A página que você estava buscando não foi encontrada.
        </p>
        <Link to={'/'}>
        <Button variant="default" size="lg" className="text-white rounded-md">
          Voltar para a página inicial.
        </Button>        
        </Link>
      </div>
    </section>
    
    </>
  )
}