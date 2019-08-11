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
  apiUrl: '',

  cognito: {
    appClientId: '',
    appClientSecret: '',
    awsCognitoDomain: '',
    login_redirect_uri:'',
    logout_uri:''
  }

};

