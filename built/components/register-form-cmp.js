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
var common_1 = require('angular2/common');
var User = (function () {
    function User() {
    }
    return User;
})();
var RegisterFormCmp = (function () {
    function RegisterFormCmp(fb) {
        this.username = fb.control('', common_1.Validators.required);
        this.password = fb.control('', common_1.Validators.required);
        this.birthdate = fb.control('', common_1.Validators.compose([common_1.Validators.required, this.isOldEnough]));
        this.userForm = fb.group({
            username: this.username,
            password: this.password,
            birthdate: this.birthdate
        });
    }
    RegisterFormCmp.prototype.register = function () {
        // we will have to handle the submission
        console.log(this.userForm.value);
    };
    RegisterFormCmp.prototype.isOldEnough = function (control) {
        var birthDatePlus18 = new Date(control.value);
        birthDatePlus18.setFullYear(birthDatePlus18.getFullYear() + 18);
        return birthDatePlus18 < new Date() ? null : { tooYoung: true };
    };
    RegisterFormCmp = __decorate([
        core_1.Component({
            selector: 'register-form-cmp',
            templateUrl: 'components/register_form_cmp.html'
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder])
    ], RegisterFormCmp);
    return RegisterFormCmp;
})();
exports.RegisterFormCmp = RegisterFormCmp;
//# sourceMappingURL=register-form-cmp.js.map