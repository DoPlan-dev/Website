/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GA_MEASUREMENT_ID?: string
  readonly VITE_HEATMAP_SITE_ID?: string
  readonly VITE_8N8_API_KEY?: string
  readonly VITE_SENTRY_DSN?: string
  readonly VITE_ENVIRONMENT?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

