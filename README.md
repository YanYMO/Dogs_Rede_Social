# Dogs — rede social para cachorros

Aplicação frontend em React para compartilhar fotos de cachorros. O projeto foi desenvolvido durante o curso de React da Origamid como exercício de construção de uma aplicação com autenticação, navegação por rotas e integração com uma API.

> **Sobre o backend:** a API Dogs (`https://dogsapi.origamid.dev/json`) é um serviço externo fornecido pelo curso para consumo. Ela já disponibiliza os recursos de autenticação e dados utilizados pelo app; a API/backend não foi criada neste projeto nem dentro deste módulo do curso.

## Funcionalidades

- Feed de fotos com carregamento progressivo, incluindo feeds filtrados por usuário.
- Visualização de uma foto com informações, comentários e acesso à página individual.
- Cadastro, login, validação de sessão por token e logout.
- Recuperação e redefinição de senha por meio dos fluxos disponibilizados pela API.
- Área autenticada com feed pessoal, publicação de fotos com nome, peso e idade, e opção de excluir as próprias fotos.
- Comentários em fotos para usuários autenticados.
- Perfil público de usuário com suas fotos.
- Página de estatísticas da conta com gráficos de acessos.
- Rotas protegidas para a área da conta e telas de carregamento, erro e página não encontrada.

## Tecnologias

- **React** e **React DOM** para a interface e gerenciamento de estado local.
- **React Router DOM** para rotas, navegação e rotas protegidas.
- **Context API** para compartilhar estado de autenticação e dados do usuário.
- **Fetch API** (nativa do navegador) para as requisições HTTP à API Dogs.
- **CSS**, incluindo CSS Modules, para estilos globais e estilos encapsulados por componente.
- **Victory** para os gráficos da página de estatísticas.
- **Vite** para desenvolvimento e build, com `@vitejs/plugin-react`.
- **vite-plugin-svgr** para importar SVGs como componentes React.
- **PropTypes** em componentes que declaram validação de propriedades.

Não há biblioteca dedicada de estado global ou cliente HTTP: o estado é tratado com recursos do React, e as chamadas à API usam `fetch`.

## Organização do código

```text
.
├── public/                 # Arquivos estáticos, ícones e manifesto
├── src/
│   ├── Api.jsx             # Endpoints e opções das requisições à API Dogs
│   ├── App.jsx             # Router e composição principal da aplicação
│   ├── App.css             # Estilos globais e utilitários de layout/animação
│   ├── UserContext.jsx     # Contexto, autenticação e sessão do usuário
│   ├── index.jsx           # Ponto de entrada React
│   ├── Assets/             # SVGs e imagens usados pela interface
│   ├── Components/
│   │   ├── Feed/           # Feed, itens, paginação e modal de fotos
│   │   ├── Forms/          # Campos e botões reutilizáveis
│   │   ├── Header/         # Cabeçalho e navegação principal
│   │   ├── Footer/         # Rodapé
│   │   ├── Helper/         # Auxiliares, erros, loading e rota protegida
│   │   ├── Login/          # Login, cadastro e recuperação de senha
│   │   ├── Photo/          # Detalhes da foto, comentários e exclusão
│   │   ├── User/           # Conta, publicação, perfil e estatísticas
│   │   ├── Home.jsx        # Página inicial
│   │   └── NotFound.jsx    # Página de rota não encontrada
│   └── Hooks/
│       ├── useFetch.jsx    # Estado de carregamento, erro e dados das requisições
│       ├── useForm.jsx     # Estado e validação de campos
│       └── useMedia.jsx    # Hook para consultar uma media query
├── index.html              # Documento HTML de entrada do Vite
├── package.json            # Dependências e scripts npm
├── vite.config.js          # Plugins do React e SVGR
├── netlify.toml            # Rewrite de rotas para SPA no Netlify
└── vercel.json             # Rewrite de rotas para SPA na Vercel
```

Os estilos específicos de muitos componentes ficam em arquivos `.module.css` próximos aos componentes. As definições de endpoints e métodos HTTP estão concentradas em `src/Api.jsx`; `src/Hooks/useFetch.jsx` centraliza o fluxo comum de requisição, enquanto `src/UserContext.jsx` coordena a sessão.

## Como executar localmente

Pré-requisitos: Node.js `^20.19.0` ou `>=22.12.0` e npm. Essas versões atendem ao requisito do Vite usado pelo projeto.

1. Clone o repositório e entre na pasta do projeto.
2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

4. Abra no navegador o endereço local mostrado pelo Vite no terminal.

O app aponta para a URL da API Dogs definida em `src/Api.jsx`. Não é necessário iniciar um backend deste repositório, mas as funcionalidades que dependem de dados e autenticação precisam de conexão e disponibilidade da API externa.

Os arquivos `netlify.toml` e `vercel.json` configuram o redirecionamento das rotas da aplicação para `index.html` nessas plataformas de hospedagem.

Scripts disponíveis:

```bash
npm run dev      # Servidor local de desenvolvimento
npm run build    # Build de produção em dist/
npm run preview  # Pré-visualização local do build
npm run lint     # Verificação estática com ESLint
```

## Destaques técnicos

- Separação entre configuração de endpoints, estado de autenticação, hook de requisições e componentes de interface.
- Rotas aninhadas e protegidas com React Router, com restauração da sessão usando o token armazenado no navegador.
- Feed paginado com carregamento progressivo e detalhes de foto reutilizados na visualização em modal e na rota individual.
- Formulários reutilizáveis com validações e estados de carregamento/erro.
- Envio de imagem com `FormData` e pré-visualização local antes da publicação.
- Carregamento sob demanda do componente de gráficos de estatísticas.

## Créditos

Projeto de estudo desenvolvido durante o curso de React da **Origamid**. A interface e a integração com a API fazem parte deste repositório; o backend/API Dogs é fornecido externamente pelo curso e apenas consumido pela aplicação.
