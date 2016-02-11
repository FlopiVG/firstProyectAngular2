import {bootstrap} from 'angular2/platform/browser';
import {PonyRacerApp} from './ponyracer_app';

bootstrap(PonyRacerApp)
    .catch(err => console.log(err)); //useful to catch the errors