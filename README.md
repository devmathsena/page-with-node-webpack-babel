# 🌐 Página Simples com Node.js, Webpack e Babel

Este projeto é uma página web simples criada com o objetivo de praticar a configuração e uso das ferramentas **Node.js**, **Webpack** e **Babel.js**. A estrutura foi organizada para simular um ambiente real de desenvolvimento front-end com separação de código-fonte, estilos e build final.

## 🛠️ Tecnologias Utilizadas

* **Node.js** – Ambiente de execução JavaScript
* **Webpack** – Empacotador de módulos
* **Babel.js** – Transpilador de JS moderno (ES6+) para versões compatíveis com navegadores
* **CSS** – Estilização básica da página
* **style-loader & css-loader** – Carregamento e injeção de CSS via JavaScript
* **webpack-dev-server** – Servidor de desenvolvimento com live reload

## 📁 Estrutura do Projeto

```
├── dist/                  # Arquivos gerados para produção
│   ├── index.html         # Página HTML final
│   └── index.min.js       # Bundle JS minificado
│
├── node_modules/          # Dependências do projeto
│
├── src/                   # Código-fonte
│   ├── index.js           # JS principal da aplicação
│   └── styles/
│       └── index.css      # Estilo principal
│
├── babel.config.js        # Configuração do Babel
├── package.json           # Informações do projeto e scripts
├── package-lock.json      # Mapa exato de dependências
├── webpack.config.js      # Configuração do Webpack
└── README.md              # Este arquivo 😄
```

## 🚀 Como Executar o Projeto

1. **Clone o repositório:**

```bash
git clone https://github.com/devmathsena/page-with-node-webpack-babel.git
cd page-with-node-webpack-babel
```

2. **Instale as dependências:**

```bash
npm install
```

3. **Gere o build com Webpack:**

```bash
npm run build
```

> O arquivo `index.min.js` será gerado dentro da pasta `dist/` e incluído automaticamente no `index.html`.

4. **Abra o `dist/index.html` no navegador.**

### 💻 Modo de Desenvolvimento com Webpack Dev Server

Para rodar o projeto em modo de desenvolvimento com recarregamento automático:

```bash
npm run dev
```

> O Webpack Dev Server iniciará em `http://localhost:3000` (ou porta configurada). Ideal para desenvolvimento local.

## 🎯 Objetivo

Este projeto tem fins educativos e serve para:

* Aprender a configurar o Webpack manualmente
* Utilizar Babel para escrever código moderno
* Carregar e injetar CSS com Webpack
* Utilizar o webpack-dev-server para melhorar a experiência de desenvolvimento
* Organizar o projeto com separação entre fonte e build

## 📌 Observações

* O build final (`index.min.js`) está referenciado diretamente no HTML da pasta `dist`.
* Nenhum framework foi utilizado para manter o foco em configuração base e ferramentas.
