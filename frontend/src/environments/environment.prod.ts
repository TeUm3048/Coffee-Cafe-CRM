export const environment = {
  production: true,
  apiServerUrl: "http://127.0.0.1:8080", // the running FLASK api server url
  auth0: {
    url: "dev-1qo7yrlrp7hrbc7u.us", // the auth0 domain prefix
    audience: "coffee", // the audience set for the auth0 app
    clientId: "8cNvGGfAe3AJhxYz6FalhijaOPfkfQa8", // the client id generated for the auth0 app
    callbackURL: "http://localhost:80", // the base url of the running ionic application.
  },
};
