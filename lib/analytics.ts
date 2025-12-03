/**
 * Analytics integration with Plausible
 * Privacy-first, GDPR compliant, no cookies
 */

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, string | number> }) => void;
  }
}

export function trackEvent(
  eventName: string,
  props?: Record<string, string | number>
): void {
  if (typeof window !== "undefined" && window.plausible) {
    window.plausible(eventName, { props });
  }
}

export const analytics = {
  commandCopied: () => trackEvent("command_copied"),
  ctaClicked: (ctaType: string) => trackEvent("cta_clicked", { type: ctaType }),
  pageView: (page: string) => trackEvent("page_view", { page }),
};

