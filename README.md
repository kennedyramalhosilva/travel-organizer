# ✈️ Travel Organizer

Bem-vindo ao **Travel Organizer**! 🌍

Este projeto é um monorepo que contém uma solução completa para organizar suas viagens, combinando um aplicativo móvel moderno e uma API robusta.

---

## 🚀 Tecnologias

Este projeto utiliza algumas das tecnologias mais modernas do ecossistema JavaScript/TypeScript:

| Frontend (Mobile) | Backend (API) |
| :--- | :--- |
| ![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) | ![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white) |
| ![Expo](https://img.shields.io/badge/expo-1C1E24?style=for-the-badge&logo=expo&logoColor=white) | ![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white) |
| ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) | ![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white) |

---

## 📂 Estrutura do Projeto

O repositório está organizado em duas partes principais:

*   📱 **[travel-organizer-app](./travel-organizer-app)**: O aplicativo móvel construído com **React Native** e **Expo**.
*   🖥️ **[travel-organizer-api](./travel-organizer-api)**: A API backend construída com **NestJS** e **Prisma**.

---

## 🛠️ Começando

Siga as instruções abaixo para configurar e rodar o projeto localmente.

### Pré-requisitos

*   **Node.js**: Certifique-se de ter o Node.js instalado (versão LTS recomendada).
*   **Gerenciador de Pacotes**: `npm`, `yarn` ou `pnpm`.
*   **Mobile**: Um emulador Android/iOS ou o aplicativo **Expo Go** no seu dispositivo físico.

### 1️⃣ Configurando a API

Acesse a pasta da API, instale as dependências e inicie o servidor:

```bash
cd travel-organizer-api

# Instale as dependências
npm install

# Gere o cliente do Prisma
npx prisma generate

# Inicie o servidor em modo de desenvolvimento
npm run start:dev
```

A API estará rodando em `http://localhost:3000` (ou na porta configurada).

### 2️⃣ Rodando o App

Em outro terminal, acesse a pasta do aplicativo e inicie o Expo:

```bash
cd travel-organizer-app

# Instale as dependências
npm install

# Inicie o projeto
npm start
```

Isso abrirá o menu do Expo. Você pode:
*   Pressionar `a` para abrir no emulador Android.
*   Pressionar `i` para abrir no simulador iOS (macOS apenas).
*   Escanear o QR Code com o app **Expo Go** no seu celular.

---

## ✨ Funcionalidades Principais

*   **Autenticação Segura**: Login e cadastro de usuários.
*   **Gestão de Viagens**: Crie, edite e organize suas viagens.
*   **Planejamento**: Adicione atividades, voos e hospedagens.
*   **Interface Moderna**: Design intuitivo e responsivo.

---

## 📝 Scripts Disponíveis

### API (`travel-organizer-api`)
*   `npm run build`: Compila a aplicação.
*   `npm run format`: Formata o código com Prettier.
*   `npm run lint`: Verifica erros de linting.
*   `npm run test`: Roda os testes unitários.

### App (`travel-organizer-app`)
*   `npm start`: Inicia o servidor de desenvolvimento.
*   `npm run android`: Roda no Android.
*   `npm run ios`: Roda no iOS.
*   `npm run web`: Roda na web.

---

Feito com ❤️ por **Kennedy**.
