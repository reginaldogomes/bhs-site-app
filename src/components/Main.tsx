// src/components/Main.tsx

interface MainProps {
  children: React.ReactNode;
  className?: string;
}

const Main: React.FC<MainProps> = ({ children, className = "" }) => {
  return (
    <main className={`min-h-screen bg-gray-50 p-6" ${className}`}>
      {children}
    </main>
  );
};

export default Main;
