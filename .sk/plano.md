# Plano do projeto: DevMobile_completo

_Gerado pelo Mini SK em 13/10/2026, 16:54:14_

## Resumo

- Arquivos: **90** (2.3 MB)
- Tipo: projeto Node com 1 package.json
- Arquivos por tipo: TSX 42, TypeScript 21, Markdown 6, JavaScript 5, JSON 4, GITKEEP 2, .env 2, YAML 2, EASIGNORE 1, Git 1, NPMRC 1, TOML 1, PNG 1, HTML 1
- Dependências diferentes: **60** (56 obrigatórias, 4 só para montar)
- Restos da Replit: **10 arquivo(s)**

## 📦 @workspace/mobile — `artifacts/mobile/package.json`

- Arquivo principal: `expo-router/entry`

**Comandos (scripts):**

| Comando | O que faz | Executa |
|---|---|---|
| `dev` | Liga o app em modo de teste (atualiza sozinho) | `EXPO_PUBLIC_EXPO_TOKEN=$EXPO_TOKEN pnpm exec expo start --localhost --port $PORT` |
| `start` | Liga a versão final | `pnpm exec expo start` |
| `android` | Monta o APK com Capacitor | `pnpm exec expo run:android` |
| `ios` | — | `pnpm exec expo run:ios` |
| `web` | — | `pnpm exec expo start --web` |

**Dependências (o app precisa) — 56:**

| Pacote | Versão | Pra que serve | Tipo |
|---|---|---|---|
| `@babel/core` | ^7.29.0 | (sem descrição — toque no nome para ver no npm) | ❔ |
| `@babel/runtime` | ^7.29.2 | (sem descrição — toque no nome para ver no npm) | ❔ |
| `@expo-google-fonts/inter` | ^0.4.0 | (sem descrição — toque no nome para ver no npm) | ❔ |
| `@expo/cli` | 54.0.23 | Peça do Expo (APK) | 📱 APK |
| `@expo/config` | ^55.0.16 | Peça do Expo (APK) | 📱 APK |
| `@expo/config-plugins` | ^55.0.8 | Peça do Expo (APK) | 📱 APK |
| `@expo/ngrok` | ^4.1.0 | Peça do Expo (APK) | 📱 APK |
| `@expo/vector-icons` | ^15.0.3 | Peça do Expo (APK) | 📱 APK |
| `@react-native-async-storage/async-storage` | 2.2.0 | (sem descrição — toque no nome para ver no npm) | ❔ |
| `@stardazed/streams-text-encoding` | ^1.0.2 | (sem descrição — toque no nome para ver no npm) | ❔ |
| `@tanstack/react-query` | ^5.90.21 | Busca e guarda dados do servidor nas telas | 🖥 Tela |
| `@ungap/structured-clone` | ^1.3.0 | (sem descrição — toque no nome para ver no npm) | ❔ |
| `babel-plugin-react-compiler` | ^19.0.0-beta-e993439-20250117 | (sem descrição — toque no nome para ver no npm) | ❔ |
| `babel-preset-expo` | ^54.0.10 | (sem descrição — toque no nome para ver no npm) | ❔ |
| `eas-cli` | ^18.11.0 | Envia o build para a EAS | 📱 APK |
| `expo` | ~54.0.34 | App de celular com Expo (EAS) | 📱 APK |
| `expo-blur` | ~15.0.8 | Peça do Expo (APK) | 📱 APK |
| `expo-clipboard` | ~8.0.8 | Peça do Expo (APK) | 📱 APK |
| `expo-constants` | ~18.0.11 | Peça do Expo (APK) | 📱 APK |
| `expo-document-picker` | ^14.0.8 | Peça do Expo (APK) | 📱 APK |
| `expo-file-system` | ^19.0.22 | Peça do Expo (APK) | 📱 APK |
| `expo-font` | ~14.0.10 | Peça do Expo (APK) | 📱 APK |
| `expo-haptics` | ~15.0.8 | Peça do Expo (APK) | 📱 APK |
| `expo-image` | ~3.0.11 | Peça do Expo (APK) | 📱 APK |
| `expo-image-picker` | ~17.0.11 | Peça do Expo (APK) | 📱 APK |
| `expo-intent-launcher` | ~13.0.8 | Peça do Expo (APK) | 📱 APK |
| `expo-linear-gradient` | ~15.0.8 | Peça do Expo (APK) | 📱 APK |
| `expo-linking` | ~8.0.12 | Peça do Expo (APK) | 📱 APK |
| `expo-location` | ~19.0.8 | Peça do Expo (APK) | 📱 APK |
| `expo-router` | ~6.0.17 | Peça do Expo (APK) | 📱 APK |
| `expo-sharing` | ^14.0.8 | Peça do Expo (APK) | 📱 APK |
| `expo-speech` | ^14.0.8 | Peça do Expo (APK) | 📱 APK |
| `expo-splash-screen` | ~31.0.12 | Peça do Expo (APK) | 📱 APK |
| `expo-sqlite` | ~16.0.10 | Peça do Expo (APK) | 📱 APK |
| `expo-status-bar` | ~3.0.9 | Peça do Expo (APK) | 📱 APK |
| `expo-symbols` | ~1.0.8 | Peça do Expo (APK) | 📱 APK |
| `expo-system-ui` | ~6.0.9 | Peça do Expo (APK) | 📱 APK |
| `expo-web-browser` | ~15.0.11 | Peça do Expo (APK) | 📱 APK |
| `jszip` | ^3.10.1 | Cria e lê arquivos .zip | 🧰 Utilidade |
| `metro` | ^0.83.3 | (sem descrição — toque no nome para ver no npm) | ❔ |
| `metro-runtime` | ^0.83.3 | (sem descrição — toque no nome para ver no npm) | ❔ |
| `pako` | ^2.1.0 | (sem descrição — toque no nome para ver no npm) | ❔ |
| `react` | 19.1.0 | Biblioteca que monta as telas do app | 🖥 Tela |
| `react-dom` | 19.1.0 | Coloca as telas do React no navegador | 🖥 Tela |
| `react-native` | 0.81.5 | App de celular nativo | 📱 APK |
| `react-native-gesture-handler` | ~2.28.0 | (sem descrição — toque no nome para ver no npm) | ❔ |
| `react-native-keyboard-controller` | 1.18.5 | (sem descrição — toque no nome para ver no npm) | ❔ |
| `react-native-reanimated` | ~4.1.1 | (sem descrição — toque no nome para ver no npm) | ❔ |
| `react-native-safe-area-context` | ~5.6.0 | (sem descrição — toque no nome para ver no npm) | ❔ |
| `react-native-screens` | ~4.16.0 | (sem descrição — toque no nome para ver no npm) | ❔ |
| `react-native-svg` | 15.12.1 | (sem descrição — toque no nome para ver no npm) | ❔ |
| `react-native-web` | ^0.21.0 | (sem descrição — toque no nome para ver no npm) | ❔ |
| `react-native-webview` | ^13.15.0 | (sem descrição — toque no nome para ver no npm) | ❔ |
| `react-native-worklets` | 0.5.1 | (sem descrição — toque no nome para ver no npm) | ❔ |
| `zod` | ^3.25.76 | Confere se os dados estão no formato certo | 🧰 Utilidade |
| `zod-validation-error` | ^3.4.0 | (sem descrição — toque no nome para ver no npm) | ❔ |

**Dependências de montagem (dev) — 4:**

| Pacote | Versão | Pra que serve | Tipo |
|---|---|---|---|
| `@types/pako` | ^2.0.4 | Tipos para o TypeScript — só para montar, pode ignorar | 📐 Tipos |
| `@types/react` | ~19.1.10 | Tipos para o TypeScript — só para montar, pode ignorar | 📐 Tipos |
| `@types/react-dom` | ~19.1.7 | Tipos para o TypeScript — só para montar, pode ignorar | 📐 Tipos |
| `typescript` | ~5.9.2 | JavaScript com tipos — só para montar, não vai pro app final | 🔧 Montagem |

## ⛔ Restos da Replit (tirar ou trocar)

- artifacts/api-server/src/routes/ai.ts — 2 menção(ões)
- artifacts/mobile/.env — 1 menção(ões)
- artifacts/mobile/COMO_BUILDAR.md — 1 menção(ões)
- artifacts/mobile/COMO-BUILDAR-APK.md — 1 menção(ões)
- artifacts/mobile/eas.json — 1 menção(ões)
- artifacts/mobile/GERAR-APK.md — 1 menção(ões)
- artifacts/mobile/MANUAL-COMPLETO.md — 1 menção(ões)
- artifacts/mobile/PLANO.md — 1 menção(ões)
- artifacts/mobile/scripts/build.js — 10 menção(ões)
- MANUAL_TECNICO.md — 2 menção(ões)

## Arquivos importantes (11) — mandar estes para a IA

- `artifacts/api-server/src/index.ts`
- `artifacts/api-server/src/routes/ai.ts`
- `artifacts/api-server/src/routes/health.ts`
- `artifacts/api-server/src/routes/index.ts`
- `artifacts/mobile/.env.example`
- `artifacts/mobile/app.json`
- `artifacts/mobile/capacitor.config.ts`
- `artifacts/mobile/eas.json`
- `artifacts/mobile/package.json`
- `artifacts/mobile/scripts/build.js`
- `artifacts/mobile/tsconfig.json`

## Estrutura completa (90 arquivos)

```
├── artifacts/
│   ├── api-server/
│   │   └── src/
│   │       ├── lib/
│   │       │   ├── .gitkeep
│   │       │   └── logger.ts
│   │       ├── middlewares/
│   │       │   └── .gitkeep
│   │       ├── routes/
│   │       │   ├── ai.ts
│   │       │   ├── health.ts
│   │       │   └── index.ts
│   │       ├── app.ts
│   │       └── index.ts
│   └── mobile/
│       ├── .github/
│       │   └── workflows/
│       │       ├── build-apk-eas.yml
│       │       └── build-apk-local.yml
│       ├── .replit-artifact/
│       │   └── artifact.toml
│       ├── app/
│       │   ├── (tabs)/
│       │   │   ├── _layout.tsx
│       │   │   ├── ai.tsx
│       │   │   ├── browser.tsx
│       │   │   ├── editor.tsx
│       │   │   ├── index.tsx
│       │   │   ├── plugins.tsx
│       │   │   ├── pwa.tsx
│       │   │   ├── settings.tsx
│       │   │   ├── tasks.tsx
│       │   │   └── terminal.tsx
│       │   ├── _layout.tsx
│       │   └── +not-found.tsx
│       ├── assets/
│       │   └── images/
│       │       └── icon.png
│       ├── components/
│       │   ├── AIChat.tsx
│       │   ├── AIMemoryModal.tsx
│       │   ├── APKBuilderModal.tsx
│       │   ├── CampoLivreModal.tsx
│       │   ├── CheckpointsModal.tsx
│       │   ├── CodeEditor.tsx
│       │   ├── CombinarAppsModal.tsx
│       │   ├── DatabasePanel.tsx
│       │   ├── ErrorBoundary.tsx
│       │   ├── ErrorFallback.tsx
│       │   ├── FileSidebar.tsx
│       │   ├── FloatingAI.tsx
│       │   ├── GitHubModal.tsx
│       │   ├── HtmlPlayground.tsx
│       │   ├── KeyboardAwareScrollViewCompat.tsx
│       │   ├── LibrarySearch.tsx
│       │   ├── ManualModal.tsx
│       │   ├── MessageRenderer.tsx
│       │   ├── MonacoEditor.tsx
│       │   ├── PreviewPanel.tsx
│       │   ├── ProjectOverviewModal.tsx
│       │   ├── ProjectPlanModal.tsx
│       │   ├── SiteExtractor.tsx
│       │   ├── SystemStatus.tsx
│       │   ├── Terminal.tsx
│       │   ├── VoiceAssistant.tsx
│       │   ├── VSCodeView.tsx
│       │   ├── VSCodeWebModal.tsx
│       │   └── XTermWebView.tsx
│       ├── constants/
│       │   └── colors.ts
│       ├── context/
│       │   └── AppContext.tsx
│       ├── data/
│       │   └── featuredProjects.ts
│       ├── hooks/
│       │   ├── useApiBase.ts
│       │   └── useColors.ts
│       ├── plugins/
│       │   └── withTermuxIntent.js
│       ├── scripts/
│       │   └── build.js
│       ├── server/
│       │   ├── templates/
│       │   │   └── landing-page.html
│       │   └── serve.js
│       ├── services/
│       │   ├── apiBase.ts
│       │   ├── githubService.ts
│       │   ├── localSQLite.ts
│       │   ├── previewService.ts
│       │   ├── runtimeMode.ts
│       │   ├── storageService.ts
│       │   └── terminalService.ts
│       ├── utils/
│       │   ├── projectPlan.ts
│       │   └── zipUtils.ts
│       ├── .easignore
│       ├── .env
│       ├── .env.example
│       ├── .gitignore
│       ├── .npmrc
│       ├── app.json
│       ├── babel.config.js
│       ├── capacitor.config.ts
│       ├── COMO_BUILDAR.md
│       ├── COMO-BUILDAR-APK.md
│       ├── eas.json
│       ├── expo-env.d.ts
│       ├── GERAR-APK.md
│       ├── MANUAL-COMPLETO.md
│       ├── metro.config.js
│       ├── package.json
│       ├── PLANO.md
│       └── tsconfig.json
└── MANUAL_TECNICO.md
```
