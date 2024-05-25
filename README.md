# Crypto Dashboard
### Objetivo
Desenvolver um dashboard que se conecte à API da Binance para monitorar e exibir em tempo real o último preço e a flutuação percentual dos preços de criptomoedas específicas desde que a dashboard foi aberta.

### Funcionalidades
Exibir o último preço em USDT para Bitcoin (BTC), Ethereum (ETH), Solana (SOL) e Dogecoin (DOGE).
Calcular e mostrar o percentual de mudança do preço desde a abertura do dashboard para cada criptomoeda.
Atualizar os dados em tempo real conforme as novas informações são recebidas via Websocket.
Reconectar automaticamente em caso de perdas temporárias na conexão com a API da Binance.
Tecnologias Utilizadas
ReactJS para construir a interface do usuário.
Redux para gerenciar o estado da aplicação.
Chart.js e react-chartjs-2 para visualização dos dados.
Websockets para conectar-se à API da Binance.
Jest e @testing-library/react para testes unitários.
Requisitos
Node.js
NPM ou Yarn

### Instalação e Execução
Clone o repositório:

```bash 
git clone https://github.com/seu-usuario/crypto-dashboard.git 
cd crypto-dashboard
Instale as dependências:
npm install
```
#### ou

```bash 
yarn install
Execute a aplicação:

npm start ou yarn start
```
Abra o navegador e acesse http://localhost:3000

Testes
Para executar os testes, use o comando:
```bash 
npm test ou yarn test
```
### Estrutura do Projeto

```bash 
crypto-dashboard/
│
├── public/
│
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── CryptoDashboard.tsx
│   │   │   ├── LoadingComponent.tsx
│   │   │   └── __tests__/
│   │   │       ├── CryptoDashboard.test.tsx
│   │   │       ├── LoadingComponent.test.tsx
│   │   │       └── store.test.tsx
│   │   ├── features/
│   │   │   ├── crypto/
│   │   │   │   ├── cryptoApi.ts
│   │   │   │   ├── cryptoSlice.ts
│   │   │   │   └── __tests__/
│   │   │   │       ├── cryptoApi.test.tsx
│   │   ├── redux/
│   │   │   ├── store.ts
│   ├── index.tsx
│   ├── App.tsx
│   └── index.css
│
├── .babelrc
├── jest.config.js
├── package.json
└── README.md

```
