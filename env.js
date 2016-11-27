var apiUrlLocal = "http://localhost:3030/";
var apiUrlDeployed = "https://vegasbackendapi.herokuapp.com/";
(function (window) {
  window.__env = window.__env || {};

  // API url
  window.__env.apiUrl = apiUrlDeployed;

  // Base url
  window.__env.baseUrl = '/';

  // Whether or not to enable debug mode
  // Setting this to false will disable console output
  window.__env.enableDebug = true;
}(this));
