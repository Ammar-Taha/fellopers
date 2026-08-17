const ROUTES = {
  HOME: "/",
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  AUTH_CALLBACK: (provider: string) => `/api/auth/callback/${provider}`,
  COLLECTIONS: "/collections",
  JOBS: "/jobs",
  TAGS: "/tags",
  TAG: (id: string) => `/tags/${id}`,
  COMMUNITY: "/community",
  ASK_QUESTION: "/ask-question",
  QUESTION: (id: string) => `/question/${id}`,
  /*
  PROFILE: "/profile",
  SEARCH: "/search",
  SETTINGS: "/settings",
  ADMIN: "/admin",
  PRIVACY: "/privacy",
  TERMS: "/terms",
  */
};

export default ROUTES;
