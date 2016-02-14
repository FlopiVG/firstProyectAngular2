import {Component} from 'angular2/core';


@Component({
    selector: 'races-cmp',
    template: `
        <div *ngIf="races.length > 0">
            <h2>Races</h2>
            <ul>
                <li *ngFor="#race of races; #i=index">{{i}} - {{race.name}}</li>  
            </ul>
        </div>
    `
})
export class RacesCmp{
    races: Array<any> = [{name: 'London'}, {name: 'Lyon'}];
}