import Link from "next/link";

const NotFoundPage: React.FC = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-600 to-blue-500 text-center px-4">
      <h1 className="text-7xl font-extrabold text-white mb-4 drop-shadow-lg">
        404
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6">
        Desculpe, não conseguimos encontrar a página que você procura.
      </p>
      <Link
        href="/"
        className="inline-block px-6 py-3 bg-white text-indigo-600 font-semibold rounded-md shadow-md hover:shadow-lg hover:bg-gray-100 transition-all duration-300"
      >
        Voltar para a página inicial
      </Link>
    </div>
  );
};

export default NotFoundPage;
