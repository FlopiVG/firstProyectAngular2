var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var races_cmp_1 = require('./components/races_cmp');
var ponies_cmp_1 = require('./components/ponies_cmp');
var race_service_1 = require('./services/race_service');
var PonyRacerApp = (function () {
    function PonyRacerApp(_raceService) {
        this._raceService = _raceService;
    }
    PonyRacerApp.prototype.list = function () {
        return this._raceService.list();
    };
    PonyRacerApp.prototype.onNewRace = function () {
        // add a flashy message for the user.
    };
    PonyRacerApp = __decorate([
        core_1.Component({
            selector: 'ponyracer-app',
            // added the RacesCmp component
            template: "\n        <h1>PonyRace</h1>\n        <races-cmp (newRaceAvailable)='onNewRace()'></races-cmp>\n        <ponies-cmp></ponies-cmp>\n        \n    ",
            // declare all the components you use in your template
            directives: [races_cmp_1.RacesCmp, ponies_cmp_1.PoniesCmp]
        }), 
        __metadata('design:paramtypes', [race_service_1.RaceService])
    ], PonyRacerApp);
    return PonyRacerApp;
})();
exports.PonyRacerApp = PonyRacerApp;
//end:users-cmp[] 
//# sourceMappingURL=ponyracer_app.js.map