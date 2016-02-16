import {Component} from 'angular2/core';
import {RacesCmp} from './components/races_cmp';
import {PoniesCmp} from './components/ponies_cmp';
import {RaceService} from './services/race_service';

@Component({
    selector: 'ponyracer-app',
    // added the RacesCmp component
    template: `
        <h1>PonyRace</h1>
    `,
    // declare all the components you use in your template
    directives: []
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