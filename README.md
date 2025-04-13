# 📘 BHS Site App

## 📌 Visão Geral

O **BHS Site App** é uma aplicação desenvolvida para **gerenciar e otimizar o conteúdo do site da BH Solutions**, integrando recursos de marketing, análise e administração digital.

Este projeto tem como principais objetivos:

- Proporcionar uma **experiência de usuário fluida e moderna**.
- **Facilitar a gestão de conteúdo**, tornando o processo intuitivo e acessível para a equipe da BHS.
- Integrar sistemas externos como CRMs e plataformas de automação de marketing.
- Gerar **relatórios e insights úteis** sobre o desempenho e engajamento do site.

---

## ✨ Funcionalidades Principais

- ✅ **Gestão de Conteúdo**: Criação, edição e exclusão de páginas e seções de forma prática e segura.
- 🔗 **Integração com Sistemas**: Integração com plataformas como **HubSpot**, **RD Station** e CRMs para automação de marketing e acompanhamento de leads.
- 📊 **Relatórios e Análises**: Relatórios com métricas como acessos, tempo de navegação, taxa de conversão, entre outros.
- 🔐 **Autenticação JWT**: Acesso seguro com login de administradores, incluindo integração com contas Google e Microsoft.
- 🌐 **Publicação Automatizada**: Sistema de deploy contínuo via **Vercel**, com publicação imediata após aprovação de conteúdo.

---

## 🛠️ Tecnologias Utilizadas

| Camada            | Tecnologias                                              |
|-------------------|----------------------------------------------------------|
| **Frontend**      | Next.js 15, React, TypeScript, Tailwind CSS              |
| **Backend**       | Vercel Serverless Functions (Node.js)                    |
| **Banco de Dados**| PostgreSQL, Prisma ORM                                   |
| **Autenticação**  | JWT, OAuth 2.0 (Google e Microsoft)                      |
| **Hospedagem**    | Vercel (com CI/CD e preview automático)                  |
| **Containers**    | Docker, Docker Compose                                   |

---

## 📁 Estrutura do Projeto

```bash
bhs-site-app/
├── src/
│   ├── components/     # Componentes reutilizáveis da interface
│   ├── pages/          # Páginas da aplicação (Next.js routing)
│   ├── services/       # Integrações com APIs externas e back-end
│   ├── utils/          # Funções auxiliares e helpers
│   └── styles/         # Estilos globais e utilitários
├── public/             # Arquivos estáticos públicos
├── config/             # Configurações e constantes da aplicação
├── prisma/             # Definição do schema do banco de dados
├── tests/              # Testes automatizados (unitários e e2e)
├── docker/             # Arquivos relacionados a imagens Docker
├── docker-compose.yml  # Orquestração dos serviços
├── .env.example        # Exemplo de variáveis de ambiente
└── README.md           # Documentação do projeto
```

---

## 🚀 Como Rodar o Projeto

### ✅ Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 18+)
- [Yarn](https://yarnpkg.com/) ou npm
- [Docker](https://www.docker.com/) e [Docker Compose](https://docs.docker.com/compose/)

### ▶️ Rodando com Docker (recomendado)

```bash
# Clone o repositório
git clone https://github.com/reginaldogomes/bhs-site-app.git

# Acesse a pasta
cd bhs-site-app

# Copie o arquivo de ambiente
cp .env.example .env

# Suba os containers com Docker Compose
docker-compose up --build
```

A aplicação estará disponível em: [http://localhost:3000](http://localhost:3000)

### ▶️ Rodando localmente sem Docker (opcional)

```bash
# Instale as dependências
yarn install  # ou npm install

# Rode as migrations do banco de dados
npx prisma migrate dev

# Inicie o servidor de desenvolvimento
yarn dev  # ou npm run dev
```

---

## 🔗 Deploy e Acesso

A aplicação está hospedada em produção via Vercel:  
🌐 **[https://bhs-site.vercel.app](https://bhs-site.vercel.app)** _(substituir pelo domínio real)_

Para acesso administrativo, entre em contato com a equipe de TI para receber suas credenciais.

---

## 👥 Contato

- 👨‍💻 **Desenvolvedor Líder**: Reginaldo Gomes – [contato@reginaldogomes.dev.br]
- 🛠 **Equipe de Suporte**: suporte@bhsolutions.com.br _(ou e-mail oficial da equipe)_

---

> Este `README.md` foi criado para fornecer uma visão clara e acessível do projeto **BHS Site App**, sendo útil tanto para desenvolvedores quanto para gestores e stakeholders da empresa.