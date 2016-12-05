//keys and urls not safe at all this way,
//need to find a better way. find a way to
//get dotenv into this bitch

var apiUrlLocal = "http://localhost:3030/";
var apiUrlDeployed = "https://vegasbackendapi.herokuapp.com/";
var geocodingKey = "AIzaSyBnIthxzYC1OeHtVmyMxqLjVpVxmpimG8s";
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
