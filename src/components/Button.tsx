import Link from "next/link";

const CustomButton: React.FC = () => {
  return (
    <Link
      href="#about"
      className="mt-6 inline-block px-6 py-3 bg-secondary text-white rounded-lg shadow-md transition-colors duration-300 ease-in-out hover:bg-green-600"
    >
      Saiba Mais
    </Link>
  );
};

export default CustomButton;
