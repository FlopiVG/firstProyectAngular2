import {Component} from 'angular2/core';
import {RacesCmp} from './components/races_cmp';
import {PoniesCmp} from './components/ponies_cmp';
import {RaceService} from './services/race_service';
import {RegisterFormCmp} from './components/register-form-cmp';

@Component({
    selector: 'ponyracer-app',
    // added the RacesCmp component
    template: `
        <register-form-cmp></register-form-cmp>
    `,
    // declare all the components you use in your template
    directives: [RegisterFormCmp]
})
export class PonyRacerApp{
    
    constructor(private _raceService: RaceService) {}
    
    list(){
        return this._raceService.list();
    }
    
    onNewRace(){
        // add a flashy message for the user.
    }
}
//end:users-cmp[]