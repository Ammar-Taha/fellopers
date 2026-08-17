const ROUTES = {
  HOME: "/",
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  AUTH_CALLBACK: (provider: string) => `/api/auth/callback/${provider}`,
  COLLECTIONS: "/collections",
  JOBS: "/jobs",
  TAGS: "/tags",
  COMMUNITY: "/community",
  ASK_QUESTION: "/ask-question",
  /*
  PROFILE: "/profile",
  QUESTION: "/question",
  SEARCH: "/search",
  SETTINGS: "/settings",
  ADMIN: "/admin",
  PRIVACY: "/privacy",
  TERMS: "/terms",
  */
};

export default ROUTES;
