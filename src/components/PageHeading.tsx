// src/components/PageHeading.tsx

type PageHeadingProps = {
  title: string;
  description: string;
};

const PageHeading: React.FC<PageHeadingProps> = ({ title, description }) => {
  return (
    <section className="mb-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
        {title}
      </h1>
      <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
        {description}
      </p>
    </section>
  );
};

export default PageHeading;
