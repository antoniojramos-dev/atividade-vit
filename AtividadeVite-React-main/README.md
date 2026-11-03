# Atividade — Componentes Reutilizáveis com Vite + React

Projeto criado com Vite e React para demonstrar um `Header` e um único componente `Card` reutilizado três vezes.

## Como executar

```bash
npm install
npm run dev
```

Para gerar a versão de produção:

```bash
npm run build
```

Os três cartões são renderizados no `App.jsx` a partir do mesmo componente:

```jsx
{cards.map((number) => (
  <Card key={number} number={number} />
))}
```
