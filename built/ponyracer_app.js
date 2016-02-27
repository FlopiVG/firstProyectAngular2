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
var http_1 = require('angular2/http');
var PonyRacerApp = (function () {
    function PonyRacerApp(http) {
        this.http = http;
        http.get("http://validate.jsontest.com/?json=%5BJSON-code-to-validate%5D")
            .subscribe(function (response) {
            console.log(response.json());
        });
    }
    PonyRacerApp = __decorate([
        core_1.Component({
            selector: 'ponyracer-app',
            // added the RacesCmp component
            template: "\n        <h1>PonyRacer</h1>\n    ",
            // declare all the components you use in your template
            directives: []
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PonyRacerApp);
    return PonyRacerApp;
})();
exports.PonyRacerApp = PonyRacerApp;
//end:users-cmp[] 
//# sourceMappingURL=ponyracer_app.js.map