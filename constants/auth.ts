export const SOCIAL_PROVIDERS = [
  { id: "github", name: "GitHub" },
  { id: "google", name: "Google" },
] as const;

export type SocialProviderId = (typeof SOCIAL_PROVIDERS)[number]["id"];

export function isSocialProvider(value: unknown): value is SocialProviderId {
  return SOCIAL_PROVIDERS.some((provider) => provider.id === value);
}
