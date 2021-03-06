var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('angular2/core');
var common_1 = require('angular2/common');
var DisplayErrorCmp = (function () {
    // we inject the form model
    function DisplayErrorCmp(formModel) {
        this.formModel = formModel;
    }
    // we then find the control
    DisplayErrorCmp.prototype.ngOnInit = function () {
        this.control = this.formModel.form.find(this.controlName);
    };
    // the div in the template will only be added if
    // the control is dirty and has the specified error
    DisplayErrorCmp.prototype.isDisplayed = function () {
        return this.control.dirty && this.control.hasError(this.error);
    };
    __decorate([
        core_1.Input('control'), 
        __metadata('design:type', String)
    ], DisplayErrorCmp.prototype, "controlName", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DisplayErrorCmp.prototype, "error", void 0);
    DisplayErrorCmp = __decorate([
        core_1.Component({
            selector: 'display-error',
            template: "<div *ngIf=\"isDisplayed()><ng-content></ng-content></div>"
        }),
        __param(0, core_1.Host()), 
        __metadata('design:paramtypes', [common_1.NgFormModel])
    ], DisplayErrorCmp);
    return DisplayErrorCmp;
})();
exports.DisplayErrorCmp = DisplayErrorCmp;
//# sourceMappingURL=display-error.cmp.js.map