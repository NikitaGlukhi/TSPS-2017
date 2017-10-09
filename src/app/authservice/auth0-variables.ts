interface AuthConfig {
  CLIENT_ID: string;
  CLIENT_DOMAIN: string;
  AUDIENCE: string;
  REDIRECT: string;
  SCOPE: string;
}

export const AUTH_CONFIG: AuthConfig = {
  CLIENT_ID: '59db3733c108031c1474a6aa',
  CLIENT_DOMAIN: 'nikita-glukhi.auth0.com',
  AUDIENCE: 'test-api',
  REDIRECT: 'http://localhost:4200/callback',
  SCOPE: 'openid'
};
