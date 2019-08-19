// # projects/core/src/environments/environment.prod.ts
export const environment = {
  production: true,
  logging: false,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  storageUID: 'myngapp',
  defaultLang: "en",
  contentUrl: "assets/i18n",
  apiUrl: 'https://docker.batchu.org/',

  cognito: {
    appClientId: '5h34jq64l4nvpbt16c8suf5e0q',
    appClientSecret: '655h06qtar44mgot89cdu51ce4i4mq9fc9dpj51pd2s42r2050e',
    awsCognitoDomain: 'https://auth.batchu.org/',
    login_redirect_uri:'https://s3.batchu.org/_aws/login',
    logout_uri:'https://s3.batchu.org/_aws/logout'
  }

};
