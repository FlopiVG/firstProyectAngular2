var browser_1 = require('angular2/platform/browser');
var ponyracer_app_1 = require('./ponyracer_app');
var http_1 = require('angular2/http');
var race_service_1 = require('./services/race_service');
var core_1 = require('angular2/core');
// we just have to change this constant when going to prod
var IS_PROD = false;
browser_1.bootstrap(ponyracer_app_1.PonyRacerApp, [http_1.HTTP_PROVIDERS,
    core_1.provide(race_service_1.RaceService, { useClass: IS_PROD ? race_service_1.RaceService : race_service_1.FakeRaceService })])
    .catch(function (err) { return console.log(err); }); //useful to catch the errors
//# sourceMappingURL=bootstrap.js.map