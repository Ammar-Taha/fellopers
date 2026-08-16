const ROUTES = {
  HOME: "/",
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  AUTH_CALLBACK: (provider: string) => `/api/auth/callback/${provider}`,
  /*
  PROFILE: "/profile",
  QUESTION: "/question",
  COLLECTIONS: "/collections",
  TAGS: "/tags",
  SEARCH: "/search",
  SETTINGS: "/settings",
  ADMIN: "/admin",
  PRIVACY: "/privacy",
  TERMS: "/terms",
  */
};

export default ROUTES;
