// src/components/PageHeading.tsx

import React from "react";

type PageHeadingProps = {
  title: string;
  description: string;
};

const PageHeading: React.FC<PageHeadingProps> = ({ title, description }) => {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            {title}
          </h1>
          <div className="h-1 w-20 bg-indigo-500 rounded-full mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PageHeading;
