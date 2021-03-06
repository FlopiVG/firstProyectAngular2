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
var PoniesCmp = (function () {
    function PoniesCmp() {
        this.ponies = [{ name: 'Rainbow Dash' }, { name: 'Pinkie Pie' }];
    }
    PoniesCmp.prototype.refreshPonies = function () {
        this.ponies = [{ name: 'Fluttershy' }, { name: 'Rarity' }];
    };
    PoniesCmp = __decorate([
        core_1.Component({
            selector: 'ponies-cmp',
            template: "\n        <ul>\n            <button (click)=\"refreshPonies()\">Refresh</button>\n            <li *ngFor=\"#pony of ponies; #isEven=even\" [style.color]=\"isEven ? 'green' : 'black'\">\n                {{pony.name}}\n            </li>\n        </ul>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], PoniesCmp);
    return PoniesCmp;
})();
exports.PoniesCmp = PoniesCmp;
//# sourceMappingURL=ponies_cmp.js.map