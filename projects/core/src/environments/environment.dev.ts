// # projects/core/src/environments/environment.ts
export const environment = {
  production: false,
  logging: false,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  storageUID: 'myngapp',
  defaultLang: "en",
  apiUrl2: 'http://localhost:8000/',
  apiUrl: 'http://167.71.46.24/invitations-back-end/public/',
  contentUrl: "assets/i18n",
  cognito: {
    appClientId: '7blcefua3lrntsg94hqnh4t11r',
    appClientSecret: '40801d606l7dd4tpv9h4rlgiq9ttg591ojn6kugi59qb8adpb75',
    awsCognitoDomain: 'https://auth.batchu.org/',
    login_redirect_uri:'http://localhost:4200/_aws/login',
    logout_uri:'http://localhost:4200/_aws/logout'
  }
};