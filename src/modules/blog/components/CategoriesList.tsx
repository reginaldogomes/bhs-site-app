"use client";

const categories = [
  "Tecnologia",
  "Design",
  "Marketing",
  "Desenvolvimento",
  "Negócios",
];

const CategoriesList = () => {
  return (
    <div className="space-y-2">
      <h3 className="text-lg font-semibold">Categorias</h3>
      <ul className="space-y-1">
        {categories.map((category, index) => (
          <li key={index} className="hover:text-primary cursor-pointer">
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesList;