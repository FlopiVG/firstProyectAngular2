import {Component} from 'angular2/core';
import {FormBuilder, ControlGroup, Control, Validators} from 'angular2/common';

class User{
    username: string;
    password: string;
}

@Component({
    selector: 'register-form-cmp',
    templateUrl:'components/register_form_cmp.html'
})
export class RegisterFormCmp{
    userForm: ControlGroup;
    username: Control;
    password: Control;
    birthdate: Control;
    
    constructor(fb: FormBuilder){
        this.username = fb.control('', Validators.required);
        this.password = fb.control('', Validators.required);
        this.birthdate = fb.control('', Validators.compose([Validators.required, this.isOldEnough]));
        
        this.userForm = fb.group({
            username: this.username,
            password: this.password,
            birthdate: this.birthdate
        })
    }
    
    register(){
        // we will have to handle the submission
        console.log(this.userForm.value);
    }
    
    isOldEnough(control: Control){
        let birthDatePlus18 = new Date(control.value);
        birthDatePlus18.setFullYear(birthDatePlus18.getFullYear() + 18);
        return birthDatePlus18 < new Date() ? null : {tooYoung: true};
    }
}
