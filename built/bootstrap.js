var browser_1 = require('angular2/platform/browser');
var ponyracer_app_1 = require('./ponyracer_app');
var http_1 = require('angular2/http');
browser_1.bootstrap(ponyracer_app_1.PonyRacerApp, [http_1.HTTP_PROVIDERS])
    .catch(function (err) { return console.log(err); }); //useful to catch the errors
//# sourceMappingURL=bootstrap.js.map