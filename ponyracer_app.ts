import {Component} from 'angular2/core';
import {RacesCmp} from './races_cmp';
import {PoniesCmp} from './ponies_cmp';
import {RaceService} from './services/race_service';

@Component({
    selector: 'ponyracer-app',
    // added the RacesCmp component
    template: `
        <h1>PonyRace</h1>
        <races-cmp (newRaceAvailable)='onNewRace()'></races-cmp>
        <ponies-cmp></ponies-cmp>
        
    `,
    // declare all the components you use in your template
    directives: [RacesCmp, PoniesCmp]
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