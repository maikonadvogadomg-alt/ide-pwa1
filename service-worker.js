// service-worker.js — gerado pelo Mini SK em 13/10/2026, 17:11:31
// Não precisa mexer: ele guarda sozinho o que o app usa.
const PREFIXO = 'sk-devmobilecompleto-';
const CACHE = PREFIXO + 'mv749kvs';
// Lista feita automaticamente (para funcionar sem internet logo após instalar)
const GUARDAR = [
  "./",
  "./android/app/build.gradle",
  "./android/app/src/main/AndroidManifest.xml",
  "./android/app/src/main/assets/__ponte.js",
  "./android/app/src/main/java/app/minisk/shell/MainActivity.java",
  "./android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png",
  "./android/app/src/main/res/xml/rede.xml",
  "./android/build.gradle",
  "./android/gradle.properties",
  "./android/settings.gradle",
  "./apk.config.json",
  "./artifacts/api-server/src/app.ts",
  "./artifacts/api-server/src/index.ts",
  "./artifacts/api-server/src/lib/logger.ts",
  "./artifacts/api-server/src/routes/ai.ts",
  "./artifacts/api-server/src/routes/health.ts",
  "./artifacts/api-server/src/routes/index.ts",
  "./artifacts/mobile/.easignore",
  "./artifacts/mobile/.env.example",
  "./artifacts/mobile/.npmrc",
  "./artifacts/mobile/app.json",
  "./artifacts/mobile/app/_layout.tsx",
  "./artifacts/mobile/app/(tabs)/_layout.tsx",
  "./artifacts/mobile/app/(tabs)/ai.tsx",
  "./artifacts/mobile/app/(tabs)/browser.tsx",
  "./artifacts/mobile/app/(tabs)/editor.tsx",
  "./artifacts/mobile/app/(tabs)/index.tsx",
  "./artifacts/mobile/app/(tabs)/plugins.tsx",
  "./artifacts/mobile/app/(tabs)/pwa.tsx",
  "./artifacts/mobile/app/(tabs)/settings.tsx",
  "./artifacts/mobile/app/(tabs)/tasks.tsx",
  "./artifacts/mobile/app/(tabs)/terminal.tsx",
  "./artifacts/mobile/app/+not-found.tsx",
  "./artifacts/mobile/assets/images/icon.png",
  "./artifacts/mobile/babel.config.js",
  "./artifacts/mobile/capacitor.config.ts",
  "./artifacts/mobile/COMO_BUILDAR.md",
  "./artifacts/mobile/COMO-BUILDAR-APK.md",
  "./artifacts/mobile/components/AIChat.tsx",
  "./artifacts/mobile/components/AIMemoryModal.tsx",
  "./artifacts/mobile/components/APKBuilderModal.tsx",
  "./artifacts/mobile/components/CampoLivreModal.tsx",
  "./artifacts/mobile/components/CheckpointsModal.tsx",
  "./artifacts/mobile/components/CodeEditor.tsx",
  "./artifacts/mobile/components/CombinarAppsModal.tsx",
  "./artifacts/mobile/components/DatabasePanel.tsx",
  "./artifacts/mobile/components/ErrorBoundary.tsx",
  "./artifacts/mobile/components/ErrorFallback.tsx",
  "./artifacts/mobile/components/FileSidebar.tsx",
  "./artifacts/mobile/components/FloatingAI.tsx",
  "./artifacts/mobile/components/GitHubModal.tsx",
  "./artifacts/mobile/components/HtmlPlayground.tsx",
  "./artifacts/mobile/components/KeyboardAwareScrollViewCompat.tsx",
  "./artifacts/mobile/components/LibrarySearch.tsx",
  "./artifacts/mobile/components/ManualModal.tsx",
  "./artifacts/mobile/components/MessageRenderer.tsx",
  "./artifacts/mobile/components/MonacoEditor.tsx",
  "./artifacts/mobile/components/PreviewPanel.tsx",
  "./artifacts/mobile/components/ProjectOverviewModal.tsx",
  "./artifacts/mobile/components/ProjectPlanModal.tsx",
  "./artifacts/mobile/components/SiteExtractor.tsx",
  "./artifacts/mobile/components/SystemStatus.tsx",
  "./artifacts/mobile/components/Terminal.tsx",
  "./artifacts/mobile/components/VoiceAssistant.tsx",
  "./artifacts/mobile/components/VSCodeView.tsx",
  "./artifacts/mobile/components/VSCodeWebModal.tsx",
  "./artifacts/mobile/components/XTermWebView.tsx",
  "./artifacts/mobile/constants/colors.ts",
  "./artifacts/mobile/context/AppContext.tsx",
  "./artifacts/mobile/data/featuredProjects.ts",
  "./artifacts/mobile/eas.json",
  "./artifacts/mobile/expo-env.d.ts",
  "./artifacts/mobile/GERAR-APK.md",
  "./artifacts/mobile/hooks/useApiBase.ts",
  "./artifacts/mobile/hooks/useColors.ts",
  "./artifacts/mobile/MANUAL-COMPLETO.md",
  "./artifacts/mobile/metro.config.js",
  "./artifacts/mobile/package.json",
  "./artifacts/mobile/PLANO.md",
  "./artifacts/mobile/plugins/withTermuxIntent.js",
  "./artifacts/mobile/scripts/build.js",
  "./artifacts/mobile/server/serve.js",
  "./artifacts/mobile/server/templates/favicon.ico",
  "./artifacts/mobile/server/templates/icons/apple-touch-icon.png",
  "./artifacts/mobile/server/templates/icons/icon-16.png",
  "./artifacts/mobile/server/templates/icons/icon-32.png",
  "./artifacts/mobile/server/templates/icons/icon-48.png",
  "./artifacts/mobile/server/templates/icons/icon-72.png",
  "./artifacts/mobile/server/templates/icons/icon-96.png",
  "./artifacts/mobile/server/templates/icons/icon-128.png",
  "./artifacts/mobile/server/templates/icons/icon-144.png",
  "./artifacts/mobile/server/templates/icons/icon-152.png",
  "./artifacts/mobile/server/templates/icons/icon-180.png",
  "./artifacts/mobile/server/templates/icons/icon-192.png",
  "./artifacts/mobile/server/templates/icons/icon-384.png",
  "./artifacts/mobile/server/templates/icons/icon-512.png",
  "./artifacts/mobile/server/templates/icons/icon.svg",
  "./artifacts/mobile/server/templates/icons/maskable-192.png",
  "./artifacts/mobile/server/templates/icons/maskable-512.png",
  "./artifacts/mobile/server/templates/icons/maskable.svg",
  "./artifacts/mobile/server/templates/landing-page.webmanifest",
  "./artifacts/mobile/server/templates/service-worker.js",
  "./artifacts/mobile/services/apiBase.ts",
  "./artifacts/mobile/services/githubService.ts",
  "./artifacts/mobile/services/localSQLite.ts",
  "./artifacts/mobile/services/previewService.ts",
  "./artifacts/mobile/services/runtimeMode.ts",
  "./artifacts/mobile/services/storageService.ts",
  "./artifacts/mobile/services/terminalService.ts",
  "./artifacts/mobile/tsconfig.json",
  "./artifacts/mobile/utils/projectPlan.ts",
  "./artifacts/mobile/utils/zipUtils.ts",
  "./electron/main.cjs",
  "./electron/preload.cjs",
  "./favicon.ico",
  "./icons/apple-touch-icon.png",
  "./icons/icon-16.png",
  "./icons/icon-32.png",
  "./icons/icon-48.png",
  "./icons/icon-72.png",
  "./icons/icon-96.png",
  "./icons/icon-128.png",
  "./icons/icon-144.png",
  "./icons/icon-152.png",
  "./icons/icon-180.png",
  "./icons/icon-192.png",
  "./icons/icon-384.png",
  "./icons/icon-512.png",
  "./icons/icon.svg",
  "./icons/maskable-192.png",
  "./icons/maskable-512.png",
  "./icons/maskable.svg",
  "./index.html",
  "./manifest.json",
  "./MANUAL_TECNICO.md",
  "./package.json",
  "./PLANO.md"
];

self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then((c) => Promise.all(GUARDAR.map((u) => c.add(u).catch(() => null)))));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys()
    .then((ks) => Promise.all(ks.filter((k) => k.startsWith(PREFIXO) && k !== CACHE).map((k) => caches.delete(k))))
    .then(() => self.clients.claim()));
});

// Primeiro a internet (sempre a versão nova); sem internet, a cópia guardada.
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  e.respondWith(
    fetch(req).then((res) => {
      if (res.ok) { const copia = res.clone(); caches.open(CACHE).then((c) => c.put(req, copia)); }
      // Igual ao Workbox da Replit: página que não existe (rota do app) abre o index
      if (res.status === 404 && req.mode === 'navigate') return caches.match('./').then((r) => r || fetch('./'));
      return res;
    }).catch(() => caches.match(req, { ignoreSearch: true }).then((r) => r || (req.mode === 'navigate' ? caches.match('./') : undefined)))
  );
});
