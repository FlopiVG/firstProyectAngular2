import {bootstrap} from 'angular2/platform/browser';
import {PonyRacerApp} from './ponyracer_app';
import {HTTP_PROVIDERS} from 'angular2/http';

bootstrap(PonyRacerApp, [HTTP_PROVIDERS])
    .catch(err => console.log(err)); //useful to catch the errors