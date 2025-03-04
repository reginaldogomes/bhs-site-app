import React from "react";

const DashboardPage: React.FC = () => {
  const userName = "Reginaldo Gomes"; // Substitua pelo nome do usuário obtido dinamicamente

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="mt-2 text-gray-600">Bem-vindo, {userName}!</p>
          <nav className="mt-4">
            <ul className="flex space-x-4">
              <li>
                <a
                  href="/admin/dashboard"
                  className="text-blue-500 hover:text-blue-700"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="/admin/settings"
                  className="text-blue-500 hover:text-blue-700"
                >
                  Configurações
                </a>
              </li>
              <li>
                <a
                  href="/admin/profile"
                  className="text-blue-500 hover:text-blue-700"
                >
                  Perfil
                </a>
              </li>
              <li>
                <a href="/logout" className="text-blue-500 hover:text-blue-700">
                  Sair
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default DashboardPage;
