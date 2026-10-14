# 📋 Plano do projeto: DevMobile_completo

_Gerado em 13/10/2026, 17:11:31 — sem IA, lendo os arquivos._

## 📊 Visão geral
| Item | Valor |
|---|---|
| Arquivos | 137 |
| Linhas | 40.977 |
| Telas/páginas | 10 |
| Rotas do backend | 17 |
| Chamadas do app | 27 |
| Tabelas do banco | 0 |
| Variáveis de ambiente | 32 |

**Linguagens:** TypeScript (React) (42), Imagem (31), TypeScript (21), JavaScript (9), Outros (8), JSON (7), Markdown (7), YAML (5), Imagem SVG (4), Ícone (2), HTML (1)

## 🧩 Apps dentro deste projeto
- artifacts/mobile (@workspace/mobile)

## 💡 O que fazer (em ordem)
1. 🧹 Tirar a Replit de 3 arquivo(s) (🏗️ Preparar → Fazer tudo)
2. 🖥️ O projeto tem backend próprio: para funcionar fora da Replit ele precisa ficar ligado num servidor (Render, Railway, Vercel) ou virar funções
3. 🔐 Criar um .env.example com: AI_INTEGRATIONS_GEMINI_API_KEY, AI_INTEGRATIONS_GEMINI_BASE_URL, ANTHROPIC_API_KEY, BASE_PATH, CLAUDE_MODEL, DATABASE_URL, DISCORD_TOKEN, EXPO_PUBLIC_API_BASE_URL, EXPO_PUBLIC_API_STRATEGY, EXPO_PUBLIC_APP_MODE, EXPO_PUBLIC_DOMAIN, EXPO_PUBLIC_ENABLE_GITHUB… (os valores você coloca no servidor, nunca no código)
4. 📝 Criar um README.md explicando como rodar

## 🚀 Por onde começa
- `artifacts/api-server/src/app.ts`
- `artifacts/api-server/src/index.ts`
- `index.html`

## ⌨️ Comandos (package.json)
| Pasta | Comando | O que roda |
|---|---|---|
| artifacts/mobile | `npm run dev` | `expo start` |
| artifacts/mobile | `npm run start` | `expo start` |
| artifacts/mobile | `npm run android` | `expo run:android` |
| artifacts/mobile | `npm run ios` | `expo run:ios` |
| artifacts/mobile | `npm run web` | `expo start --web` |
| . | `npm run desktop` | `electron .` |
| . | `npm run exe` | `electron-builder --win portable --publish never` |

## 📱 Telas e páginas
| Endereço | Arquivo |
|---|---|
| `/ai` | artifacts/mobile/app/(tabs)/ai.tsx |
| `/browser` | artifacts/mobile/app/(tabs)/browser.tsx |
| `/editor` | artifacts/mobile/app/(tabs)/editor.tsx |
| `/` | artifacts/mobile/app/(tabs)/index.tsx |
| `/plugins` | artifacts/mobile/app/(tabs)/plugins.tsx |
| `/pwa` | artifacts/mobile/app/(tabs)/pwa.tsx |
| `/settings` | artifacts/mobile/app/(tabs)/settings.tsx |
| `/tasks` | artifacts/mobile/app/(tabs)/tasks.tsx |
| `/terminal` | artifacts/mobile/app/(tabs)/terminal.tsx |
| `index.html` | index.html |

## 🖥️ Rotas do backend
| Método | Rota | Arquivo |
|---|---|---|
| USE | `/api` | artifacts/api-server/src/app.ts |
| POST | `/ai/chat` | artifacts/api-server/src/routes/ai.ts |
| GET | `/healthz` | artifacts/api-server/src/routes/health.ts |
| GET | `/api/saude` | artifacts/mobile/app/(tabs)/index.tsx |
| GET | `/api/usuarios` | artifacts/mobile/app/(tabs)/index.tsx |
| GET | `/api/usuarios/:id` | artifacts/mobile/app/(tabs)/index.tsx |
| POST | `/api/usuarios` | artifacts/mobile/app/(tabs)/index.tsx |
| PUT | `/api/usuarios/:id` | artifacts/mobile/app/(tabs)/index.tsx |
| DELETE | `/api/usuarios/:id` | artifacts/mobile/app/(tabs)/index.tsx |
| GET | `/` | artifacts/mobile/app/(tabs)/index.tsx |
| GET | `/api/itens` | artifacts/mobile/app/(tabs)/index.tsx |
| POST | `/api/itens` | artifacts/mobile/app/(tabs)/index.tsx |
| GET | `/api/itens/{item_id}` | artifacts/mobile/app/(tabs)/index.tsx |
| DELETE | `/api/itens/{item_id}` | artifacts/mobile/app/(tabs)/index.tsx |
| POST | `/api/chat` | artifacts/mobile/data/featuredProjects.ts |
| GET | `/api/saude` | artifacts/mobile/data/featuredProjects.ts |
| GET | `/api/provedores` | artifacts/mobile/data/featuredProjects.ts |

## 📡 O que o app pede ao servidor
| Método | Endereço | Onde |
|---|---|---|
| POST | `/db/test-connection` | artifacts/mobile/app/(tabs)/editor.tsx |
| POST | `/db/execute` | artifacts/mobile/app/(tabs)/editor.tsx |
| POST | `/api/terminal/write` | artifacts/mobile/app/(tabs)/index.tsx |
| GET | `/api/terminal/read?sessionId=${encodeURIComponent(sessionId)}` | artifacts/mobile/app/(tabs)/index.tsx |
| POST | `/ai/chat` | artifacts/mobile/app/(tabs)/index.tsx |
| POST | `/exec` | artifacts/mobile/app/(tabs)/plugins.tsx |
| GET | `/healthz` | artifacts/mobile/app/(tabs)/plugins.tsx |
| GET | `/api/search?q=${q}` | artifacts/mobile/components/AIChat.tsx |
| GET | `/api/search-images?q=${encodeURIComponent(query.slice(0, 120))}` | artifacts/mobile/components/AIChat.tsx |
| POST | `/api/drive/upload` | artifacts/mobile/components/AIChat.tsx |
| POST | `/api/ai/chat` | artifacts/mobile/components/DatabasePanel.tsx |
| POST | `/v1/messages` | artifacts/mobile/components/FloatingAI.tsx |
| POST | `/models/${model}:generateContent?key=${provider.apiKey}` | artifacts/mobile/components/FloatingAI.tsx |
| POST | `/v1/chat/completions` | artifacts/mobile/components/FloatingAI.tsx |
| GET | `/preview/check?port=${p}` | artifacts/mobile/components/PreviewPanel.tsx |
| GET | `/api/terminal/stream?sessionId=X` | artifacts/mobile/components/ProjectOverviewModal.tsx |
| POST | `/write` | artifacts/mobile/components/Terminal.tsx |
| GET | `/read?sessionId=${encodeURIComponent(sessionId)}` | artifacts/mobile/components/Terminal.tsx |
| POST | `/interrupt` | artifacts/mobile/components/Terminal.tsx |
| GET | `/git/ref/heads/${branch}` | artifacts/mobile/context/AppContext.tsx |
| POST | `/git/blobs` | artifacts/mobile/context/AppContext.tsx |
| POST | `/git/trees` | artifacts/mobile/context/AppContext.tsx |
| POST | `/git/commits` | artifacts/mobile/context/AppContext.tsx |
| PATCH | `/git/refs/heads/${branch}` | artifacts/mobile/context/AppContext.tsx |
| GET | `/repository/files/${encodeURIComponent(filePath)}?ref=${branch}` | artifacts/mobile/context/AppContext.tsx |
| POST | `/repository/commits` | artifacts/mobile/context/AppContext.tsx |
| GET | `/api/healthz` | artifacts/mobile/hooks/useApiBase.ts |

## 🔌 O que falta no backend
✅ Tudo que o app chama tem rota no projeto (ou o app não usa servidor).

## 💤 Rotas que o app não usa
- GET `/api/saude` — artifacts/mobile/app/(tabs)/index.tsx
- GET `/api/usuarios` — artifacts/mobile/app/(tabs)/index.tsx
- GET `/api/usuarios/:id` — artifacts/mobile/app/(tabs)/index.tsx
- POST `/api/usuarios` — artifacts/mobile/app/(tabs)/index.tsx
- PUT `/api/usuarios/:id` — artifacts/mobile/app/(tabs)/index.tsx
- DELETE `/api/usuarios/:id` — artifacts/mobile/app/(tabs)/index.tsx
- GET `/` — artifacts/mobile/app/(tabs)/index.tsx
- GET `/api/itens` — artifacts/mobile/app/(tabs)/index.tsx
- POST `/api/itens` — artifacts/mobile/app/(tabs)/index.tsx
- GET `/api/itens/{item_id}` — artifacts/mobile/app/(tabs)/index.tsx
- DELETE `/api/itens/{item_id}` — artifacts/mobile/app/(tabs)/index.tsx
- POST `/api/chat` — artifacts/mobile/data/featuredProjects.ts
- GET `/api/saude` — artifacts/mobile/data/featuredProjects.ts
- GET `/api/provedores` — artifacts/mobile/data/featuredProjects.ts

## 🗄️ Banco de dados
_Nenhuma tabela encontrada._

## 🔐 Variáveis de ambiente (configurar no servidor)
- `AI_INTEGRATIONS_GEMINI_API_KEY`
- `AI_INTEGRATIONS_GEMINI_BASE_URL`
- `ANTHROPIC_API_KEY`
- `BASE_PATH`
- `CLAUDE_MODEL`
- `DATABASE_URL`
- `DISCORD_TOKEN`
- `EXPO_PUBLIC_API_BASE_URL`
- `EXPO_PUBLIC_API_STRATEGY`
- `EXPO_PUBLIC_APP_MODE`
- `EXPO_PUBLIC_DOMAIN`
- `EXPO_PUBLIC_ENABLE_GITHUB`
- `EXPO_PUBLIC_ENABLE_REMOTE_AI`
- `EXPO_PUBLIC_ENABLE_REMOTE_DB`
- `EXPO_PUBLIC_ENABLE_REMOTE_TERMINAL`
- `EXPO_PUBLIC_ENABLE_TERMUX`
- `EXPO_PUBLIC_EXPO_TOKEN`
- `EXPO_PUBLIC_LOCAL_API_PORT`
- `EXPO_PUBLIC_LOCAL_PREVIEW_PORT`
- `EXPO_PUBLIC_REMOTE_API_URL`
- `EXPO_PUBLIC_REPL_ID`
- `GEMINI_API_KEY`
- `GEMINI_MODEL`
- `GROQ_API_KEY`
- `GROQ_MODEL`
- `LOG_LEVEL`
- `NODE_ENV`
- `OPENAI_API_KEY`
- `PORT`
- `REPLIT_DEV_DOMAIN`
- `REPLIT_INTERNAL_APP_DOMAIN`
- `REPL_ID`

_Só os nomes. Os valores (chaves, senhas) nunca vão no código nem no GitHub._

## 🤖 IA usada
- chat.openai.com
- api.groq.com
- openrouter.ai
- generativelanguage.googleapis.com
- api.anthropic.com
- api.openai.com
- console.groq.com
- platform.openai.com
- console.anthropic.com

## 🌐 Serviços de fora que ele acessa
- abc.lhr.life
- aistudio.google.com
- api.allorigins.win
- api.anthropic.com
- api.duckduckgo.com
- api.example.com
- api.exemplo.com
- api.github.com
- api.groq.com
- api.openai.com
- api.perplexity.ai
- api.x.ai
- assistente-juridico.seuservidor.com
- bin.equinox.io
- cdn.jsdelivr.net
- chat.openai.com
- cocalc.com
- codespaces.new
- console.anthropic.com
- console.groq.com
- console.neon.tech
- copy.sh
- corsproxy.io
- deb.nodesource.com
- dev.to
- devmobile.app
- expo.dev
- flutter.dev
- fonts.googleapis.com
- generativelanguage.googleapis.com
- github.com
- github.dev
- gitlab.com
- gitpod.io
- gonative.io
- httpbin.org
- m.reddit.com
- m.youtube.com
- meusite.com
- meusite.com.br
- ngrok-agent.s3.amazonaws.com
- openrouter.ai
- platform.openai.com
- pwa2apk.com
- pypi.org
- raw.githubusercontent.com
- react.dev
- registry.npmjs.org
- seuapp.seuservidor.com
- sh.rustup.rs
- site.com
- site.com.br
- snack.expo.dev
- source.unsplash.com
- stackblitz.com
- support.google.com
- unpkg.com
- vscode.dev
- webvm.io
- www.apkmirror.com
- www.appmysite.com
- www.google.com
- www.perplexity.ai
- www.pwabuilder.com
- www.webintoapp.com
- xxxx.ngrok.io

## 📦 Peças principais (dependências)
`@babel/core` · `@babel/runtime` · `@expo-google-fonts/inter` · `@expo/cli` · `@expo/config` · `@expo/config-plugins` · `@expo/ngrok` · `@expo/vector-icons` · `@react-native-async-storage/async-storage` · `@stardazed/streams-text-encoding` · `@tanstack/react-query` · `@ungap/structured-clone` · `babel-plugin-react-compiler` · `babel-preset-expo` · `eas-cli` · `expo` · `expo-blur` · `expo-clipboard` · `expo-constants` · `expo-document-picker` · `expo-file-system` · `expo-font` · `expo-haptics` · `expo-image` · `expo-image-picker` · `expo-intent-launcher` · `expo-linear-gradient` · `expo-linking` · `expo-location` · `expo-router` · `expo-sharing` · `expo-speech` · `expo-splash-screen` · `expo-sqlite` · `expo-status-bar` · `expo-symbols` · `expo-system-ui` · `expo-web-browser` · `jszip` · `metro` · `metro-runtime` · `pako` · `react` · `react-dom` · `react-native` · `react-native-gesture-handler` · `react-native-keyboard-controller` · `react-native-reanimated` · `react-native-safe-area-context` · `react-native-screens` · `react-native-svg` · `react-native-web` · `react-native-webview` · `react-native-worklets` · `zod` · `zod-validation-error`

## 🧹 Arquivos com coisa da Replit
- artifacts/mobile/scripts/build.js
- artifacts/mobile/server/templates/service-worker.js
- service-worker.js

## 🔁 Roteiro para recriar fora da Replit
1. Importar o projeto no Mini SK e tocar em 🏗️ Preparar → ✅ Fazer tudo (tira a Replit, cria os arquivos que faltam).
2. Backend: escolher onde ele vai ficar ligado (Render/Railway grátis) — ou pedir à IA para transformar as rotas em funções do Netlify/Vercel, usando a tabela "O que falta no backend".
3. Variáveis: cadastrar 32 variável(is) no servidor (lista acima).
4. Testar a prévia; se der erro, 🤖 Mandar os erros para a IA.
5. App: 📲 Instalável (PWA), 📦 APK ou 🖥️ Desktop (.exe) pelo 🏗️ Preparar.

## 🌳 Árvore de arquivos
```
├─ 📁 .github/
│  └─ 📁 workflows/
│     ├─ apk.yml
│     └─ desktop-exe.yml
├─ 📁 artifacts/
│  ├─ 📁 api-server/
│  │  └─ 📁 src/
│  │     ├─ 📁 lib/
│  │     │  ├─ .gitkeep
│  │     │  └─ logger.ts
│  │     ├─ 📁 middlewares/
│  │     │  └─ .gitkeep
│  │     ├─ 📁 routes/
│  │     │  ├─ ai.ts
│  │     │  ├─ health.ts
│  │     │  └─ index.ts
│  │     ├─ app.ts
│  │     └─ index.ts
│  └─ 📁 mobile/
│     ├─ 📁 .github/
│     │  └─ 📁 workflows/
│     │     ├─ build-apk-eas.yml
│     │     ├─ build-apk-local.yml
│     │     └─ eas-build.yml
│     ├─ 📁 app/
│     │  ├─ 📁 (tabs)/
│     │  │  ├─ _layout.tsx
│     │  │  ├─ ai.tsx
│     │  │  ├─ browser.tsx
│     │  │  ├─ editor.tsx
│     │  │  ├─ index.tsx
│     │  │  ├─ plugins.tsx
│     │  │  ├─ pwa.tsx
│     │  │  ├─ settings.tsx
│     │  │  ├─ tasks.tsx
│     │  │  └─ terminal.tsx
│     │  ├─ _layout.tsx
│     │  └─ +not-found.tsx
│     ├─ 📁 assets/
│     │  └─ 📁 images/
│     │     └─ icon.png
│     ├─ 📁 components/
│     │  ├─ AIChat.tsx
│     │  ├─ AIMemoryModal.tsx
│     │  ├─ APKBuilderModal.tsx
│     │  ├─ CampoLivreModal.tsx
│     │  ├─ CheckpointsModal.tsx
│     │  ├─ CodeEditor.tsx
│     │  ├─ CombinarAppsModal.tsx
│     │  ├─ DatabasePanel.tsx
│     │  ├─ ErrorBoundary.tsx
│     │  ├─ ErrorFallback.tsx
│     │  ├─ FileSidebar.tsx
│     │  ├─ FloatingAI.tsx
│     │  ├─ GitHubModal.tsx
│     │  ├─ HtmlPlayground.tsx
│     │  ├─ KeyboardAwareScrollViewCompat.tsx
│     │  ├─ LibrarySearch.tsx
│     │  ├─ ManualModal.tsx
│     │  ├─ MessageRenderer.tsx
│     │  ├─ MonacoEditor.tsx
│     │  ├─ PreviewPanel.tsx
│     │  ├─ ProjectOverviewModal.tsx
│     │  ├─ ProjectPlanModal.tsx
│     │  ├─ SiteExtractor.tsx
│     │  ├─ SystemStatus.tsx
│     │  ├─ Terminal.tsx
│     │  ├─ VoiceAssistant.tsx
│     │  ├─ VSCodeView.tsx
│     │  ├─ VSCodeWebModal.tsx
│     │  └─ XTermWebView.tsx
│     ├─ 📁 constants/
│     │  └─ colors.ts
│     ├─ 📁 context/
│     │  └─ AppContext.tsx
│     ├─ 📁 data/
│     │  └─ featuredProjects.ts
│     ├─ 📁 hooks/
│     │  ├─ useApiBase.ts
│     │  └─ useColors.ts
│     ├─ 📁 plugins/
│     │  └─ withTermuxIntent.js
│     ├─ 📁 scripts/
│     │  └─ build.js
│     ├─ 📁 server/
│     │  ├─ 📁 templates/
│     │  │  ├─ 📁 icons/
│     │  │  │  ├─ apple-touch-icon.png
│     │  │  │  ├─ icon-128.png
│     │  │  │  ├─ icon-144.png
│     │  │  │  ├─ icon-152.png
│     │  │  │  ├─ icon-16.png
│     │  │  │  ├─ icon-180.png
│     │  │  │  ├─ icon-192.png
│     │  │  │  ├─ icon-32.png
│     │  │  │  ├─ icon-384.png
│     │  │  │  ├─ icon-48.png
│     │  │  │  ├─ icon-512.png
│     │  │  │  ├─ icon-72.png
│     │  │  │  ├─ icon-96.png
│     │  │  │  ├─ icon.svg
│     │  │  │  ├─ maskable-192.png
│     │  │  │  ├─ maskable-512.png
│     │  │  │  └─ maskable.svg
│     │  │  ├─ favicon.ico
│     │  │  ├─ landing-page.webmanifest
│     │  │  └─ service-worker.js
│     │  └─ serve.js
│     ├─ 📁 services/
│     │  ├─ apiBase.ts
│     │  ├─ githubService.ts
│     │  ├─ localSQLite.ts
│     │  ├─ previewService.ts
│     │  ├─ runtimeMode.ts
│     │  ├─ storageService.ts
│     │  └─ terminalService.ts
│     ├─ 📁 utils/
│     │  ├─ projectPlan.ts
│     │  └─ zipUtils.ts
│     ├─ .easignore
│     ├─ .env.example
│     ├─ .gitignore
│     ├─ .npmrc
│     ├─ app.json
│     ├─ babel.config.js
│     ├─ capacitor.config.ts
│     ├─ COMO_BUILDAR.md
│     ├─ COMO-BUILDAR-APK.md
│     ├─ eas.json
│     ├─ expo-env.d.ts
│     ├─ GERAR-APK.md
│     ├─ MANUAL-COMPLETO.md
│     ├─ metro.config.js
│     ├─ package.json
│     ├─ PLANO.md
│     └─ tsconfig.json
├─ 📁 electron/
│  ├─ main.cjs
│  └─ preload.cjs
├─ 📁 icons/
│  ├─ apple-touch-icon.png
│  ├─ icon-128.png
│  ├─ icon-144.png
│  ├─ icon-152.png
│  ├─ icon-16.png
│  ├─ icon-180.png
│  ├─ icon-192.png
│  ├─ icon-32.png
│  ├─ icon-384.png
│  ├─ icon-48.png
│  ├─ icon-512.png
│  ├─ icon-72.png
│  ├─ icon-96.png
│  ├─ icon.svg
│  ├─ maskable-192.png
│  ├─ maskable-512.png
│  └─ maskable.svg
├─ .gitignore
├─ apk.config.json
├─ favicon.ico
├─ index.html
├─ manifest.json
├─ MANUAL_TECNICO.md
├─ package.json
├─ PLANO.md
└─ service-worker.js
```
