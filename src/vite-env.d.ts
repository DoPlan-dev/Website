/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GA_MEASUREMENT_ID?: string
  readonly VITE_HEATMAP_SITE_ID?: string
  readonly VITE_8N8_API_KEY?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

