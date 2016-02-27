import {Component} from 'angular2/core';
import {Http} from 'angular2/http';

@Component({
    selector: 'ponyracer-app',
    // added the RacesCmp component
    template: `
        <h1>PonyRacer</h1>
    `,
    // declare all the components you use in your template
    directives: []
})
export class PonyRacerApp{
    
    constructor(private http: Http){
        http.get(`http://validate.jsontest.com/?json=%5BJSON-code-to-validate%5D`)
            .subscribe(response => {
                console.log(response.json());
            });
    }
}
//end:users-cmp[]