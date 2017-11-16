interface AuthConfig {
  CLIENT_ID: string;
  CLIENT_DOMAIN: string;
  AUDIENCE: string;
  REDIRECT: string;
  SCOPE: string;
}

export const AUTH_CONFIG: AuthConfig = {
  CLIENT_ID: 'jJ33fZ3Z7aw8Ar16vW5pGmwJarILpzl3',
  CLIENT_DOMAIN: 'nikita-glukhi.auth0.com',
  AUDIENCE: 'tests-api',
  REDIRECT: 'http://localhost:4200/callback',
  SCOPE: 'openid'
};
